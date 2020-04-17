<template>
  <Layout>
    <AdaHeading>{{ $page.blogPost.title }}</AdaHeading>
    <AdaIntro v-if="$page.blogPost.excerpt">{{ $page.blogPost.excerpt }}</AdaIntro>
    <VueRemarkContent />
    <AdaButton>Test</AdaButton>
  </Layout>
</template>

<script>
import AdaButton from 'ada/src/components/Button'
import AdaHeading from 'ada/src/components/Heading'
import AdaIntro from 'ada/src/components/Intro'

export default {
  components: {
    AdaButton,
    AdaHeading,
    AdaIntro
  }
}
</script>

<page-query>
query BlogPost ($path: String!) {
  blogPost(path: $path) {
    title
    excerpt
  }
}
</page-query>
