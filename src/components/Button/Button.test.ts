import { render } from "@testing-library/vue";
import Button from "./Button.vue";

test("test v-slot", async () => {
  const { getByText } = render(Button, {
    slots: {
      default: "現在の学期",
    },
  });

  getByText("現在の学期");
});
