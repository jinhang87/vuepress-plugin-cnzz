import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  lang: 'zh-CN',
  title: '你好， VuePress Plugin CNZZ ！',
  description: 'A VuePress(2.x) plugin to use cnzz easily.',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
  plugins: [
    [require("../../packages/src/node/index")]
  ]
})