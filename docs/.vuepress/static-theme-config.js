module.exports = {
  // 导航栏配置
  nav: [
    {
      text: '帮助中心',
      items: [
        {
          text: '问题反馈',
          link: 'https://github.com/kazehaiya/vue-cli-project-demo/issues'
        }
      ]
    }
  ],
  // 搜索提示的最大数量
  searchMaxSuggestions: 5,
  // service work 配置
  serviceWorker: {
    updatePopup: {
      message: '发现有新的内容更新',
      buttonText: '刷新'
    }
  },
  // 仓库地址
  repo: 'https://github.com/kazehaiya/vue-cli-project-demo',
  // 仓库链接文字。
  repoLabel: '源码地址',
  // 文档在仓库的目录：
  docsDir: 'docs',
  // 文档所在的分支下：
  docsBranch: 'master',
  // 完善文档的编辑链接（不开启）
  editLinks: false,
  // 默认为 "Edit this page"
  editLinkText: '帮助我们完善此页面！',
  // 更新时间提示
  // lastUpdated: '最后更新时间',
}