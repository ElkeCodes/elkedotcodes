import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AdaButton from '../src/components/Button';
import "../src/assets/css/tailwind.scss";

export default {
  title: 'Button',
  component: AdaButton,
};

export const Text = () => ({
  components: { AdaButton },
  template: '<ada-button @click="action">Hello Button</ada-button>',
  // methods: { action: action('clicked') },
});

// export const Jsx = () => ({
//   components: { AdaButton },
//   render(h) {
//     return <my-button onClick={this.action}>With JSX</my-button>;
//   },
//   methods: { action: linkTo('clicked') },
// });

// export const Emoji = () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//   methods: { action: action('clicked') },
// });
