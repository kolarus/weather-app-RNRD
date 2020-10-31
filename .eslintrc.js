module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import'
  ],
  rules: {
    'newline-before-return': 'error',
    'import/order': [ 'error', {
      'groups': [
        [ 'builtin', 'external' ],
        [ 'internal' ],
        [ 'parent', 'sibling', 'index' ],
      ],
      'newlines-between': 'always',
    } ],
  }
};
