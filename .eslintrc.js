module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-var': 'error',
    'arrow-parens': 'off',
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'eol-last': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'generator-star-spacing': 'off',
    'camelcase': ['error', { properties: 'never' }],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
