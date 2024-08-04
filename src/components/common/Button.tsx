import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import colors from "../../utils/colors";

export interface ButtonProps extends Omit<MuiButtonProps, "variant"> {
  label: string;
  isRounded?: boolean;
  buttonType?: "contained" | "outlined" | "text";
  backgroundColor?: string;
  textColor?: string;
  dataTestId?: string;
}

const roundedStyles = {
  none: 0,
  medium: 8,
};

export const Button = ({
  label,
  isRounded = false,
  buttonType = "contained",
  backgroundColor = colors.primary,
  textColor = colors.light,
  className,
  dataTestId = "button",
  ...props
}: ButtonProps) => (
  <MuiButton
    variant={buttonType}
    sx={{
      backgroundColor:
        buttonType === "contained" ? backgroundColor : "transparent",
      borderColor: buttonType === "outlined" ? backgroundColor : "transparent",
      color: textColor,
      borderRadius: isRounded ? roundedStyles.medium : roundedStyles.none,
      "&:hover": {
        backgroundColor:
          buttonType === "contained" ? colors.primary : "transparent",
        borderColor: buttonType === "outlined" ? colors.primary : "transparent",
      },
    }}
    className={className}
    data-testid={dataTestId}
    {...props}
  >
    {label}
  </MuiButton>
);
