import { HeaderTextSubTextComponent } from "../../components/common/HeaderTextSubText";
import colors from "@/utils/colors";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderTextSubTextComponent> = {
  title: "Components/HeaderTextSubText",
  component: HeaderTextSubTextComponent,
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
type Story = StoryObj<typeof HeaderTextSubTextComponent>;

export const Default: Story = {
  args: {
    headerText: "Header Text",
    subText: "Subheader Text",
  },
};

export const CustomHeaderAndSubHeader: Story = {
  args: {
    headerText: "Custom Header Text",
    subText: "Custom Subheader Text",
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
    headerColor: colors.dark,
    subHeaderColor: colors.dark,
  },
};
