import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeaderTextSubTextWithIcons } from "./HeaderTextSubTextWithIcons";
import colors from "../../utils/colors";
import { FaUser, FaEnvelope } from "react-icons/fa";

describe("HeaderTextSubTextWithIcons", () => {
  it("renders with default props", () => {
    render(
      <HeaderTextSubTextWithIcons
        headerText="Header"
        subText="Subtext"
        SubIcon={FaUser}
        TernaryIcon={FaEnvelope}
      />
    );

    const container = screen.getByTestId("header-text-sub-text-with-icons");
    const header = screen.getByTestId("header-text-sub-text-with-icons-header");
    const subtext = screen.getByTestId(
      "header-text-sub-text-with-icons-subtext"
    );

    expect(container).toBeInTheDocument();
    expect(header).toHaveTextContent("Header");
    expect(subtext).toHaveTextContent("Subtext");
    expect(header).toHaveStyle(`font-size: 1.5rem`);
    expect(header).toHaveStyle(`color: ${colors.primary}`);
    expect(subtext).toHaveStyle(`font-size: 0.9rem`);
    expect(subtext).toHaveStyle(`color: ${colors.dark}`);
  });

  it("renders with custom props and ternary text", () => {
    render(
      <HeaderTextSubTextWithIcons
        headerText="Custom Header"
        subText="Custom Subtext"
        SubIcon={FaUser}
        TernaryIcon={FaEnvelope}
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
    const ternaryText = screen.getByTestId("custom-header-ternary-text");

    expect(container).toHaveClass("custom-class");
    expect(header).toHaveStyle(`font-size: 2rem`);
    expect(header).toHaveStyle(`color: ${colors.dark}`);
    expect(subtext).toHaveStyle(`font-size: 1rem`);
    expect(subtext).toHaveStyle(`color: ${colors.primary}`);
    expect(ternaryText).toBeInTheDocument();
  });

  it("does not render ternary text and icon when not provided", () => {
    render(
      <HeaderTextSubTextWithIcons
        headerText="Header"
        subText="Subtext"
        SubIcon={FaUser}
        TernaryIcon={FaEnvelope}
      />
    );

    expect(
      screen.queryByTestId("header-text-sub-text-with-icons-ternary-container")
    ).not.toBeInTheDocument();
  });
});
