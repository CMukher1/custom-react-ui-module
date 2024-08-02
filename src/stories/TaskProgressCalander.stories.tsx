import colors from "../utils/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

import { TaskProgressCalander } from "@/components/TaskProgressCalander";

const meta: Meta<typeof TaskProgressCalander> = {
  title: "Components/TaskProgressCalander",
  component: TaskProgressCalander,
  tags: ["autodocs"],
  argTypes: {
    taskDone: {
      control: { type: "number", min: 0, max: 100 },
      description: "Number of tasks completed",
    },
    totalTasks: {
      control: { type: "number", min: 1, max: 100 },
      description: "Total number of tasks",
    },

    isRounded: {
      control: "boolean",
      description: "Whether the button should have rounded corners",
    },
    headerText: {
      control: "text",
      description: "Text for the header",
    },
    subText: {
      control: "text",
      description: "Text for the subheader",
    },
    SubIcon: {
      options: ["FaCalendarAlt", "FaCheckCircle", "FaInfoCircle"],
      mapping: {
        FaCalendarAlt: FaCalendarAlt,
        FaClock: FaClock,
      },
      control: {
        type: "select",
        labels: {
          FaCalendarAlt: "Calendar Icon",
          FaCheckCircle: "Check Circle Icon",
          FaInfoCircle: "Info Circle Icon",
        },
      },
      description: "Icon for the subheader",
    },
    TernaryIcon: {
      options: ["FaCalendarAlt", "FaCheckCircle", "FaInfoCircle"],
      mapping: {
        FaCalendarAlt: FaCalendarAlt,
        FaClock: FaClock,
      },
      control: {
        type: "select",
        labels: {
          FaCalendarAlt: "Calendar Icon",
          FaClock: "Clock Circle Icon",
        },
      },
      description: "Icon for the ternary text",
    },
    ternaryText: {
      control: "text",
      description: "Optional ternary text",
    },
    headerSize: {
      control: "text",
      description: "Size of the header text",
    },
    headerColor: {
      control: "color",
      description: "Color of the header text",
    },
    subHeaderSize: {
      control: "text",
      description: "Size of the subheader text",
    },
    subHeaderColor: {
      control: "color",
      description: "Color of the subheader text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskProgressCalander>;

export const Default: Story = {
  args: {
    taskDone: 3,
    totalTasks: 5,
    headerText: "Task Progress",
    subText: "Current Status",
    SubIcon: FaClock,
    TernaryIcon: FaCalendarAlt,
    ternaryText: "Additional Info",
  },
};

export const HighProgress: Story = {
  args: {
    ...Default.args,
    taskDone: 8,
    totalTasks: 10,
    headerText: "Almost Done!",
    subText: "Great Progress",
    SubIcon: FaClock,
  },
};

export const CustomStyling: Story = {
  args: {
    ...Default.args,
    isRounded: false,
    headerSize: "2rem",
    headerColor: colors.light,
    subHeaderSize: "1rem",
    subHeaderColor: colors.lightGrey,
  },
};
