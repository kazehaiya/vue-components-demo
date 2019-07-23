import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Button from '@packages/button/index';

describe('Button Test', () => {
  it('renders props.msg when passed', () => {
    const slotContent = 'default';
    const wrapper = shallowMount(Button, {
      slots: {
        default: slotContent
      }
    });
    expect(wrapper.text()).to.include(slotContent);
  });
});
