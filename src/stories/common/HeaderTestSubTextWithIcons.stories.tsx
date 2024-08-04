import { HeaderTextSubTextWithIcons } from "../../components/common/HeaderTextSubTextWithIcons";
import colors from "@/utils/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { FaInfo, FaUser } from "react-icons/fa";
import { AiOutlineInfoCircle, AiOutlineUser } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";

const meta: Meta<typeof HeaderTextSubTextWithIcons> = {
  title: "Components/HeaderTextSubTextWithIcons",
  component: HeaderTextSubTextWithIcons,
  tags: ["autodocs"],
  argTypes: {
    headerText: {
      control: "text",
      description: "The text for the header",
      defaultValue: "Header Text",
    },
    subText: {
      control: "text",
      description: "The text for the subheader",
      defaultValue: "Subheader Text",
    },
    ternaryText: {
      control: "text",
      description: "The text for the optional subheader",
      defaultValue: "Ternary Text",
    },
    SubIcon: {
      options: ["FaUser", "AiOutlineUser"],
      mapping: {
        FaUser: FaUser,
        AiOutlineUser: AiOutlineUser,
      },
      control: {
        type: "select",
        labels: {
          FaUser: "Font Awesome User",
          AiOutlineUser: "Ant Design User",
        },
      },
      description: "The icon component for the subheader",
    },
    TernaryIcon: {
      options: ["FaInfo", "AiOutlineInfoCircle"],
      mapping: {
        FaInfo: FaInfo,
        AiOutlineInfoCircle: AiOutlineInfoCircle,
      },
      control: {
        type: "select",
        labels: {
          FaInfo: "Font Awesome Info",
          AiOutlineInfoCircle: "Ant Design Info Circle",
        },
      },
      description: "The icon component for the header",
    },
    headerSize: {
      control: "text",
      description: "The size of the header text",
      defaultValue: "1.5rem",
    },
    headerColor: {
      control: "color",
      description: "The color of the header text",
      defaultValue: colors.primary,
    },
    subHeaderSize: {
      control: "text",
      description: "The size of the subheader text",
      defaultValue: "0.9rem",
    },
    subHeaderColor: {
      control: "color",
      description: "The color of the subheader text",
      defaultValue: colors.dark,
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderTextSubTextWithIcons>;

export const Default: Story = {
  args: {
    headerText: "Header Text",
    subText: "Subheader Text",
    SubIcon: FaUser,
    TernaryIcon: FaInfo,
  },
};

export const CustomHeaderAndSubHeader: Story = {
  args: {
    headerText: "Custom Header Text",
    subText: "Custom Subheader Text",
    ternaryText: "This is ternary Text",
    SubIcon: FaClock,
    TernaryIcon: LuCalendarRange,
    headerSize: "2rem",
    headerColor: colors.dark,
    subHeaderSize: "1.2rem",
    subHeaderColor: colors.lightGrey,
  },
};

export const DarkMode: Story = {
  args: {
    headerText: "Dark Header Text",
    subText: "Dark Subheader Text",
    SubIcon: FaUser,
    TernaryIcon: FaInfo,
    headerColor: colors.dark,
    subHeaderColor: colors.dark,
  },
};
