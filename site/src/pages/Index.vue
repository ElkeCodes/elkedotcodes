<template>
  <Layout>
    <div>
      <img
        :src="profilePicture"
        @mouseover="mouseover"
        @mouseleave="mouseleave"
        alt=""
        class="w-1/6 float-left rounded-full shadow-lg mr-4 transition mt-4"
      />
      <h1 class="font-bold text-5xl">Hi there, I'm Elke! 👩🏼‍💻 🤘 📸</h1>
      <p>
        I'm a frontend developer focusing on Vue, TypeScript with a strong
        interest in a variety of web technologies. In my spare time you can find
        me taking photographs at events, training for half marathons or enjoying
        music by collecting records and attending concerts.
      </p>
    </div>
    <AdaHeading>Latest blogposts</AdaHeading>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.node.title">
        <g-link :to="post.node.path">
          <AdaCard>
            <template v-slot:title>{{ post.node.title }}</template>
            <p>{{ post.node.excerpt }}</p>
          </AdaCard>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
import AdaCard from "ada/src/components/Card";
import AdaHeading from "ada/src/components/Heading";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    AdaCard,
    AdaHeading
  },
  data() {
    return {
      profilePicture: "/img/me.jpg"
    };
  },
  methods: {
    mouseover: function() {
      this.profilePicture = "/img/me-metal.jpg";
    },
    mouseleave: function() {
      this.profilePicture = "/img/me.jpg";
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query {
	posts: allBlogPost {
		edges {
			node {
				title
        path
        excerpt
			}
		}
	}
}
</page-query>
