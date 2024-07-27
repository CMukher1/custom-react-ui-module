import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/common/Button";
import colors from "../utils/colors";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button label="Click me" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: ${colors.primary}`);
  });

  it("renders with custom props", () => {
    render(
      <Button
        label="Custom"
        buttonType="outlined"
        backgroundColor={colors.primary}
        textColor={colors.light}
        isRounded
      />
    );
    const button = screen.getByText("Custom");
    expect(button).toHaveStyle(`color: ${colors.light}`);
    expect(button).toHaveStyle(`border-color: ${colors.primary}`);
    expect(button).toHaveStyle("border-radius: 32px");
  });

  it("applies custom className", () => {
    render(<Button label="Custom" className="custom-class" />);
    expect(screen.getByText("Custom")).toHaveClass("custom-class");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
