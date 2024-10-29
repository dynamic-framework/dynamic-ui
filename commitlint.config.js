module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  ignores: [(message) => message.toLowerCase().includes('bump')],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'test',
      ],
    ],
  },
};
