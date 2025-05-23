module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        modules: 'auto',
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};
