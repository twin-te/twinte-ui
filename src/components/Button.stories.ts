import { Story } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    layout: {
      control: { type: "select" },
      options: ["flexible", "fill", "half"],
    },
    color: {
      control: { type: "select" },
      options: ["base", "primary", "danger"],
    },
    state: {
      control: { type: "select" },
      options: ["active", "default", "disabled"],
    },
  },
};

const Template: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args">${args.slot}</Button>`,
});

export const Default = Template.bind({});
Default.args = {
  slot: "現在の学期",
  size: "medium",
  layout: "flexible",
  color: "base",
  icon: false,
  pauseActiveStyle: false,
  state: "default",
};
