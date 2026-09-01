<script lang="ts">
  import { projects } from '../data/portfolio';
  import { LockKey, GithubLogo } from 'phosphor-svelte';
</script>

<section id="projects" class="max-w-4xl mx-auto px-6 py-12 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
  <h2 class="font-mono text-xs text-gray-500 mb-8">Project Log</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each projects as project}
      <div class="flex flex-col border border-black/10 dark:border-white/10 p-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-300">
        <div class="flex justify-between items-start mb-3 font-mono text-[10px] text-gray-500">
          <span class="text-black dark:text-white transition-colors duration-300">{project.category}</span>
          
          {#if project.type === 'Internal'}
            <span class="flex items-center gap-1"><LockKey size={10}/> Internal</span>
          {:else if project.type === 'Github'}
            <a href={project.link} target="_blank" class="hover:text-black dark:hover:text-white transition-colors" title="View Source">
              <GithubLogo size={14} />
            </a>
          {/if}
        </div>
        
        <h3 class="text-base font-medium text-black dark:text-white mb-2 transition-colors duration-300">{project.title}</h3>
        
        <p class="text-gray-600 dark:text-gray-400 text-xs text-justify leading-relaxed flex-grow mb-4 transition-colors duration-300">
          {project.description}
        </p>
        
        <div class="font-mono text-[9px] text-gray-500 flex flex-wrap gap-2 pt-3 border-t border-black/10 dark:border-white/10 transition-colors duration-300">
          {#each project.tech as t}
            <span>{t}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
