const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.json": ["prettier --write --ignore-unknown --cache"],
  "*.{ts,tsx}": ["prettier --write --ignore-unknown --cache"],
  "src/**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "api/**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
