import { TaskProgress } from "../components/TaskProgress";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TaskProgress> = {
  title: "Components/TaskProgress",
  component: TaskProgress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TaskProgress>;

export const Default: Story = {
  args: {
    taskDone: 5,
    totalTasks: 10,
    date: "July 28",
  },
};

export const LowProgress: Story = {
  args: {
    taskDone: 1,
    totalTasks: 10,
    date: "July 28",
  },
};

export const HighProgress: Story = {
  args: {
    taskDone: 9,
    totalTasks: 10,
    date: "July 28",
  },
};
