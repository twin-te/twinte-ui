import { Story } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  component: Button,
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
};

export const Primary = Template.bind({});

Primary.args = {
  slot: "現在の学期",
  size: "medium",
  layout: "flexible",
  color: "primary",
};

export const Danger = Template.bind({});

Danger.args = {
  slot: "現在の学期",
  size: "medium",
  layout: "flexible",
  color: "danger",
};

export const Small = Template.bind({});

Small.args = {
  slot: "現在の学期",
  size: "small",
  layout: "flexible",
  color: "base",
};

export const Large = Template.bind({});

Large.args = {
  slot: "現在の学期",
  size: "large",
  layout: "flexible",
  color: "base",
};
