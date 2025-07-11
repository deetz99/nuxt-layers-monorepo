import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    stylistic: true
  },
  files: ['**/*.ts', '**/*.vue']
}).append({
  rules: {
    'no-console': ['error', { allow: ['info', 'error', 'warn'] }],
    'no-debugger': 'off',
    'max-len': ['warn',
      {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true
      }
    ],
    'allow-parens': 'off',
    'curly': 'error',
    'import/no-duplicates': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'nuxt/nuxt-config-keys-order': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/use-v-on-exact': 'off',
    'vue/array-bracket-spacing': 'warn',
    'vue/array-bracket-newline': 'warn',
    'vue/attributes-order': 'warn',
    'vue/comma-dangle': 'warn',
    'vue/component-api-style': 'error',
    'vue/html-indent': 'warn',
    'vue/script-indent': 'warn',
    '@stylistic/brace-style': 'off',
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/semi': ['error', 'never']
  }
})
