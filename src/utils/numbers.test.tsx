import { describe, it, expect } from "vitest";
import {
  formatWholeNumber,
  formatDecimalNumber,
  formatCurrency,
} from "./numbers";

describe("Number formatting functions", () => {
  describe("formatWholeNumber", () => {
    it("formats whole numbers correctly", () => {
      expect(formatWholeNumber(1000)).toBe("1,000");
      expect(formatWholeNumber(1000000)).toBe("1,000,000");
      expect(formatWholeNumber(1)).toBe("1");
    });

    it("rounds decimal numbers to whole numbers", () => {
      expect(formatWholeNumber(1000.5)).toBe("1,001");
      expect(formatWholeNumber(1000.4)).toBe("1,000");
    });

    it("handles negative numbers", () => {
      expect(formatWholeNumber(-1000)).toBe("-1,000");
      expect(formatWholeNumber(-1000.5)).toBe("-1,001");
    });

    it("handles zero", () => {
      expect(formatWholeNumber(0)).toBe("0");
    });
  });

  describe("formatDecimalNumber", () => {
    it("formats decimal numbers with default 2 decimal places", () => {
      expect(formatDecimalNumber(1000.5678)).toBe("1,000.57");
      expect(formatDecimalNumber(1.2)).toBe("1.20");
    });

    it("formats decimal numbers with specified decimal places", () => {
      expect(formatDecimalNumber(1000.5678, 3)).toBe("1,000.568");
      expect(formatDecimalNumber(1.2, 1)).toBe("1.2");
    });

    it("handles whole numbers", () => {
      expect(formatDecimalNumber(1000)).toBe("1,000.00");
      expect(formatDecimalNumber(1000, 3)).toBe("1,000.000");
    });

    it("handles negative numbers", () => {
      expect(formatDecimalNumber(-1000.5678)).toBe("-1,000.57");
      expect(formatDecimalNumber(-1.2, 3)).toBe("-1.200");
    });

    it("handles zero", () => {
      expect(formatDecimalNumber(0)).toBe("0.00");
      expect(formatDecimalNumber(0, 3)).toBe("0.000");
    });
  });
  describe("formatCurrency", () => {
    it("formats currency with default USD", () => {
      const result = formatCurrency(1000.5);
      expect(result).toMatch(/^\$1,000\.50$/);
    });

    it("formats currency with specified currency code", () => {
      const eurResult = formatCurrency(1000.5, "EUR");
      expect(eurResult).toMatch(/^(€|EUR)1,000\.50$/);

      const jpyResult = formatCurrency(1000.5, "JPY");
      expect(jpyResult).toMatch(/^(¥|JP¥|JPY)1,001$/);
    });

    it("handles negative amounts", () => {
      const result = formatCurrency(-1000.5);
      expect(result).toMatch(/^-\$1,000\.50$/);

      const eurResult = formatCurrency(-1000.5, "EUR");
      expect(eurResult).toMatch(/^-(€|EUR)1,000\.50$/);
    });

    it("handles zero", () => {
      const result = formatCurrency(0);
      expect(result).toMatch(/^\$0\.00$/);

      const eurResult = formatCurrency(0, "EUR");
      expect(eurResult).toMatch(/^(€|EUR)0\.00$/);
    });

    it("handles large numbers", () => {
      const result = formatCurrency(1000000);
      expect(result).toMatch(/^\$1,000,000\.00$|^\$10,00,000\.00$/);

      const eurResult = formatCurrency(1000000, "EUR");
      expect(eurResult).toMatch(
        /^(€|EUR)1,000,000\.00$|^(€|EUR)10,00,000\.00$/
      );
    });
  });
});
