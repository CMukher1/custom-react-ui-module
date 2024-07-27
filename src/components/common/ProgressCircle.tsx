import { formatWholeNumber } from "../../utils/numbers";
import colors from "../../utils/colors";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

interface ProgressCircleProps {
  percentage: number;
  showText?: boolean;
  circleWidth?: number;
  circleHeight?: number;
  isLight?: boolean;
  className?: string;
}

const BackgroundCircle = styled(CircularProgress)({
  color: colors.lightGrey,
  position: "absolute",
});

const ProgressCircle = styled(CircularProgress)<ProgressCircleProps>(
  ({ percentage }) => ({
    color: colors.primary,
    "& .MuiCircularProgress-circle": {
      strokeLinecap: "round",
    },
    "& .MuiCircularProgress-bar": {
      strokeLinecap: "round",
      transition: "transform 0.3s ease-in-out",
      transform: `rotate(${percentage * 3.6}deg)`,
    },
  })
);

const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
`;

export const ProgressCircleComponent = ({
  percentage,
  showText = true,
  circleWidth = 60,
  circleHeight = 60,
  isLight = false,
  className,
}: ProgressCircleProps) => {
  const fontSize = Math.min(circleWidth, circleHeight) / 4;
  const textColor = isLight ? colors.light : colors.primary;

  return (
    <div
      className={`relative w-${circleWidth} h-${circleHeight} flex items-center justify-center ${className}`}
      style={{ position: "relative" }}
    >
      <BackgroundCircle
        variant="determinate"
        value={100}
        size={Math.min(circleWidth, circleHeight)}
      />
      <ProgressCircle
        percentage={percentage}
        variant="determinate"
        value={percentage}
        size={Math.min(circleWidth, circleHeight)}
      />
      {showText && (
        <ProgressText style={{ fontSize, color: textColor }}>
          {formatWholeNumber(percentage)}%
        </ProgressText>
      )}
    </div>
  );
};
