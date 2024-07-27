import {
  formatWholeNumber,
  formatDecimalNumber,
  formatCurrency,
} from "./numbers";

describe("number formatting functions", () => {
  describe("formatWholeNumber", () => {
    it("should format whole numbers correctly", () => {
      expect(formatWholeNumber(1000)).toBe("1,000");
      expect(formatWholeNumber(1000000)).toBe("1,000,000");
      expect(formatWholeNumber(1234.56)).toBe("1,235");
    });
  });

  describe("formatDecimalNumber", () => {
    it("should format decimal numbers correctly with default decimal places", () => {
      expect(formatDecimalNumber(1234.5678)).toBe("1,234.57");
    });

    it("should format decimal numbers correctly with specified decimal places", () => {
      expect(formatDecimalNumber(1234.5678, 3)).toBe("1,234.568");
    });
  });

  describe("formatCurrency", () => {
    it("should format currency correctly with default currency", () => {
      expect(formatCurrency(1234.56)).toBe("$1,234.56");
    });

    it("should format currency correctly with specified currency", () => {
      expect(formatCurrency(1234.56, "EUR")).toBe("€1,234.56");
    });
  });
});
