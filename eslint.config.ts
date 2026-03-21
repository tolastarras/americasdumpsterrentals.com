import next from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore files
  {
    ignores: [
    '**/node_modules',
    '**/.next',
    'next-env.d.ts',
    '**/dist',
    '**/*.css',
    '**/*.scss',
    '**/*.sass',
    '**/*.less',
    '**/*.json',
    '**/*.md',
    '**/*.mdx',
    '**/*.yml',
    '**/*.yaml',
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    ],
  },

  // TypeScript base config
  tseslint.configs.recommended,

  // Next.js config
  {
    plugins: {
      '@next/next': next,
      'import': importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,

      // Custom rules
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'comma-spacing': ['error', {
        before: false,
        after: true,
      }],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', {
        max: 1,          // Maximum 1 empty line
        maxEOF: 0,       // No empty lines at end of file
        maxBOF: 0,       // No empty lines at beginning of file
      }],
      'no-multi-spaces': ['error', {
        ignoreEOLComments: true,     // Don't allow spaces before comments
        exceptions: {
          Property: false,           // No extra spaces in object properties
          ImportDeclaration: false,  // No extra spaces in imports
          VariableDeclarator: false, // No extra spaces in variable declarations
          BinaryExpression: false,   // No extra spaces in operations (a  + b)
        },
      }],
      'simple-import-sort/imports': ['error', {
        groups: [
          // 1. React & Next.js Core
          ['^react', '^next/'],

          // 2. External Libraries (lucide-react, sonner, etc.)
          ['^@?\\w'], // All external packages

          // 3. Internal Types
          ['^@/app/types'],

          // 4. Internal Utilities
          ['^@/lib/'],

          // 5. Constants
          ['^@/.*/constants'],

          // 6. Internal Hooks
          ['^@/hooks/'],

          // 7. Internal Components
          ['^@/components/'],

          // 8. CSS/Styles
          ['^.+\\.s?css$'],
        ],
      }],
      'simple-import-sort/exports': 'error',
    },
  },
);
