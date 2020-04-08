<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <p class="intro">{{ $page.blogPost.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query BlogPost ($id: ID!) {
  blogPost(id: $id) {
    title
    excerpt
  }
}
</page-query>