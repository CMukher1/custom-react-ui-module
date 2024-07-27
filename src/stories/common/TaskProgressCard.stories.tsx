import { TaskProgressCardComponent } from "../../components/common/TaskProgressCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TaskProgressCardComponent> = {
  title: "Components/TaskProgressCard",
  component: TaskProgressCardComponent,
  tags: ["autodocs"],
  argTypes: {
    isDark: {
      control: "boolean",
      description: "Toggle dark mode for the card",
      defaultValue: false,
    },
    text: {
      control: "text",
      description: "Text to display in the card",
      defaultValue: "",
    },
    roundedCorner: {
      control: {
        type: "select",
        options: ["none", "medium", "large"],
      },
      description: "Corner rounding options",
      defaultValue: "none",
    },
    children: {
      control: "text",
      description: "Content to display in the card",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskProgressCardComponent>;

export const Default: Story = {
  args: {
    text: "Task Progress Card Content",
  },
};

export const WithMultipleChildren: Story = {
  args: {
    text: "Task Progress Card Title",
    children: (
      <div>
        <h2 className="text-xl font-bold">Task Progress Card Title</h2>
        <p>Task Progress Card Content</p>
      </div>
    ),
  },
};

export const DarkMode: Story = {
  args: {
    isDark: true,
    text: "Task Progress Card Content in Dark Mode",
  },
};

export const RoundedCorners: Story = {
  args: {
    text: "Task Progress Card with Rounded Corners",
    roundedCorner: "large",
  },
};
