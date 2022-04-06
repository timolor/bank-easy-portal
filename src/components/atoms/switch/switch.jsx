import React, { useState, useEffect, useMemo, useCallback } from "react";
import { StyledSwitchContainer, StyledSwitchInput, StyledSwitch, StyledSwitchCircle } from "./switch.styled";

const Switch = ({ animated, initialChecked, checked, icon, iconOn, iconOff, onChange, ...props }) => {
	const [selfChecked, setSelfChecked] = useState(false);

	const circleIcon = useMemo(() => {
		const hasIcon = icon || iconOn || iconOff;
		const hasIconOn = Boolean(iconOn);
		const hasIconOff = Boolean(iconOff);
		if (!hasIcon) return null;
		if (hasIconOn && selfChecked) return iconOn;
		if (hasIconOff && !selfChecked) return iconOff;
		return hasIcon;
	}, [selfChecked, icon, iconOn, iconOff]);

	const handleChange = useCallback(() => {
		setSelfChecked(!selfChecked) && onChange();
	}, [selfChecked, onChange]);

	useEffect(() => {
		if (checked === undefined) return;
		setSelfChecked(checked);
	}, [checked]);

	useEffect(() => {
		initialChecked ? setSelfChecked(true) : setSelfChecked(false);
	}, [initialChecked]);

	return (
		<StyledSwitchContainer animated={animated} {...props}>
			<StyledSwitchInput tabIndex={-1} type="checkbox" checked={selfChecked} onChange={handleChange} />
			<StyledSwitch checked={selfChecked} animated={animated}>
				<StyledSwitchCircle checked={selfChecked}>{circleIcon}</StyledSwitchCircle>
			</StyledSwitch>
		</StyledSwitchContainer>
	);
};

export default Switch;
