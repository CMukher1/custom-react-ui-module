import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "../components/Button/Button";
import { Primary, Secondary } from "../stories/Button.stories";

describe("Button Component", () => {
  const renderButton = (props: ButtonProps) => {
    return render(<Button {...props} />);
  };

  it("renders Primary button", () => {
    const { getByText } = renderButton(Primary.args as ButtonProps);
    const button = getByText(Primary.args?.label || "Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500");
  });

  it("renders Secondary button", () => {
    const { getByText } = renderButton(Secondary.args as ButtonProps);
    const button = getByText(Secondary.args?.label || "Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-500"); // Assuming the class is always applied
  });

  it("calls onClick when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = renderButton({
      label: "Click me",
      onClick: onClickMock,
    });
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    const { getByText } = renderButton({
      label: "Custom",
      className: "custom-class",
    });
    const button = getByText("Custom");
    expect(button).toHaveClass("custom-class");
  });

  it("passes through other props", () => {
    const { getByText } = renderButton({ label: "Test", disabled: true });
    const button = getByText("Test");
    expect(button).toBeDisabled();
  });
});
