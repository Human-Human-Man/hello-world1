module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./client/tsconfig.json",
      "./server/tsconfig.json",
      "./types/tsconfig.json",
    ],
  },
  rules: {
    "import/no-anonymous-default-export": "warn",
  },
  settings: {
    react: { version: "detect" },
  },
};
