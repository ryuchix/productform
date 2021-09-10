module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    'strict': 'off',
    'vue/no-unused-components': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
