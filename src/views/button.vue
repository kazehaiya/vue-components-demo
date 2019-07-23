<template>
  <section>
    <my-button @click="handleClick">{{ content }}</my-button>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ButtonDemo extends Vue {
  readonly content = '测试';

  handleClick(event: Event) {
    console.log(event);
  }
}
</script>