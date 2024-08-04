import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";
import colors from "../../utils/colors";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button label="Click me" />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveStyle(`background-color: ${colors.primary}`);
    expect(button).toHaveStyle(`color: ${colors.light}`);
  });

  it("applies custom className", () => {
    render(<Button label="Classy" className="custom-class" />);
    const button = screen.getByTestId("button");
    expect(button).toHaveClass("custom-class");
  });
});
