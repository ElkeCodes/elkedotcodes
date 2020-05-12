<template functional>
  <div
    class="px-4 py-2 mb-4 shadow hover:shadow-lg transition-shadow duration-500 bg-gray rounded"
  >
    <h3 v-if="$slots.title" class="mb-2 pt-2">
      <slot name="title"></slot>
    </h3>
    <p class="truncate"><slot></slot></p>
  </div>
</template>
