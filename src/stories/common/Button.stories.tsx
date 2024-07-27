import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/common/Button";
import colors from "../../utils/colors";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    buttonType: "contained",
    isRounded: false,
    backgroundColor: colors.primary,
    textColor: colors.light,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    buttonType: "outlined",
    isRounded: true,
    backgroundColor: colors.primary,
    textColor: colors.primary,
  },
};

export const TextButton: Story = {
  args: {
    label: "Text Button",
    buttonType: "text",
    isRounded: true,
    textColor: colors.primary,
  },
};
