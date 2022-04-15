import { Button } from "./index";

export default {
	title: "Components/Atoms/Button",
	component: Button,
	argTypes: {
		type: { options: ["button", "submit", "reset"], control: { type: "radio" } },
		variant: { options: ["primary", "secondary"], control: { type: "radio" } },
	},
};

const Template = (args) => <Button {...args}>Join Meeting</Button>;

export const button = Template.bind({});
button.args = {
	fullWidth: false,
	disabled: false,
	loading: false,
	rounded: false,
	type: "button",
	icon: "dashboard",
	iconFill: "#000",
};
