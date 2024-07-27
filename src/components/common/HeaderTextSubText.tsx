import { Typography, Box } from "@mui/material";
import colors from "../../utils/colors";

interface HeaderTextSubTextProps {
  headerText: string;
  subText: string;
  headerSize?: string;
  headerColor?: string;
  subHeaderSize?: string;
  subHeaderColor?: string;
  className?: string;
}

export const HeaderTextSubTextComponent = ({
  headerText,
  subText,
  headerSize = "1.5rem",
  headerColor = colors.primary,
  subHeaderSize = "0.9rem",
  subHeaderColor = colors.dark,
  className = "",
}: HeaderTextSubTextProps) => {
  return (
    <Box className={`p-4 ${className}`}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          fontSize: headerSize,
          color: headerColor,
        }}
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
      >
        {subText}
      </Typography>
    </Box>
  );
};
