<template>
  <Layout>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.node.title">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
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
			}
		}
	}
}
</page-query>
