<template>
  <div class="container max-w-screen-md mx-auto">
    <header class="flex justify-between h-16 mb-8">
      <g-link to="/" class="font-bold text-4xl flex content-center">{{ $static.metadata.siteName }}</g-link>
      <nav class="flex">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About me</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
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
