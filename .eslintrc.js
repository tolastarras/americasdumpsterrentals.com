module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:css-modules/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    'css-modules',
    'tailwindcss',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [
      'error', 'always', {
        vue: 'never',
        js: 'never',
      },
    ],
    'css-modules/no-unused-class': 'warn',              // Warns if a CSS class is defined but never used
    'css-modules/no-undef-class': 'error',              // Errors if you use a class that doesn't exist
    'tailwindcss/classnames-order': 'warn',             // Enforces consistent order of Tailwind classes
    'tailwindcss/no-contradicting-classname': 'error',  // Catches conflicting utilities like 'flex grid'
    'tailwindcss/no-custom-classname': 'warn',
  },
};
