<script lang="ts">
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<AnimatedBackground />

<div class="relative z-10 flex flex-col min-h-screen font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black text-sm md:text-base">
  <Navbar />

  <main class="flex-grow w-full">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Footer />
  </main>
</div>

<style>
  /* View Transition API Animations */
  :global(::view-transition-old(root)),
  :global(::view-transition-new(root)) {
    animation: none;
    mix-blend-mode: normal;
  }
  
  /* When switching to dark mode, the new dark view expands on top */
  :global(.dark::view-transition-new(root)) {
    z-index: 2;
    animation: blinds-in 600ms ease-in-out forwards;
  }
  :global(.dark::view-transition-old(root)) {
    z-index: 1;
  }
  
  /* When switching to light mode, the old dark view shrinks on top */
  :global(:root:not(.dark)::view-transition-old(root)) {
    z-index: 2;
    animation: blinds-out 600ms ease-in-out forwards;
  }
  :global(:root:not(.dark)::view-transition-new(root)) {
    z-index: 1;
  }
</style>
