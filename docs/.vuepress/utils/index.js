const path = require('path');

class Utils {
  // 配置 router 时的路径引用
  static filePath(title = '', path = '/', sidebarDepth = 0, collapsable = false) {
    return {
      title, // 标题
      path, // 路径
      collapsable, // 是否可收缩
      sidebarDepth // 层级深度
    }
  }

  // 以 docs 为根目录的路径处理
  static resolve(dir) {
    return path.join(process.cwd(), 'docs', dir);
  }
}

module.exports = Utils;