// eslint-disable-next-line import/no-extraneous-dependencies
const baseConfig = require('@dwp/nyc-config-base');

module.exports = {
  ...baseConfig,
  exclude: [
    ...baseConfig.exclude,
    '.stryker-tmp/',
    'config/**',
    'coverage/**',
    'reports/**',
    'data/**',
    'node_modules/**',
    'public/**',
    'src/js/**',
    'test/**',
    '**/.eslintrc.js',
    'gulpfile.js',
    'nyc.config.js',
    'nyc.browser.config.js',
    'nyc.js.config.js',
    'nyc.ts.config.js',
    'stryker.conf.js',
    'stryker.ts.conf.js',
    'stryker.browser.conf.js',
  ],
};
