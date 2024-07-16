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

  test('Increments the counter when +1 button is clicked', async () => {
    
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: { value: value},
    });

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click'); // Simulate a click

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value + 1}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  })

  test('Decrements the counter twice when -1 button is clicked twice'), async () => {
    const initialValue = 5;
    
    const wrapper = mount(MyCounter, {
      props: { value: initialValue},
    });

    const btnDecrement = wrapper.find('button');
    await btnDecrement.trigger('click'); // Simulate a click
    await btnDecrement.trigger('click'); // Simulate a click

    expect(wrapper.find('h3').text()).toContain(`Counter: ${initialValue - 2}`);
    expect(wrapper.find('[data-testid="square-label"]').text())
      .toContain(`Square: ${(initialValue - 2) * (initialValue - 2)}`);

  }

});
