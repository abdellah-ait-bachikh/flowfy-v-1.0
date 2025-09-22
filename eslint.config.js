const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],

    plugins: {
      react: require("eslint-plugin-react"),
    },

    rules: {
      // 🚫 Show error if text is not wrapped in <Text>
      "react/jsx-no-literals": [
        "warn",
        { noStrings: true, ignoreProps: true },
      ],
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
