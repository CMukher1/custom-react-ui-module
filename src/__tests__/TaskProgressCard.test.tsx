import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskProgressCardComponent } from "../components/common/TaskProgressCard";
import colors from "../utils/colors";

describe("TaskProgressCardComponent", () => {
  it("renders children correctly", () => {
    render(
      <TaskProgressCardComponent>
        <div>Child Component</div>
      </TaskProgressCardComponent>
    );
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  it("applies dark background when isDark is true", () => {
    const { container } = render(<TaskProgressCardComponent isDark />);
    expect(container.firstChild).toHaveStyle(
      `background-color: ${colors.dark}`
    );
  });

  it("applies light background when isDark is false", () => {
    const { container } = render(<TaskProgressCardComponent isDark={false} />);
    expect(container.firstChild).toHaveStyle(
      `background-color: ${colors.lightGrey}`
    );
  });

  it("applies correct rounded corners", () => {
    const { container } = render(
      <TaskProgressCardComponent roundedCorner="medium" />
    );
    expect(container.firstChild).toHaveClass("rounded-md");
  });

  it("renders text when provided", () => {
    render(<TaskProgressCardComponent text="Progress" />);
    expect(screen.getByText("Progress")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <TaskProgressCardComponent className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
