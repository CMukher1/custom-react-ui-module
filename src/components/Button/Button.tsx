import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  ...props
}) => (
  <MuiButton
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
      className || ""
    }`}
    {...props}
  >
    {label}
  </MuiButton>
);
