<script lang="ts">
  import { skills } from '../data/portfolio';
</script>

<section id="skills" class="max-w-4xl mx-auto px-6 py-12 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
  <h2 class="font-mono text-xs text-gray-500 mb-6">Technical Arsenal</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each skills as skillCategory}
      <div class="flex flex-col gap-2 border border-black/10 dark:border-white/10 p-4 transition-colors duration-300">
        <h3 class="font-medium text-sm text-black dark:text-white transition-colors duration-300">{skillCategory.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-xs transition-colors duration-300">
          {skillCategory.skills}
        </p>
      </div>
    {/each}
  </div>
</section>
