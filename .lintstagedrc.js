modules.exports = {
  '*.{js,jsx,ts,tsx,md,html,css}': 'prettier --write --ignore-unknown --cache',
  '*.css': 'stylelint',
  '*.scss': 'stylelint --syntax=scss',
};
