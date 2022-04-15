import React, {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import {
	useFloating,
	offset,
	flip,
	shift,
	useListNavigation,
	useHover,
	useTypeahead,
	useInteractions,
	useRole,
	useClick,
	useDismiss,
	useFocusTrap,
	autoUpdate,
	safePolygon,
	FloatingPortal,
	useFloatingTree,
	useFloatingNodeId,
	useFloatingParentNodeId,
	FloatingNode,
	FloatingTree,
} from "@floating-ui/react-dom-interactions";
import mergeRefs from "react-merge-refs";
import { MenuButton } from "./dropmenu.styled";

export const MenuItem = forwardRef(({ label, children, disabled, ...props }, ref) => {
	return (
		<button {...props} ref={ref} role="menuitem" disabled={disabled}>
			{label || children}
		</button>
	);
});

export const MenuComponent = forwardRef(({ children, label, className, ...props }, ref) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [open, setOpen] = useState(false);

	const listItemsRef = useRef([]);
	const listContentRef = useRef(
		Children.map(children, (child) => (isValidElement(child) ? child.props.label : null))
	);

	const tree = useFloatingTree();
	const nodeId = useFloatingNodeId();
	const parentId = useFloatingParentNodeId();
	const nested = parentId != null;

	const { x, y, reference, floating, strategy, refs, update, context } = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset({ mainAxis: 30, alignmentAxis: nested ? -5 : -55 }), flip(), shift()],
		placement: nested ? "right-start" : "bottom-start",
		nodeId,
	});

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
		useHover(context, {
			handleClose: safePolygon(),
			enabled: nested,
		}),
		useClick(context),
		useRole(context, { role: "menu" }),
		useDismiss(context),
		useFocusTrap(context, { inert: true }),
		useListNavigation(context, {
			listRef: listItemsRef,
			activeIndex,
			nested,
			onNavigate: setActiveIndex,
		}),
		useTypeahead(context, {
			listRef: listContentRef,
			onMatch: open ? setActiveIndex : undefined,
			activeIndex,
		}),
	]);

	useEffect(() => {
		if (open && refs.reference.current && refs.floating.current) {
			return autoUpdate(refs.reference.current, refs.floating.current, update);
		}
	}, [open, nested, update, refs.reference, refs.floating]);

	// Block pointer events of sibling list items while a nested submenu is open
	useEffect(() => {
		function onTreeOpenChange({ open, reference, parentId }) {
			if (parentId !== nodeId) {
				return;
			}

			listItemsRef.current.forEach((item) => {
				if (item && item !== reference) {
					item.style.pointerEvents = open ? "none" : "";
				}
			});
		}

		tree.events.on("openChange", onTreeOpenChange);

		return () => {
			tree.events.off("openChange", onTreeOpenChange);
		};
	}, [nodeId, tree.events, refs.reference, refs.floating]);

	useEffect(() => {
		tree?.events.emit("openChange", {
			open,
			parentId,
			reference: refs.reference.current,
		});
	}, [tree, open, parentId, refs.reference]);

	const mergedReferenceRef = useMemo(() => mergeRefs([ref, reference]), [reference, ref]);

	return (
		<FloatingNode id={nodeId}>
			<MenuButton
				{...getReferenceProps({
					...props,
					ref: mergedReferenceRef,
					onClick: ({ currentTarget }) => currentTarget.focus(),
					...(nested
						? {
								role: "menuitem",
								className: `MenuItem${open ? " open" : ""}`,
						  }
						: {
								className: `RootMenu${open ? " open" : ""}`,
						  }),
				})}>
				{label} {nested && <span>➔</span>}
			</MenuButton>
			<FloatingPortal>
				{open && (
					<div
						{...getFloatingProps({
							className: `${className}`,
							ref: floating,
							style: {
								position: strategy,
								top: y ?? "",
								left: x ?? "",
							},
						})}>
						{Children.map(
							children,
							(child, index) =>
								isValidElement(child) &&
								cloneElement(
									child,
									getItemProps({
										role: "menuitem",
										className: "MenuItem",
										ref(node) {
											listItemsRef.current[index] = node;
										},
									})
								)
						)}
					</div>
				)}
			</FloatingPortal>
		</FloatingNode>
	);
});

export const Menu = forwardRef((props, ref) => {
	const parentId = useFloatingParentNodeId();

	if (parentId == null) {
		return (
			<FloatingTree>
				<MenuComponent {...props} ref={ref} />
			</FloatingTree>
		);
	}

	return <MenuComponent {...props} ref={ref} />;
});
