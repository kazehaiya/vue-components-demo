<template>
  <section>
    <my-button @click="handleClick">测试</my-button>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ButtonDemo extends Vue {
  handleClick(event: Event) {
    console.log(event);
  }
}
</script>