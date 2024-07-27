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
}

export const TaskProgress = ({
  taskDone,
  totalTasks,
  date,
  className,
}: TaskProgressProps) => {
  const percentage = (taskDone / totalTasks) * 100;

  return (
    <TaskProgressCardComponent
      isDark
      roundedCorner="medium"
      className={className}
    >
      <Box className="flex justify-between items-center w-full">
        <Box className="flex flex-col">
          <HeaderTextSubTextComponent
            headerText={`Task Progress`}
            subText={`${taskDone}/${totalTasks} task done`}
            headerColor={colors.light}
            subHeaderColor={colors.lightGrey}
          />
          <Box className="w-28 ml-4">
            <Button
              label={date}
              buttonType="text"
              textColor={colors.light}
              style={{ padding: "0 15px", marginLeft: "2px" }}
            />
          </Box>
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

export default TaskProgress;
