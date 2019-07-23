const Utils  = require('./utils');

module.exports = [
  {
    ...Utils.filePath('组件', '/components/'),
    children: [
      Utils.filePath('MyButton', '/components/button'),
    ]
  }
];
