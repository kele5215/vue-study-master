// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevent
    // ion consider switching to `plugin:vue/strongly-recommended` or
    // `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier', 'html'],
  globals: {
    NODE_ENV: false,
  },
  rules: {
    'prettier/prettier': ['error'],
    // "prettier/prettier": [
    //   "error",
    //   {
    //     endOfLine: "auto",
    //   },
    // ],
    // 这里可以设置规则：
    // " off" or 0 - 关闭规则
    // " warn" or 1 - 将规则作为警告打开（不影响退出代码）
    // " error" or 2 - 将规则作为错误打开（退出代码为1）
    'no-console': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 添加，分号必须
    //semi: ['error', 'always'],
    'no-unexpected-multiline': 'off',
    'space-before-function-paren': 0,
    // 'space-before-function-paren': ['error', 'never'],
    // 'quotes': ["error", "double", { "avoidEscape": true }]
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
}
