<script lang="ts">
  import { skills } from '../data/portfolio';
</script>

<section id="skills" class="max-w-5xl mx-auto px-6 py-20 md:py-24 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
  <h2 class="font-mono text-sm text-gray-500 mb-6">Technical Arsenal</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each skills as skillCategory}
      <div class="flex flex-col gap-3 border border-black/10 dark:border-white/10 p-5 transition-colors duration-300">
        <h3 class="font-medium text-base text-black dark:text-white transition-colors duration-300">{skillCategory.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-sm transition-colors duration-300">
          {@html skillCategory.skills}
        </p>
      </div>
    {/each}
  </div>
</section>
