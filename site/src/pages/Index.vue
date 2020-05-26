<template>
  <Layout>
    <div class="flex flex-wrap md:flex-no-wrap mb-2">
      <div class="w-full md:w-1/4 flex justify-center items-center">
        <img
          :src="profilePicture"
          @mouseover="mouseover"
          @mouseleave="mouseleave"
          alt=""
          class="w-1/2 md:w-full rounded-full shadow-lg transition"
        />
      </div>

      <div class="w-full md:w-3/4 md:pl-8">
        <h1 class="text-center">Hi there, I'm Elke!<br />👩🏼‍💻 🤘 📸</h1>
        <p class="text-tiny">
          I'm a frontend developer focusing on <strong>Vue</strong>,
          <strong>TypeScript</strong> with a strong interest in a variety of web
          technologies. In my spare time you can find me taking photographs at
          events, training for half marathons or enjoying music by collecting
          records and attending concerts. Let's grab a beer or coffee while
          talking tech!
        </p>
      </div>
    </div>
    <section class="clearfix mb-4">
      <h2>Highlighted blogpost</h2>
      <g-link
        :to="highlightedBlogpost.node.path"
        class="block rounded-lg bg-gray px-4 py-2 mt-2 mb-4 transition duration-300 ease-in-out hover:bg-gray-lighter"
      >
        <h3>{{ highlightedBlogpost.node.title }}</h3>
        <p>{{ highlightedBlogpost.node.excerpt }}</p>
      </g-link>
      <g-link
        :to="highlightedBlogpost.node.path"
        class="block text-center md:float-right px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-primary hover:bg-primary-lighter"
      >
        📖 Read my "<span class="italic">{{
          highlightedBlogpost.node.title
        }}</span
        >" {{ highlightedBlogpost.node.type }}
      </g-link>
    </section>
    <h2>Latest blogposts</h2>
    <ul>
      <li
        v-for="post in latestBlogposts"
        :key="post.node.title"
        class="my-2 w-full rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 group hover:bg-primary"
      >
        <g-link
          :to="post.node.path"
          class="w-full flex items-center content-between"
          ><span
            class="h-10 w-10 flex-shrink-0 mr-2 md:mr-4 rounded-full bg-gray group-hover:bg-primary transition duration-300 ease-in-out flex items-center justify-center"
            >{{ post.node.icon }}</span
          >
          <span class="flex-grow">{{ post.node.title }}</span>
          <span
            class="mr-2 px-2 py-1 text-tiny rounded bg-gray group-hover:bg-primary transition duration-300 ease-in-out"
            >{{ post.node.type }}</span
          ></g-link
        >
      </li>
    </ul>
  </Layout>
</template>

<script>
import Vue from "vue";
import AdaCard from "ada/src/components/Card";

export default {
  metaInfo: {
    title: "Hi I'm Elke!",
    meta: [
      {
        name: "description",
        content:
          "Personal blog mainly about webdevelopment. Focus on Vue, TypeScript, bookreviews, coding tips and my experience as a woman in tech."
      }
    ]
  },
  components: {
    AdaCard
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
  },
  computed: {
    highlightedBlogpost() {
      return this.$page.posts ? this.$page.posts.edges[0] : {};
    },
    latestBlogposts() {
      return this.$page.posts.edges;
      // return this.$page.posts ? this.$page.posts.edges.slice(1) : [];
    }
  }
};
</script>

<page-query>
query {
	posts: allBlogPost(filter: { published: { eq: true }}) {
		edges {
			node {
				title
        path
        excerpt
        icon
        type
			}
		}
	}
}
</page-query>
