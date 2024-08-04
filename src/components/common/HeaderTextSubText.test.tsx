import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeaderTextSubTextComponent } from "./HeaderTextSubText";
import colors from "../../utils/colors";

describe("HeaderTextSubTextComponent", () => {
  it("renders with default props", () => {
    render(
      <HeaderTextSubTextComponent headerText="Header" subText="Subtext" />
    );

    const container = screen.getByTestId("header-text-sub-text");
    const header = screen.getByTestId("header-text-sub-text-header");
    const subtext = screen.getByTestId("header-text-sub-text-subtext");

    expect(container).toBeInTheDocument();
    expect(header).toHaveTextContent("Header");
    expect(subtext).toHaveTextContent("Subtext");
    expect(header).toHaveStyle(`font-size: 1.5rem`);
    expect(header).toHaveStyle(`color: ${colors.primary}`);
    expect(subtext).toHaveStyle(`font-size: 0.9rem`);
    expect(subtext).toHaveStyle(`color: ${colors.dark}`);
  });

  it("renders with custom props", () => {
    render(
      <HeaderTextSubTextComponent
        headerText="Custom Header"
        subText="Custom Subtext"
        ternaryText="Ternary Text"
        headerSize="2rem"
        headerColor={colors.dark}
        subHeaderSize="1rem"
        subHeaderColor={colors.primary}
        className="custom-class"
        dataTestId="custom-header"
      />
    );

    const container = screen.getByTestId("custom-header");
    const header = screen.getByTestId("custom-header-header");
    const subtext = screen.getByTestId("custom-header-subtext");
    const ternaryText = screen.getByTestId("custom-header-ternary");

    expect(container).toHaveClass("custom-class");
    expect(header).toHaveStyle(`font-size: 2rem`);
    expect(header).toHaveStyle(`color: ${colors.dark}`);
    expect(subtext).toHaveStyle(`font-size: 1rem`);
    expect(subtext).toHaveStyle(`color: ${colors.primary}`);
    expect(ternaryText).toBeInTheDocument();
  });

  it("does not render ternary text when not provided", () => {
    render(
      <HeaderTextSubTextComponent headerText="Header" subText="Subtext" />
    );

    expect(
      screen.queryByTestId("header-text-sub-text-ternary")
    ).not.toBeInTheDocument();
  });
});
