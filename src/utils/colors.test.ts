import colors from "./colors";

describe("colors", () => {
  it("should have the correct primary color", () => {
    expect(colors.primary).toBe("#007bff");
  });

  it("should have the correct light color", () => {
    expect(colors.light).toBe("#ffffff");
  });

  it("should have the correct dark color", () => {
    expect(colors.dark).toBe("#212529");
  });

  it("should have the correct lightGrey color", () => {
    expect(colors.lightGrey).toBe("#d4d4d4");
  });
});
