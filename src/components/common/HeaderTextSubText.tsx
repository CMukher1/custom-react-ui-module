import { Typography, Box } from "@mui/material";
import colors from "../../utils/colors";

interface HeaderTextSubTextProps {
  headerText: string;
  subText: string;
  ternaryText?: string;
  headerSize?: string;
  headerColor?: string;
  subHeaderSize?: string;
  subHeaderColor?: string;
  className?: string;
  dataTestId?: string;
}

export const HeaderTextSubTextComponent = ({
  headerText,
  subText,
  ternaryText,
  headerSize = "1.5rem",
  headerColor = colors.primary,
  subHeaderSize = "0.9rem",
  subHeaderColor = colors.dark,
  className = "",
  dataTestId = "header-text-sub-text",
}: HeaderTextSubTextProps) => {
  return (
    <Box className={`p-4 ${className}`} data-testid={dataTestId}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          fontSize: headerSize,
          color: headerColor,
        }}
        data-testid={`${dataTestId}-header`}
      >
        {headerText}
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontSize: subHeaderSize,
          color: subHeaderColor,
          marginLeft: "0.2rem",
        }}
        data-testid={`${dataTestId}-subtext`}
      >
        {subText}
      </Typography>
      {ternaryText && (
        <Typography
          variant="body1"
          style={{
            fontSize: subHeaderSize,
            color: subHeaderColor,
            marginLeft: "0.2rem",
          }}
          data-testid={`${dataTestId}-ternary`}
        >
          {ternaryText}
        </Typography>
      )}
    </Box>
  );
};
