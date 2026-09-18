<script lang="ts">
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { retroSettings } from '$lib/utils/state.svelte';
</script>

<div class={retroSettings.crtEnabled ? 'crt-overlay' : ''}>
  <AnimatedBackground />

  <div class="relative z-10 flex flex-col min-h-screen text-slate-900 dark:text-slate-100 font-pixel-body selection:bg-amber-400 selection:text-black dark:selection:bg-amber-400 dark:selection:text-black text-base transition-colors duration-200">
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
</div>

<style>
  :global(strong) {
    font-weight: 600;
    color: #0284c7;
  }
  :global(html.dark strong) {
    color: #38bdf8;
  }
</style>
