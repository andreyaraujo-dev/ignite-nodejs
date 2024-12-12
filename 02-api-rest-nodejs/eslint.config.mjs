import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import configPrettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,ts}'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'none',
          arrowParens: 'always',
          semi: false
        }
      ]
    },
    ignores: ['node_modules', '.idea', '.vscode']
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  configPrettier,
  ...tseslint.configs.recommended
]
