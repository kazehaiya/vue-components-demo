const path = require('path');

// 配置公共请求路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 设置 output 的默认 export 值
    config.output.libraryExport('default');
    // 新增部分别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@lib', resolve('lib'))
      .set('@views', resolve('src/views'))
      .set('@components', resolve('src/components'));
    // 新增 js 的 exclude 内容
    config.module.rule('js').exclude.add([resolve('lib'), resolve('dist')]);
  }
};
