import Vue, { VueConstructor, PluginFunction } from 'vue';

declare module 'vue/types/vue' {
  // constructor 的扩展
  interface VueConstructor<V extends Vue = Vue> {
    install: PluginFunction<BasicObject>
    options: BasicObject
  }
}
