module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // plugins: [
      // 'babel',
      // 'import',
      // 'prettier',
  // ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: { /* override/add rules from https://eslint.vuejs.org/rules/ */
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
  }
}
