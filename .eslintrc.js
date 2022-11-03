module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  rules: {
    // 一旦全部OFF
    camelcase: 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    eqeqeq: 'off',
    'handle-callback-err': 'off',
    indent: 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'no-multi-spaces': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    quotes: 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-before-blocks': 'off',
    'space-in-parens': 'off',
    'spaced-comment': 'off',
    'space-infix-ops': 'off',
    'no-dupe-keys': 'off',
    'no-fallthrough': 'off',
    'no-spaced-func': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'no-empty-function': 'off', // 空の関数を許可
    '@typescript-eslint/no-empty-function': 'off', // 空の関数を許可
    'no-useless-catch': 'off', // 不要なcatch文を許可
    'no-unused-vars': 'off', // 未使用の変数を許可
    'prefer-const': 'off', // 未使用の変数を許可
    'no-irregular-whitespace': 'off', // 空白を許可
    '@typescript-eslint/no-inferrable-types': 'off', // 不要な型宣言を許可
    '@typescript-eslint/no-explicit-any': 'off', // any型を許容
    '@typescript-eslint/no-namespace': 'off',
  },
  overrides: [
    {
      files: ['pages/**', 'components/**'], // pages、layouts、components配下のみ適応するルール
      rules: {
        'vue/multi-word-component-names': 'off', // 複数系の命名じゃないとErrorをoff
      },
    },
  ],
};
