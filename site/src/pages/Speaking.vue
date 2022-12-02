<template>
  <Layout>
    <AdaHeading>Speaking history</AdaHeading>
    <h2>🎄 Advent of Code:</h2>
    <p class="text-tiny">Presented 1 December 2022 @ women.code(be)</p>
    <p>
      Christmas is coming! That means that the yearly tradition of the Advent of
      Code is here, an Advent calendar of small programming puzzles for a
      variety of skill sets and skill levels. They have been used as a speed
      contest, interview preparation, company training, university coursework,
      practice problems, to challenge each other, or just for fun. But how do
      you participate in the Advent of Code? What kind of programming puzzles
      can you expect? Is it possible to learn a new programming language with
      the Advent of Code or should you stick to something that you know?
    </p>
    <a
      href="/presentations/advent-of-code"
      target="_blank"
      class="inline-block text-left w-auto no-underline px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-primary hover:bg-primary-lighter"
    >
      🖼 Open the Advent Of Code slides
    </a>
    <h2>⛵️ Hoist the sails, we have TailwindCSS!</h2>
    <p class="text-tiny">Presented 14 September 2020 @ women.code(be)</p>
    <p>
      In this lightning talk of 15 minutes I introduce TailwindCSS. While most
      CSS frameworks provide pre-designed components , Tailwind CSS provides
      utility classes to style your frontend components from scratch. I show how
      to use it to build custom, responsive and maintainable designs without
      having to write CSS.
    </p>
    <a
      href="/presentations/tailwindcss"
      target="_blank"
      class="inline-block text-left w-auto no-underline px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-primary hover:bg-primary-lighter"
    >
      🖼 Open the TailwindCSS slides
    </a>
    <h2>🕹 Pacman VR in Vue</h2>
    <p class="text-tiny">Presented 27 February 2020 @ women.code(be)</p>
    <p>
      A lot of people have played the game Pacman before. But with the rising
      popularity of VR, how would it be to build a Pacman VR? Is it even
      possible to have a playable version on mobile? In this 40 minutes talk I
      dive into some history of Pacman and how it's linked to arcade gaming for
      women. After that I explain how I built a VR version of the popular arcade
      game with the help of Vue and A-frame.
    </p>
    <a
      href="/presentations/pacman-vr"
      target="_blank"
      class="inline-block text-left w-auto no-underline px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-primary hover:bg-primary-lighter"
    >
      🖼 Open the PacmanVR slides
    </a>
  </Layout>
</template>

<script>
import Vue from "vue";
import AdaHeading from "ada/src/components/Heading";

export default {
  metaInfo: {
    title: "Speaking",
    meta: [
      {
        description: "From time to time I love giving talks",
      },
    ],
  },
  components: {
    AdaHeading,
  },
};
</script>
