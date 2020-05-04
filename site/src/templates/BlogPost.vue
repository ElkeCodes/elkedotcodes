<template>
  <Layout>
    <AdaHeading>{{ $page.blogPost.title }}</AdaHeading>
    <AdaIntro v-if="$page.blogPost.excerpt">{{
      $page.blogPost.excerpt
    }}</AdaIntro>
    <div v-html="$page.blogPost.content"></div>
  </Layout>
</template>

<script>
import Vue from "vue";
import AdaButton from "ada/src/components/Button";
import AdaHeading from "ada/src/components/Heading";
import AdaIntro from "ada/src/components/Intro";

export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
    };
  },
  components: {
    AdaButton,
    AdaHeading,
    AdaIntro,
  },
};
</script>

<page-query>
query BlogPost ($path: String!) {
  blogPost(path: $path) {
    title
    excerpt
    content
  }
}
</page-query>
