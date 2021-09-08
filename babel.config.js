const BABEL_ENV = process.env.BABEL_ENV
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs'
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm'

module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/env',
      {
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          esmodules: isESM ? true : undefined
        }
      }
    ],
    '@babel/preset-typescript'
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ]

  const ignore = [
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/**.spec.ts',
    '**/**.spec.tsx',
    '**/**.spec.js',
    '**/**.spec.jsx',
    '**/**.e2e.ts'
  ]

  return {
    presets,
    plugins,
    ignore
  }
}
