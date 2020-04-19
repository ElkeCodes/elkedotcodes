<template>
  <Layout>
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
