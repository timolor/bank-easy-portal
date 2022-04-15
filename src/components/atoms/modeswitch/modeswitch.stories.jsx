import { ModeSwitch } from "./index";

export default {
	title: "Components/Atoms/ModeSwitch",
	component: ModeSwitch,
};

const Template = (args) => <ModeSwitch {...args} />;

export const modeSwitch = Template.bind({});
modeSwitch.args = {
	checked: false,
	initialChecked: false,
};
