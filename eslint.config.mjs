import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    languageOptions: {sourceType: "commonjs"},
    rules : {
            quotes: ["error", "double"],
            indent: ["error", "tab"]
    }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];