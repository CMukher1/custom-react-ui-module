import { Typography, Box } from "@mui/material";
import colors from "../../utils/colors";
import { IconType } from "react-icons";

interface HeaderTestSubTextWithIconsProps {
  headerText: string;
  subText: string;
  SubIcon: IconType;
  TernaryIcon: IconType;
  ternaryText?: string;
  headerSize?: string;
  headerColor?: string;
  subHeaderSize?: string;
  subHeaderColor?: string;
  className?: string;
}

export const HeaderTestSubTextWithIcons = ({
  headerText,
  subText,
  SubIcon,
  TernaryIcon,
  ternaryText,
  headerSize = "1.5rem",
  headerColor = colors.primary,
  subHeaderSize = "0.9rem",
  subHeaderColor = colors.dark,
  className = "",
}: HeaderTestSubTextWithIconsProps) => {
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
      <Box display="flex" alignItems="center">
        <SubIcon
          color={subHeaderColor}
          fontSize={subHeaderSize}
          className="m-[0.2rem]"
        />
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

      {ternaryText && (
        <Box display="flex" alignItems="center" fontSize={subHeaderSize}>
          <TernaryIcon
            color={subHeaderColor}
            fontSize={subHeaderSize}
            className="m-[0.2rem]"
          />
          <Typography
            variant="body1"
            style={{
              fontSize: subHeaderSize,
              color: subHeaderColor,
              marginLeft: "0.2rem",
            }}
          >
            {ternaryText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
