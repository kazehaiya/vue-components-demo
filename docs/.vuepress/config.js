const Utils  = require('./utils');

const staticThemeConfig = require('./static-theme-config');
const sidebar = require('./router-config');

module.exports = {
  // 服务器配置的子路径
  base: process.env.NODE_ENV === 'development' ? '' : '/',
  // favicon 设置（public 文件夹）
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // devServer 配置
  host: 'localhost',
  port: '8184',
  dest: Utils.resolve('dist'),
  // 项目文档标题
  title: 'project-demo',
  // 项目描述
  description: '项目文档模板',
  // 主题配置
  themeConfig: {
    // 侧边栏配置
    sidebar,
    // 不经常变动的其它配置
    ...staticThemeConfig
  },
  // webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        '@images': Utils.resolve('images')
      }
    }
  },
  // 额外监听的文件
  extraWatchFiles: [
    '.vuepress/static-theme-config.js',
    '.vuepress/router-config.js'
  ],
  // 仅支持那些“常青树”（不做兼容，加快构建速度）
  evergreen: true,
  // markdown
  markdown: {
    lineNumbers: true
  }
}