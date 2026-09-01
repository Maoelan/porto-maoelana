<script lang="ts">
  import { experiences } from '../data/portfolio';
</script>

<section id="experience" class="max-w-4xl mx-auto px-6 py-12 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
  <h2 class="font-mono text-xs text-gray-500 mb-8">Experience Log</h2>
  
  <div class="flex flex-col border-t border-black/10 dark:border-white/10 transition-colors duration-300">
    {#each experiences as exp}
      <div class="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 py-4 border-b border-black/10 dark:border-white/10 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-300">
        <div class="font-mono text-xs text-gray-500 pt-1">{exp.period}</div>
        <div class="md:col-span-3 flex flex-col">
          <h3 class="text-base font-medium text-black dark:text-white mb-1 transition-colors duration-300">{exp.role} at {exp.company}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm max-w-[75ch] leading-relaxed transition-colors duration-300">
            {exp.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
