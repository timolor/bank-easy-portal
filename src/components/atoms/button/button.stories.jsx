import { Button } from "./index";

export default {
	title: "Components/Atoms/Buttons/Primary Button",
	component: Button,
	// argTypes: {
	// 	type: { options: ["button", "submit", "reset"], control: { type: "radio" } },
	// 	variant: { options: ["primary", "secondary", "tertiary"], control: { type: "radio" } },
	// },
};

const Template = (args) => <Button {...args}>Join Meeting</Button>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	// fullWidth: false,
	// disabled: false,
	loading: false,
	// rounded: false,
	// type: "button",
};
