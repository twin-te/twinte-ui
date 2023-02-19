import { Story } from "@storybook/vue3";
import IconButton from "./IconButton.vue";

export default {
  component: IconButton,
  argTypes: {
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["normal", "primary", "danger"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "disabled"],
    },
  },
};

const Template: Story = (args) => ({
  components: { IconButton },
  setup() {
    return { args };
  },
  template: `<IconButton v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
  size: "medium",
  iconName: "search",
  loading: false,
};
