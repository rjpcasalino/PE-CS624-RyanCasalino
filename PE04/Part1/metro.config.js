const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);
config.projectRoot = __dirname;
config.watchFolders = [__dirname, path.resolve(__dirname, '../../PE03-todos/node_modules')];

module.exports = config;
