import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskProgressCardComponent } from "./TaskProgressCard";
import colors from "../../utils/colors";

describe("TaskProgressCardComponent", () => {
  it("renders with default props", () => {
    render(<TaskProgressCardComponent />);

    const card = screen.getByTestId("task-progress-card");
    expect(card).toHaveStyle(`background-color: ${colors.lightGrey}`);
    expect(card).not.toHaveClass("rounded-md");
    expect(card).not.toHaveClass("rounded-lg");
  });

  it("renders with dark theme and medium rounded corners", () => {
    render(
      <TaskProgressCardComponent
        isDark={true}
        roundedCorner="medium"
        text="Task Progress"
        dataTestId="custom-card"
      />
    );

    const card = screen.getByTestId("custom-card");
    const text = screen.getByTestId("custom-card-text");
    expect(card).toHaveStyle(`background-color: ${colors.dark}`);
    expect(card).toHaveClass("rounded-md");
    expect(text).toHaveTextContent("Task Progress");
  });

  it("renders with large rounded corners and custom class", () => {
    render(
      <TaskProgressCardComponent
        roundedCorner="large"
        className="custom-class"
      />
    );

    const card = screen.getByTestId("task-progress-card");
    expect(card).toHaveClass("rounded-lg");
    expect(card).toHaveClass("custom-class");
  });

  it("renders children components", () => {
    render(
      <TaskProgressCardComponent>
        <span data-testid="child-component">Child Component</span>
      </TaskProgressCardComponent>
    );

    const childComponent = screen.getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });
});
