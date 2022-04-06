import { ActionTag } from "./index";

export default {
	title: "Components/Atoms/ActionTag",
	component: ActionTag,
};

const Template = (args) => <ActionTag {...args} />;

export const actionTag = Template.bind({});
actionTag.args = {
	type: "enabled",
	text: "Enabled",
};
