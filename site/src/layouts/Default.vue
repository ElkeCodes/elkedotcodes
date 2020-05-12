<template>
  <div class="container max-w-screen-md mx-auto">
    <header class="full-width flex justify-between h-16 mb-8">
      <g-link to="/" class="font-bold text-4xl flex content-center">{{
        $static.metadata.siteName
      }}</g-link>
      <nav class="flex">
        <g-link class="self-center ml-4 px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-primary" to="/">Home</g-link>
        <g-link class="self-center ml-4 px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-primary" to="/about/">About me</g-link>
      </nav>
    </header>
    <div class="full-width">
      <slot />
    </div>
    <footer class="full-width mt-16 pt-2 border-t">
      &copy; 2020 Elke Heymans
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
