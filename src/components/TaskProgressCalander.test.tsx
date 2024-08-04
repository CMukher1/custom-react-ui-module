import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskProgressCalander } from "./TaskProgressCalander";
import colors from "../utils/colors";
import { FaCalendar, FaClock } from "react-icons/fa";

describe("TaskProgressCalander", () => {
  it("renders with default props", () => {
    render(
      <TaskProgressCalander
        taskDone={5}
        totalTasks={10}
        date="2023-05-01"
        headerText="Calendar View"
        subText="May 2023"
        SubIcon={FaCalendar}
        TernaryIcon={FaClock}
      />
    );

    const container = screen.getByTestId("task-progress-calander");
    expect(container).toBeInTheDocument();

    const header = screen.getByTestId("task-progress-calander-header-header");
    expect(header).toHaveTextContent("Calendar View");
    expect(header).toHaveStyle(`color: ${colors.primary}`);

    const subtext = screen.getByTestId("task-progress-calander-header-subtext");
    expect(subtext).toHaveTextContent("May 2023");
    expect(subtext).toHaveStyle(`color: ${colors.dark}`);

    const progressCircle = screen.getByTestId(
      "task-progress-calander-progress-circle"
    );
    expect(progressCircle).toBeInTheDocument();
  });

  it("renders with custom props", () => {
    render(
      <TaskProgressCalander
        taskDone={3}
        totalTasks={8}
        date="2023-05-02"
        headerText="Custom View"
        subText="Custom Period"
        SubIcon={FaCalendar}
        TernaryIcon={FaClock}
        ternaryText="Additional Info"
        headerSize="2rem"
        headerColor={colors.dark}
        subHeaderSize="1rem"
        subHeaderColor={colors.primary}
        className="custom-class"
        dataTestId="custom-calander"
      />
    );

    const container = screen.getByTestId("custom-calander");
    expect(container).toHaveClass("custom-class");

    const header = screen.getByTestId("custom-calander-header-header");
    expect(header).toHaveTextContent("Custom View");
    expect(header).toHaveStyle(`font-size: 2rem`);
    expect(header).toHaveStyle(`color: ${colors.dark}`);

    const subtext = screen.getByTestId("custom-calander-header-subtext");
    expect(subtext).toHaveTextContent("Custom Period");
    expect(subtext).toHaveStyle(`font-size: 1rem`);
    expect(subtext).toHaveStyle(`color: ${colors.primary}`);

    const ternaryText = screen.getByTestId(
      "custom-calander-header-ternary-text"
    );
    expect(ternaryText).toHaveTextContent("Additional Info");
  });

  it("calculates percentage correctly", () => {
    render(
      <TaskProgressCalander
        taskDone={7}
        totalTasks={10}
        date="2023-05-03"
        headerText="Test"
        subText="Test"
        SubIcon={FaCalendar}
        TernaryIcon={FaClock}
      />
    );

    const progressText = screen.getByTestId(
      "task-progress-calander-progress-circle-text"
    );
    expect(progressText).toHaveTextContent("70%");
  });
});
