import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskProgress } from "../components/TaskProgress";

describe("TaskProgress", () => {
  it("renders correctly with given props", () => {
    render(<TaskProgress taskDone={5} totalTasks={10} date="Mar 22" />);

    expect(screen.getByText("Task Progress")).toBeInTheDocument();
    expect(screen.getByText("5/10 task done")).toBeInTheDocument();
    expect(screen.getByText("Mar 22")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <TaskProgress
        taskDone={5}
        totalTasks={10}
        date="Mar 22"
        className="custom-class"
      />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
