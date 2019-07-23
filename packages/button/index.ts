import MyButton from './src/main.vue';

// 此部分可以不添加
MyButton.install = function (vue, opt: {}) {
  vue.component(MyButton.name, MyButton);
};

export default MyButton;
