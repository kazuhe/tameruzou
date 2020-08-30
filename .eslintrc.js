module.exports = {
  root: true, // .eslintrc.jsがプロジェクトのルートに配置させているか（指定がないと上位階層へ設定ファイルを探索される）
  parser: '@typescript-eslint/parser', // ESLintにTypeScriptを理解させる
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json', // tsconfig.jsonの場所を指定
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint', // ESLintのTypeScriptプラグインのルールを適用できる様にする（/eslint-pluginは省略可）
    'prettier',
    'react',
    "react-hooks", // React公式のhookプラグイン
  ],
  extends: [
    'eslint:recommended', // ESLintのJavaScriptルールセットを適用
    'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'eol-last': ['error', 'always'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'newline-before-return': 'error', // 原則（if内単独等）returnの前に空行が必要
    'no-dupe-class-members': 'error', // Class名宣言の重複（マージ）を禁止
    'no-var': 'error', // 「var」の使用を禁止
    'object-shorthand': ['error', 'always'], // ES6の省略記法の使用を強制
    'prefer-arrow-callback': 'error', // コールバックでアロー関数を使用を強制
    'prefer-const': 'error', // 後に変更されることない変数はconstの使用を強制
    'prefer-spread': 'error', // apply()の代わりにspread構文の使用を強制
    'require-yield': 'error', // yieldを持っていないジェネレーター関数を禁止

    // React Hooks
    "react-hooks/rules-of-hooks": "error", // Hookのルールをチェック
    "react-hooks/exhaustive-deps": "warn" // 効果の依存関係をチェック
  }
}
