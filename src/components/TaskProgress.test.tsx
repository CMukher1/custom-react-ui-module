import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskProgress } from "./TaskProgress";
import colors from "../utils/colors";

describe("TaskProgress", () => {
  it("renders with default props", () => {
    render(<TaskProgress taskDone={5} totalTasks={10} date="2023-05-01" />);

    const container = screen.getByTestId("task-progress");
    expect(container).toBeInTheDocument();

    const header = screen.getByTestId("task-progress-header-header");
    expect(header).toHaveTextContent("Task Progress");
    expect(header).toHaveStyle(`color: ${colors.light}`);

    const subtext = screen.getByTestId("task-progress-header-subtext");
    expect(subtext).toHaveTextContent("5/10 task done");
    expect(subtext).toHaveStyle(`color: ${colors.lightGrey}`);

    const dateButton = screen.getByTestId("task-progress-date-button");
    expect(dateButton).toHaveTextContent("2023-05-01");

    const progressCircle = screen.getByTestId("task-progress-progress-circle");
    expect(progressCircle).toBeInTheDocument();
  });

  it("renders with custom props", () => {
    render(
      <TaskProgress
        taskDone={3}
        totalTasks={8}
        date="2023-05-02"
        buttonType="outlined"
        isRounded={false}
        className="custom-class"
        dataTestId="custom-progress"
      />
    );

    const container = screen.getByTestId("custom-progress");
    expect(container).toHaveClass("custom-class");

    const subtext = screen.getByTestId("custom-progress-header-subtext");
    expect(subtext).toHaveTextContent("3/8 task done");

    const dateButton = screen.getByTestId("custom-progress-date-button");
    expect(dateButton).toHaveTextContent("2023-05-02");
    expect(dateButton).not.toHaveStyle("border-radius: 8px");
  });

  it("calculates percentage correctly", () => {
    render(<TaskProgress taskDone={7} totalTasks={10} date="2023-05-03" />);

    const progressText = screen.getByTestId(
      "task-progress-progress-circle-text"
    );
    expect(progressText).toHaveTextContent("70%");
  });
});
