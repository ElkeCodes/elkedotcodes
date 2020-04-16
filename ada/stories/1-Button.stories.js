import AdaButton from '../src/components/Button';
import "../src/assets/css/tailwind.scss";

export default {
  title: 'Button',
  component: AdaButton,
};

export const Text = () => ({
  components: { AdaButton },
  template: '<ada-button>Hello Button</ada-button>',
});
