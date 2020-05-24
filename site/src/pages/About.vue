<template>
  <Layout>
    <AdaHeading>Hi I'm Elke!</AdaHeading>
    <h2>I ...</h2>
    <ul>
      <li>👩🏼‍💻 am a frontend developer by day</li>
      <li>📸 am a photographer by night</li>
      <li>🤘 love metal music</li>
      <li>🤣 crack up at dumb jokes</li>
      <li>🍟 love eating fries</li>
      <li>🤯 like to learn mindblowing facts</li>
      <li>🇧🇪 live in Belgium</li>
      <li>🎶 collect vinyl records</li>
      <li>👩‍🦱 have curly hair</li>
      <li>🇳🇱 have Dutch as my mother tongue</li>
      <li>🍣 love sushi</li>
      <li>🎓 have a Bachelor's and Master's degree in computer sciences</li>
      <li>🦊 find foxes cool animals</li>
      <li>🍻 am always up to grab a beer</li>
      <li>🇫🇷 speak French</li>
      <li>🎲 like to play boardgames</li>
      <li>🖼 once took one picture per day for 1000+ days in a row</li>
    </ul>
    <h2>My current tech stack consists of ...</h2>
    <ul>
      <li>💻 Vue</li>
      <li>💻 TypeScript</li>
      <li>💻 GraphQL</li>
      <li>💻 Tailwind CSS</li>
      <li>💻 Gridsome</li>
      <li>💻 Storybook</li>
      <li>💻 Cypress</li>
      <li>💻 Git</li>
      <li>💻 Yarn</li>
      <li>💻 HTML</li>
      <li>💻 CSS</li>
      <li>💻 Vuex</li>
      <li>💻 Webpack</li>
    </ul>
    <h2>I like to learn more about ...</h2>
    <ul>
      <li>🌟 React</li>
      <li>🌟 NativeScript</li>
      <li>🌟 Svelte</li>
      <li>🌟 Rollup</li>
      <li>🌟 Three.js</li>
    </ul>
    <h2>I have past experience with ...</h2>
    <ul>
      <li>🔴 Angular</li>
      <li>🔴 RxJS</li>
      <li>🔴 Ionic</li>
      <li>🔴 Socket.io</li>
      <li>🔴 Kendo UI</li>
      <li>🔴 PrimeNG</li>
      <li>🔴 Leaflet</li>
      <li>🔴 Bootstrap</li>
    </ul>
    <p class="text-tiny">
      Note: these lists are not exhaustive and will change over time when I work
      on new projects or when I'm experimenting with new things.
    </p>
  </Layout>
</template>

<script>
import Vue from "vue";
import AdaHeading from "ada/src/components/Heading";

export default {
  metaInfo: {
    title: "About us",
    meta: [
      {
        description:
          "Learn more about myself, the technologies I use and what kind of tech I'm interested in to learn!"
      }
    ]
  },
  components: {
    AdaHeading
  }
};
</script>
