import React from "react";
import colors from "../../utils/colors";

interface TaskProgressCardProps {
  isDark?: boolean;
  text?: string;
  roundedCorner?: "none" | "medium" | "large";
  children?: React.ReactNode;
  className?: string;
}

const getRoundedClass = (roundedCorner: "none" | "medium" | "large") => {
  switch (roundedCorner) {
    case "medium":
      return "rounded-md";
    case "large":
      return "rounded-lg";
    default:
      return "";
  }
};

export const TaskProgressCardComponent = ({
  isDark = false,
  text = "",
  roundedCorner = "none",
  children,
  className,
}: TaskProgressCardProps) => {
  const bgColor = isDark ? colors.dark : colors.lightGrey;
  const roundedClass = getRoundedClass(roundedCorner);

  return (
    <div
      className={`bg-${bgColor} ${roundedClass} p-4 text-white flex justify-between items-center w-full ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {text && <span className="mr-4">{text}</span>}
      {children}
    </div>
  );
};
