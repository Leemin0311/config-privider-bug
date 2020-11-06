import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // dva: {},
  locale: {
    default: 'en_US',
    antd: true,
    title: false,
    baseNavigator: false,
    baseSeparator: '_',
  },
  antd: {},
});
