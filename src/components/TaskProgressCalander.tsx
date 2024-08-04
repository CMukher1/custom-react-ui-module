import { TaskProgressCardComponent } from "./common/TaskProgressCard";
import { ProgressCircleComponent } from "./common/ProgressCircle";
import { Box } from "@mui/material";
import colors from "../utils/colors";
import { HeaderTextSubTextWithIcons } from "./common/HeaderTextSubTextWithIcons";
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
  dataTestId?: string;
}

export const TaskProgressCalander = ({
  taskDone,
  totalTasks,
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
  dataTestId = "task-progress-calander",
}: TaskProgressCalanderProps) => {
  const percentage = (taskDone / totalTasks) * 100;

  return (
    <TaskProgressCardComponent
      isDark
      roundedCorner="medium"
      className={className}
      dataTestId={dataTestId}
    >
      <Box
        className="flex justify-between items-center w-full"
        data-testid={`${dataTestId}-content`}
      >
        <Box
          className="flex flex-col"
          data-testid={`${dataTestId}-left-content`}
        >
          <HeaderTextSubTextWithIcons
            headerText={headerText}
            subText={subText}
            SubIcon={SubIcon}
            TernaryIcon={TernaryIcon}
            ternaryText={ternaryText}
            headerSize={headerSize}
            headerColor={headerColor}
            subHeaderSize={subHeaderSize}
            subHeaderColor={subHeaderColor}
            dataTestId={`${dataTestId}-header`}
          />
        </Box>
        <Box
          className="flex items-center"
          data-testid={`${dataTestId}-progress-container`}
        >
          <ProgressCircleComponent
            percentage={percentage}
            circleWidth={60}
            circleHeight={60}
            isLight
            dataTestId={`${dataTestId}-progress-circle`}
          />
        </Box>
      </Box>
    </TaskProgressCardComponent>
  );
};
