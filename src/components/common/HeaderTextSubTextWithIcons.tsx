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
  dataTestId?: string;
}

export const HeaderTextSubTextWithIcons = ({
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
  dataTestId = "header-text-sub-text-with-icons",
}: HeaderTestSubTextWithIconsProps) => {
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
      <Box
        display="flex"
        alignItems="center"
        data-testid={`${dataTestId}-subtext-container`}
      >
        <SubIcon
          color={subHeaderColor}
          fontSize={subHeaderSize}
          className="m-[0.2rem]"
          data-testid={`${dataTestId}-subicon`}
        />
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
      </Box>

      {ternaryText && (
        <Box
          display="flex"
          alignItems="center"
          fontSize={subHeaderSize}
          data-testid={`${dataTestId}-ternary-container`}
        >
          <TernaryIcon
            color={subHeaderColor}
            fontSize={subHeaderSize}
            className="m-[0.2rem]"
            data-testid={`${dataTestId}-ternary-icon`}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: subHeaderSize,
              color: subHeaderColor,
              marginLeft: "0.2rem",
            }}
            data-testid={`${dataTestId}-ternary-text`}
          >
            {ternaryText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
