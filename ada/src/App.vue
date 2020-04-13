<template>
  <div id="app">
    <Overview />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Overview from "./Overview.vue";

export default Vue.extend({
  name: "App",
  components: {
    Overview
  }
});
</script>
