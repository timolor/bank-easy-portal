import { Checkbox } from "./index";

export default {
	title: "Components/Atoms/Checkbox",
	component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
	checked: false,
};
