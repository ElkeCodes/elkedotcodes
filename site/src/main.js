import "ada/style.scss";
import "prismjs/themes/prism-tomorrow.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  setHeadTags(head);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}

const setHeadTags = head => {
  head.meta.push({
    name: "keywords",
    content: "HTML,CSS,JavaScript,VueJS"
  });
  head.meta.push({
    name: "author",
    content: "Elke Heymans"
  });
};
