<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <p class="intro">{{ $page.blogPost.excerpt }}</p>
    <AdaButton></AdaButton>
    <VueRemarkContent />
  </Layout>
</template>

<script>
import AdaButton from 'ada/src/components/Button'

export default {
  components: {
    AdaButton
  }
}
</script>

<page-query>
query BlogPost ($id: ID!) {
  blogPost(id: $id) {
    title
    excerpt
  }
}
</page-query>
