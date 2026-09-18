<script lang="ts">
  import './layout.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Maulana Muhammad // AI & Automation Specialist</title>
  <meta name="description" content="Portfolio of Maulana Muhammad — AI/ML Engineer & Automation Specialist. Translating complex data into operational reality. 16-Bit Retro Edition." />
  <link rel="icon" href="/logo.png" />
</svelte:head>

{@render children()}
