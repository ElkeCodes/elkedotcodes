<template>
  <div class="container max-w-full md:max-w-screen-md mx-auto">
    <header class="w-full flex items-baseline justify-between mb-2">
      <g-link to="/" class="w-screen md:w-auto text-center font-bold text-4xl no-underline md:ml-8 mt-4 md:mt-8 py-2"
        >Elke<span class="text-primary text-7xl leading-6">.</span>codes</g-link
      >
      <nav class="hidden md:flex mr-8 mt-8">
        <g-link
          v-for="menuItem in menuItems"
          :key="menuItem.label"
          class="self-center ml-4 px-4 py-2 font-black no-underline rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-primary"
          :to="menuItem.to"
          >{{ menuItem.label }}</g-link
        >
      </nav>
      <div @click="isMenuOpen = true" class="absolute right-0 text-2xl px-4 py-2 md:hidden">🍔</div>
      <nav
        class="flex fixed w-screen h-screen overflow-hidden bg-primary flex-col transition-max-h duration-700 ease-in-out"
        :class="{
          'max-h-0': !isMenuOpen,
          'max-h-screen': isMenuOpen,
        }"
      >
        <button class="text-right text-2xl px-4 py-2 mb-4" @click="isMenuOpen = false">🙅‍♀️</button>
        <g-link
          v-for="menuItem in menuItems"
          :key="menuItem.label"
          class="text-center font-black no-underline text-2xl p-4"
          @click="isMenuOpen = false"
          :to="menuItem.to"
          >{{ menuItem.label }}</g-link
        >
      </nav>
    </header>
    <div class="w-full p-4 md:p-8">
      <slot />
    </div>
    <footer class="w-full m-4 md:m-8 md:mt-0 pt-2 border-t text-tiny">
      &copy; 2020 Elke Heymans - Made with Vue, Gridsome, TailwindCSS, GraphQL
      and ☕️
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        {
          to: "/",
          label: "Home"
        },
        {
          to: "/about",
          label: "About me"
        },
        {
          to: "/speaking",
          label: "Speaking"
        }
      ]
    };
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
