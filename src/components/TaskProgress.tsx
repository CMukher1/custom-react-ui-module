import { TaskProgressCardComponent } from "./common/TaskProgressCard";
import { ProgressCircleComponent } from "./common/ProgressCircle";
import { Button } from "./common/Button";
import { Box } from "@mui/material";
import colors from "../utils/colors";
import { HeaderTextSubTextComponent } from "./common/HeaderTextSubText";

interface TaskProgressProps {
  taskDone: number;
  totalTasks: number;
  date: string;
  className?: string;
  buttonType?: "contained" | "outlined" | "text";
  isRounded?: boolean;
  dataTestId?: string;
}

export const TaskProgress = ({
  taskDone,
  totalTasks,
  date,
  className,
  buttonType = "contained",
  isRounded = true,
  dataTestId = "task-progress",
}: TaskProgressProps) => {
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
          <HeaderTextSubTextComponent
            headerText={`Task Progress`}
            subText={`${taskDone}/${totalTasks} task done`}
            headerColor={colors.light}
            subHeaderColor={colors.lightGrey}
            dataTestId={`${dataTestId}-header`}
          />
          <Box
            className="w-28 ml-4"
            data-testid={`${dataTestId}-button-container`}
          >
            <Button
              label={date}
              buttonType={buttonType}
              textColor={colors.light}
              isRounded={isRounded}
              style={{ padding: "0 15px", marginLeft: "2px" }}
              dataTestId={`${dataTestId}-date-button`}
            />
          </Box>
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

export default TaskProgress;
