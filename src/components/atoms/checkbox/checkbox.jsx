import React, { useState, useCallback, useEffect } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from "./checkbox.styled";

const Checkbox = ({ className, checked, onChange, ...props }) => {
	const [checkedState, setCheckedState] = useState(checked);

	const handleChange = useCallback(() => {
		setCheckedState(!checkedState) && onChange();
	}, [checkedState, onChange]);

	useEffect(() => {
		if (checked === undefined) return;
		setCheckedState(checked);
	}, [checked]);

	return (
		<CheckboxContainer onClick={handleChange} className={className}>
			<HiddenCheckbox checked={checkedState} {...props} />
			<StyledCheckbox checked={checkedState}>
				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
	);
};

export default Checkbox;
