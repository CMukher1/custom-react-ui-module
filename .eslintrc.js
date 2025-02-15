module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      { types: "prefer-import" },
    ],
    "@typescript-eslint/no-empty-interface": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [".lintstagedrc.js", "node_modules/", "dist/", "coverage/"],
};
