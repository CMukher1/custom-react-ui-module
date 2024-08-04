import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProgressCircleComponent } from "./ProgressCircle";
import colors from "../../utils/colors";

describe("ProgressCircleComponent", () => {
  it("renders with default props", () => {
    render(<ProgressCircleComponent percentage={50} />);

    const container = screen.getByTestId("progress-circle");
    const progressText = screen.getByTestId("progress-circle-text");
    expect(container).toBeInTheDocument();
    expect(progressText).toHaveTextContent("50%");
    expect(progressText).toHaveStyle(`color: ${colors.primary}`);
  });

  it("renders with custom size and light theme", () => {
    render(
      <ProgressCircleComponent
        percentage={75}
        circleWidth={100}
        circleHeight={100}
        isLight={true}
        dataTestId="custom-progress"
      />
    );

    const container = screen.getByTestId("custom-progress");
    const progressText = screen.getByTestId("custom-progress-text");
    expect(container).toBeInTheDocument();
    expect(progressText).toHaveTextContent("75%");
    expect(progressText).toHaveStyle(`color: ${colors.light}`);
    expect(progressText).toHaveStyle("font-size: 25px"); // 100 / 4
  });

  it("does not show text when showText is false", () => {
    render(<ProgressCircleComponent percentage={25} showText={false} />);

    expect(
      screen.queryByTestId("progress-circle-text")
    ).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ProgressCircleComponent percentage={50} className="custom-class" />
    );

    const container = screen.getByTestId("progress-circle");
    expect(container).toHaveClass("custom-class");
  });
});
