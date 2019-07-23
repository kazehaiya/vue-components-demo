interface BasicObject {
  [propName: string]: any
}

declare module "@lib/*" {
  import Vue, { PluginFunction } from 'vue';
  const _default: PluginFunction<Vue>;
  export default _default;
}