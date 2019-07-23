import MyButton from '../packages/button';
import { Vue } from 'vue-property-decorator';

// 所有组件（全量注册）
const components = [ MyButton ];

// 全量注册方法
const install = function (vue: Vue, opts = {}) {
  components.forEach(component => {
    vue.component(component.name, component);
  });
};

// 支持 script 引入 Vue 的写法
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  MyButton,
  install
};
