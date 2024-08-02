import React from "react";
import { render, screen } from "@testing-library/react";
import { HeaderTestSubTextWithIcons } from "../components/common/HeaderTextSubTextWithIcons";
import { FaUser, FaCalendar } from "react-icons/fa";

describe("HeaderTestSubTextWithIcons", () => {
  const defaultProps = {
    headerText: "Test Header",
    subText: "Sub Text",
    SubIcon: FaUser,
    TernaryIcon: FaCalendar,
  };

  it("renders header text correctly", () => {
    render(<HeaderTestSubTextWithIcons {...defaultProps} />);
    expect(screen.getByText("Test Header")).toBeInTheDocument();
  });

  it("renders sub text correctly", () => {
    render(<HeaderTestSubTextWithIcons {...defaultProps} />);
    expect(screen.getByText("Sub Text")).toBeInTheDocument();
  });

  it("renders ternary text when provided", () => {
    render(
      <HeaderTestSubTextWithIcons
        {...defaultProps}
        ternaryText="Ternary Text"
      />
    );
    expect(screen.getByText("Ternary Text")).toBeInTheDocument();
  });

  it("does not render ternary text when not provided", () => {
    render(<HeaderTestSubTextWithIcons {...defaultProps} />);
    expect(screen.queryByText("Ternary Text")).not.toBeInTheDocument();
  });

  it("applies custom styles", () => {
    const customProps = {
      ...defaultProps,
      headerSize: "2rem",
      headerColor: "red",
      subHeaderSize: "1rem",
      subHeaderColor: "blue",
    };
    render(<HeaderTestSubTextWithIcons {...customProps} />);

    const header = screen.getByText("Test Header");
    expect(header).toHaveStyle("font-size: 2rem");
    expect(header).toHaveStyle("color: red");

    const subText = screen.getByText("Sub Text");
    expect(subText).toHaveStyle("font-size: 1rem");
    expect(subText).toHaveStyle("color: blue");
  });

  it("applies custom className", () => {
    render(
      <HeaderTestSubTextWithIcons {...defaultProps} className="custom-class" />
    );
    const container = screen.getByText("Test Header").closest("div");
    expect(container).toHaveClass("custom-class");
  });
});
