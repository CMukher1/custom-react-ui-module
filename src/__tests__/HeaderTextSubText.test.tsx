import React from "react";
import { render, screen } from "@testing-library/react";
import { HeaderTextSubTextComponent } from "../components/common/HeaderTextSubText";
import colors from "../utils/colors";

describe("HeaderTextSubTextComponent", () => {
  it("renders header and subtext correctly", () => {
    render(
      <HeaderTextSubTextComponent headerText="Main Header" subText="Sub Text" />
    );
    expect(screen.getByText("Main Header")).toBeInTheDocument();
    expect(screen.getByText("Sub Text")).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    render(
      <HeaderTextSubTextComponent
        headerText="Custom Header"
        subText="Custom Sub"
        headerSize="2rem"
        headerColor="#ff0000"
        subHeaderSize="1rem"
        subHeaderColor="#00ff00"
      />
    );
    const header = screen.getByText("Custom Header");
    const subHeader = screen.getByText("Custom Sub");
    expect(header).toHaveStyle("font-size: 2rem");
    expect(header).toHaveStyle("color: #ff0000");
    expect(subHeader).toHaveStyle("font-size: 1rem");
    expect(subHeader).toHaveStyle("color: #00ff00");
  });

  it("applies default styles when not specified", () => {
    render(
      <HeaderTextSubTextComponent
        headerText="Default Header"
        subText="Default Sub"
      />
    );
    const header = screen.getByText("Default Header");
    const subHeader = screen.getByText("Default Sub");
    expect(header).toHaveStyle(`font-size: 1.5rem`);
    expect(header).toHaveStyle(`color: ${colors.primary}`);
    expect(subHeader).toHaveStyle(`font-size: 0.9rem`);
    expect(subHeader).toHaveStyle(`color: ${colors.dark}`);
  });

  it("applies custom className", () => {
    const { container } = render(
      <HeaderTextSubTextComponent
        headerText="Header"
        subText="Sub"
        className="custom-class"
      />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
