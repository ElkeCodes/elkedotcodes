<template>
  <Layout>
    <AdaHeading
      >{{ $page.blogPost.icon }} {{ $page.blogPost.title }}</AdaHeading
    >
    <AdaIntro v-if="$page.blogPost.excerpt">{{
      $page.blogPost.excerpt
    }}</AdaIntro>
    <div v-html="$page.blogPost.content"></div>
    <aside>
      <p class="italic text-tiny">
        This {{ $page.blogPost.type }} was written on {{ $page.blogPost.date }}
      </p>
      <div
        class="flex flex-wrap md:flex-no-wrap mb-2 bg-gray-lighter rounded-lg px-4 py-2"
      >
        <div class="w-full md:w-1/5 flex justify-center items-center">
          <img
            src="/img/me.jpg"
            alt=""
            class="w-1/2 md:w-full rounded-full shadow-lg transition pt-4 md:pt-0"
          />
        </div>
        <div class="w-full md:w-4/5 md:pl-8">
          <h2 class="text-lg text-center md:text-left">
            Hi there, I'm Elke! <br class="md:hidden" />👩🏼‍💻 🤘 📸
          </h2>
          <p class="text-tiny">
            I'm a frontend developer focusing on <strong>Vue</strong>,
            <strong>TypeScript</strong> with a strong interest in a variety of
            web technologies. In my spare time you can find me taking
            photographs at events, training for half marathons or enjoying music
            by collecting records and attending concerts. Let's grab a beer or
            coffee while talking tech!
          </p>
        </div>
      </div>
    </aside>
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
      meta: [
        { name: "description", content: this.$page.blogPost.excerpt },
        { name: "og:title", content: this.$page.blogPost.title },
        { name: "og:description", content: this.$page.blogPost.excerpt },
        // { name: "og:url", content: document.location.href },
        { name: "og:type", content: "article" },
        { name: "og:image", content: "TODO" }, // TODO
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@elkecodes" },
        { name: "twitter:title", content: this.$page.blogPost.title },
        { name: "twitter:description", content: this.$page.blogPost.excerpt },
        { name: "twitter:image", content: "TODO" }, // TODO
      ]
    };
  },
  components: {
    AdaButton,
    AdaHeading,
    AdaIntro
  }
};
</script>

<page-query>
query BlogPost ($path: String!) {
  blogPost(path: $path) {
    title
    excerpt
    content
    date (format: "D MMMM YYYY")
    type
    icon
  }
}
</page-query>
