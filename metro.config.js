const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  'react-i18next': 'react-i18next/dist/commonjs',
};

module.exports = config;
