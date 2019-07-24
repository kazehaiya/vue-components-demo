<template>
  <button
    class="my-button"
    :type="type"
    :disabled="disabled"
    :autofocus="autofocus"
    @click="buttonClick">
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator';

// @Component({
//   name: 'MyButton'
// })
@Component
export default class MyButton extends Vue {
  @Prop() autofocus!: boolean;
  @Prop() disabled!: boolean;
  @Prop({
    default: 'button',
    validator(val: string) {
      const validList: string[] = ['button', 'submit', 'reset'];
      return validList.includes(val);
    }
  }) type!: string;

  @Emit('click')
  buttonClick(e: any) {}
}
</script>
