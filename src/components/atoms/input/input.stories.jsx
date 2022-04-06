import { Input } from "./index";

export default {
	title: "Components/Atoms/Input",
	component: Input,
};

const Template = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
	placeholder: "Enter your email",
	type: "text",
};
