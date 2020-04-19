<template>
  <div class="px-4 py-2 mb-4 shadow hover:shadow-lg transition-shadow duration-500">
    <h2 v-if="$slots.title" class="mb-2">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
