const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

const config = getDefaultConfig(__dirname);

// withUniwindConfig must be the outermost wrapper in this config.
module.exports = withUniwindConfig(config, {
  // relative path from project root to the CSS entry file
  cssEntryFile: './src/global.css',
  // auto-generated typings, placed in src/ so TypeScript picks it up automatically
  dtsFile: './src/uniwind-types.d.ts',
});
