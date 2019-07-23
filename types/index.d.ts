import Vue, { PluginFunction } from 'vue';

// 整体引入的声明
declare class MyComponents extends Vue {
  static install: PluginFunction<any>;
}

// 解构部分的声明
declare class MyButton extends MyComponents {}

// 支持解构
export {
  MyButton
};

export default MyComponents;
