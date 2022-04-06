import { Input } from "./index";

export default {
	title: "Components/Atoms/Input",
	component: Input,
	// argTypes: {
	// 	type: { options: ["button", "submit", "reset"], control: { type: "radio" } },
	// 	variant: { options: ["primary", "secondary"], control: { type: "radio" } },
	// },
};

const Template = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
	placeholder: "Enter your email",
	type: "text",
};
