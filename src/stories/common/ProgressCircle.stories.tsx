import { ProgressCircleComponent } from "../../components/common/ProgressCircle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressCircleComponent> = {
  title: "Components/ProgressCircle",
  component: ProgressCircleComponent,
  tags: ["autodocs"],
  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
    showText: {
      control: {
        type: "boolean",
      },
    },
    circleWidth: {
      control: {
        type: "number",
      },
    },
    circleHeight: {
      control: {
        type: "number",
      },
    },
    isLight: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircleComponent>;

export const Default: Story = {
  args: {
    percentage: 50,
    showText: true,
    circleWidth: 60,
    circleHeight: 60,
    isLight: false,
  },
};

export const LowProgress: Story = {
  args: {
    percentage: 10,
    showText: true,
    circleWidth: 60,
    circleHeight: 60,
    isLight: false,
  },
};

export const HighProgress: Story = {
  args: {
    percentage: 90,
    showText: true,
    circleWidth: 60,
    circleHeight: 60,
    isLight: false,
  },
};

export const HideText: Story = {
  args: {
    percentage: 50,
    showText: false,
    circleWidth: 60,
    circleHeight: 60,
    isLight: false,
  },
};

export const LargeCircle: Story = {
  args: {
    percentage: 50,
    showText: true,
    circleWidth: 120,
    circleHeight: 120,
    isLight: false,
  },
};

export const LightTheme: Story = {
  args: {
    percentage: 50,
    showText: true,
    circleWidth: 60,
    circleHeight: 60,
    isLight: true,
  },
};

export const LargeCircleLightTheme: Story = {
  args: {
    percentage: 50,
    showText: true,
    circleWidth: 120,
    circleHeight: 120,
    isLight: true,
  },
};
