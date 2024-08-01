import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { off } from "process";

export default [
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "react/react-in-jsx-scope": off,
      "react/jsx-uses-react": off,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
