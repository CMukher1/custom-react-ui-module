import * as IndexExports from "../index";

describe("Index exports", () => {
  it("should export Button component", () => {
    expect(IndexExports.Button).toBeDefined();
  });

  it("should not have any unexpected exports", () => {
    const expectedExports = ["Button"];
    const actualExports = Object.keys(IndexExports);
    expect(actualExports).toEqual(expect.arrayContaining(expectedExports));
    expect(actualExports.length).toBe(expectedExports.length);
  });
});
