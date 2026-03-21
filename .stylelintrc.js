module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-tailwindcss',
  ],
  plugins: [
    'stylelint-no-unused-selectors',
  ],
  rules: {
    'plugin/no-unused-selectors': [
      true,
      {
        documents: [
          './*.tsx',
          './*.jsx',
          './*.js',
          './index.tsx',
        ],
        ignore: [
          '**/node_modules/**',
          '**/not-found.module.css',
          '**/robot-image.module.css',
        ],
      },
    ],
  },
};
