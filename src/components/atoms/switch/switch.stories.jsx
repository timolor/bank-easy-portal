import { Switch } from "./index";

export default {
	title: "Components/Atoms/Switch",
	component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const toggleSwitch = Template.bind({});
toggleSwitch.args = {
	checked: false,
	initialChecked: false,
};
