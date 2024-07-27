import React from "react";
import { render } from "@testing-library/react";
import * as IndexExports from "../index";

describe("Index exports", () => {
  const expectedExports = [
    "Button",
    "TaskProgress",
    "HeaderTextSubTextComponent",
    "ProgressCircleComponent",
    "TaskProgressCardComponent",
  ] as const;

  type ExportName = (typeof expectedExports)[number];

  const mockProps: Record<ExportName, any> = {
    Button: { label: "Test" },
    TaskProgress: { taskDone: 5, totalTasks: 10, date: "2023-05-01" },
    HeaderTextSubTextComponent: { headerText: "Test", subText: "Subtest" },
    ProgressCircleComponent: { percentage: 50 },
    TaskProgressCardComponent: {
      children: React.createElement("div", null, "Test"),
    },
  };

  expectedExports.forEach((exportName) => {
    it(`should export ${exportName}`, () => {
      expect(IndexExports[exportName]).toBeDefined();
    });

    it(`${exportName} should render without crashing`, () => {
      const Component = IndexExports[exportName] as React.ComponentType<any>;
      expect(() =>
        render(React.createElement(Component, mockProps[exportName]))
      ).not.toThrow();
    });
  });

  it("should not have any unexpected exports", () => {
    const actualExports = Object.keys(IndexExports);
    expect(actualExports).toEqual(expect.arrayContaining(expectedExports));
    expect(actualExports.length).toBe(expectedExports.length);
  });
});
