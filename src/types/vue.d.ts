import { Vue, Component } from 'vue-property-decorator';
import { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
  // components 上的扩展
  interface Vue {
    component(name: string, component: VueConstructor<Vue>): Vue
  }

  // constructor 的扩展
  interface VueConstructor<V extends Vue = Vue> {
    install(vue: VueConstructor<Vue>, opt?: BasicObject): void
  }
}
