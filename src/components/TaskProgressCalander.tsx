import { TaskProgressCardComponent } from "./common/TaskProgressCard";
import { ProgressCircleComponent } from "./common/ProgressCircle";
import { Button } from "./common/Button";
import { Box } from "@mui/material";
import colors from "../utils/colors";
import { HeaderTestSubTextWithIcons } from "./common/HeaderTextSubTextWithIcons";
import { IconType } from "react-icons";

interface TaskProgressCalanderProps {
  taskDone: number;
  totalTasks: number;
  date: string;
  className?: string;
  buttonType?: "contained" | "outlined" | "text";
  isRounded?: boolean;
  headerText: string;
  subText: string;
  SubIcon: IconType;
  TernaryIcon: IconType;
  ternaryText?: string;
  headerSize?: string;
  headerColor?: string;
  subHeaderSize?: string;
  subHeaderColor?: string;
}

export const TaskProgressCalander = ({
  taskDone,
  totalTasks,
  date,
  buttonType = "contained",
  isRounded = true,
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
}: TaskProgressCalanderProps) => {
  const percentage = (taskDone / totalTasks) * 100;

  return (
    <TaskProgressCardComponent
      isDark
      roundedCorner="medium"
      className={className}
    >
      <Box className="flex justify-between items-center w-full">
        <Box className="flex flex-col">
          <HeaderTestSubTextWithIcons
            headerText={headerText}
            subText={subText}
            SubIcon={SubIcon}
            TernaryIcon={TernaryIcon}
            ternaryText={ternaryText}
            headerSize={headerSize}
            headerColor={headerColor}
            subHeaderSize={subHeaderSize}
            subHeaderColor={subHeaderColor}
          />
        </Box>
        <Box className="flex items-center">
          <ProgressCircleComponent
            percentage={percentage}
            circleWidth={60}
            circleHeight={60}
            isLight
          />
        </Box>
      </Box>
    </TaskProgressCardComponent>
  );
};
