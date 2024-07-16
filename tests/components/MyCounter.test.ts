import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

describe('<MyCounter />', () => {

  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: { value: 5},
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Renders the counter value correctly', () => {
    const value = 5;
    const square = value**2;
    const wrapper = mount(MyCounter, {
      props: { value: value},
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${square}`);
  })

});
