import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressCircleComponent } from "../components/common/ProgressCircle";
import colors from "../utils/colors";

describe("ProgressCircleComponent", () => {
  it("renders with correct percentage", () => {
    render(<ProgressCircleComponent percentage={75} />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("doesn't show text when showText is false", () => {
    const { container } = render(
      <ProgressCircleComponent percentage={50} showText={false} />
    );
    expect(container.textContent).not.toContain("50%");
  });

  it("applies custom size", () => {
    const { container } = render(
      <ProgressCircleComponent
        percentage={60}
        circleWidth={100}
        circleHeight={100}
      />
    );
    const progressRoot = container.querySelector(".MuiCircularProgress-root");
    expect(progressRoot).toBeInTheDocument();
    expect(progressRoot).toHaveStyle("width: 100px");
    expect(progressRoot).toHaveStyle("height: 100px");
  });

  it("uses light color when isLight is true", () => {
    render(<ProgressCircleComponent percentage={80} isLight />);
    const text = screen.getByText("80%");
    expect(text).toHaveStyle(`color: ${colors.light}`);
  });

  it("uses primary color when isLight is false", () => {
    render(<ProgressCircleComponent percentage={80} isLight={false} />);
    const text = screen.getByText("80%");
    expect(text).toHaveStyle(`color: ${colors.primary}`);
  });

  it("applies custom className", () => {
    const { container } = render(
      <ProgressCircleComponent percentage={90} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
