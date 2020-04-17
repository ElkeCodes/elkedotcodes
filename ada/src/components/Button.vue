<template>
  <router-link
    :tag="tag"
    :to="to"
    class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-darker transition-colors duration-500"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    tag: {
      default: "button"
    },
    to: {
      default: () => ({})
    }
  }
});
</script>

<style></style>
