import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AdaHeading from '../src/components/Heading';
import "../src/assets/css/tailwind.scss";

export default {
  title: 'Heading',
  component: AdaHeading,
};

export const Text = () => ({
  components: { AdaHeading },
  template: '<ada-heading @click="action">Hello Button</ada-heading>',
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
