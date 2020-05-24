<template>
  <div class="container max-w-full md:max-w-screen-md mx-auto p-4 md:p-8">
    <header class="full-width flex justify-between h-16 mb-8">
      <g-link to="/" class="w-screen md:w-auto text-center font-bold text-4xl">Elke<span class="text-primary text-7xl leading-6">.</span>codes</g-link>
      <nav class="hidden md:flex">
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
