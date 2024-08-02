import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskProgressCalander } from "../components/TaskProgressCalander";
import { FaUser, FaCalendar } from "react-icons/fa";

jest.mock("../components/common/TaskProgressCard", () => ({
  TaskProgressCardComponent: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div data-testid="task-progress-card" className={className}>
      {children}
    </div>
  ),
}));

jest.mock("../components/common/ProgressCircle", () => ({
  ProgressCircleComponent: () => <div data-testid="progress-circle" />,
}));

jest.mock("../components/common/HeaderTextSubTextWithIcons", () => ({
  HeaderTestSubTextWithIcons: (props: any) => (
    <div data-testid="header-text-subtext">
      <div>{props.headerText}</div>
      <div>{props.subText}</div>
      {props.ternaryText && <div>{props.ternaryText}</div>}
    </div>
  ),
}));

describe("TaskProgressCalander", () => {
  const defaultProps = {
    taskDone: 5,
    totalTasks: 10,
    date: "2023-08-01",
    headerText: "Task Progress",
    subText: "Ongoing",
    SubIcon: FaUser,
    TernaryIcon: FaCalendar,
  };

  it("renders TaskProgressCardComponent with correct props", () => {
    render(<TaskProgressCalander {...defaultProps} className="custom-class" />);
    const card = screen.getByTestId("task-progress-card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("custom-class");
  });

  it("renders HeaderTestSubTextWithIcons with correct props", () => {
    render(<TaskProgressCalander {...defaultProps} />);
    const header = screen.getByTestId("header-text-subtext");
    expect(header).toBeInTheDocument();
    expect(screen.getByText("Task Progress")).toBeInTheDocument();
    expect(screen.getByText("Ongoing")).toBeInTheDocument();
  });

  it("renders ProgressCircleComponent", () => {
    render(<TaskProgressCalander {...defaultProps} />);
    expect(screen.getByTestId("progress-circle")).toBeInTheDocument();
  });

  it("renders ternary text when provided", () => {
    render(<TaskProgressCalander {...defaultProps} ternaryText="Due Date" />);
    expect(screen.getByText("Due Date")).toBeInTheDocument();
  });

  it("calculates percentage correctly", () => {
    const props = { ...defaultProps, taskDone: 7, totalTasks: 10 };
    render(<TaskProgressCalander {...props} />);
    expect(screen.getByTestId("progress-circle")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<TaskProgressCalander {...defaultProps} className="custom-class" />);
    const card = screen.getByTestId("task-progress-card");
    expect(card).toHaveClass("custom-class");
  });
});
