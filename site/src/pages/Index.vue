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
    <h2>Highlighted blogpost</h2>
    <h3>{{ highlightedBlogpost.node.title }}</h3>
    <p>{{ highlightedBlogpost.node.excerpt }}</p>
    <h2>Latest blogposts</h2>
    <ul>
      <li v-for="post in latestBlogposts" :key="post.node.title">
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
import Vue from "vue";
import AdaCard from "ada/src/components/Card";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    AdaCard,
  },
  data() {
    return {
      profilePicture: "/img/me.jpg",
    };
  },
  methods: {
    mouseover: function () {
      this.profilePicture = "/img/me-metal.jpg";
    },
    mouseleave: function () {
      this.profilePicture = "/img/me.jpg";
    },
  },
  computed: {
    highlightedBlogpost() {
      return this.$page.posts ? this.$page.posts.edges[0] : {};
    },
    latestBlogposts() {
      return this.$page.posts ? this.$page.posts.edges.slice(1) : [];
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
