<script lang="ts">
  import { projects } from '../data/portfolio';
  import { playBlip, playSelect, playCoin } from '$lib/utils/sfx';

  type FilterCategory = 'ALL' | 'AI' | 'AUTOMATION' | 'HEALTHCARE';
  let activeFilter = $state<FilterCategory>('ALL');

  function setFilter(cat: FilterCategory) {
    playSelect();
    activeFilter = cat;
  }

  const filteredProjects = $derived(
    projects.filter(p => {
      if (activeFilter === 'ALL') return true;
      if (activeFilter === 'AI') {
        return p.category.includes('AI') || p.tech.some(t => t.toLowerCase().includes('gemini') || t.toLowerCase().includes('machine learning') || t.toLowerCase().includes('llama'));
      }
      if (activeFilter === 'AUTOMATION') {
        return p.category.includes('Automation') || p.tech.some(t => t.toLowerCase().includes('playwright') || t.toLowerCase().includes('task scheduler') || t.toLowerCase().includes('pandas'));
      }
      if (activeFilter === 'HEALTHCARE') {
        return p.category.includes('Healthcare') || p.title.toLowerCase().includes('puskesmas') || p.title.toLowerCase().includes('lapor');
      }
      return true;
    })
  );
</script>

<section id="projects" class="max-w-6xl mx-auto px-4 py-8 md:py-12">
  <div class="pixel-box p-4 md:p-8">
    
    <!-- Section Title Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#1f2227] dark:border-[#2f374e] pb-4 mb-6 font-pixel-sub text-xs">
      <div class="flex items-center gap-2">
        <span class="inline-block w-3 h-3 bg-amber-500 shadow-[1px_1px_0_0_#000]"></span>
        <span class="tracking-widest uppercase text-slate-800 dark:text-slate-200">EQUIPMENT ARSENAL // PROJECT VAULT</span>
      </div>

      <!-- Reactive Filter Tabs -->
      <div class="flex flex-wrap gap-1 text-[10px]">
        <button 
          onclick={() => setFilter('ALL')}
          onmouseenter={playBlip}
          class="pixel-btn px-2.5 py-1 {activeFilter === 'ALL' ? 'bg-amber-500 text-black font-bold border-black' : ''}"
        >
          [ALL: {projects.length}]
        </button>
        <button 
          onclick={() => setFilter('AI')}
          onmouseenter={playBlip}
          class="pixel-btn px-2.5 py-1 {activeFilter === 'AI' ? 'bg-amber-500 text-black font-bold border-black' : ''}"
        >
          [AI/ML]
        </button>
        <button 
          onclick={() => setFilter('AUTOMATION')}
          onmouseenter={playBlip}
          class="pixel-btn px-2.5 py-1 {activeFilter === 'AUTOMATION' ? 'bg-amber-500 text-black font-bold border-black' : ''}"
        >
          [RPA/DATA]
        </button>
        <button 
          onclick={() => setFilter('HEALTHCARE')}
          onmouseenter={playBlip}
          class="pixel-btn px-2.5 py-1 {activeFilter === 'HEALTHCARE' ? 'bg-amber-500 text-black font-bold border-black' : ''}"
        >
          [HEALTHCARE]
        </button>
      </div>
    </div>

    <!-- Inventory Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each filteredProjects as project}
        <div 
          class="pixel-box-inset p-5 flex flex-col justify-between hover:border-amber-500 dark:hover:border-amber-400 transition-none group"
          onmouseenter={playBlip}
          role="article"
        >
          <div>
            <!-- Header Tag & Clearance -->
            <div class="flex items-center justify-between gap-2 mb-3 font-pixel-sub text-[10px]">
              <span class="pixel-badge bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {project.category}
              </span>

              {#if project.type === 'Internal'}
                <span class="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono">
                  <span>🔒</span> INTERNAL
                </span>
              {:else if project.type === 'Github'}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center gap-1 pixel-btn px-2 py-0.5 text-sky-700 dark:text-sky-400 hover:text-amber-500 transition-none"
                  onclick={playCoin}
                  title="Inspect Source Code"
                >
                  <span>⚔️</span> SOURCE [GH]
                </a>
              {/if}
            </div>

            <!-- Project Title -->
            <h3 class="font-pixel-sub text-base sm:text-lg text-slate-900 dark:text-white font-bold tracking-wide mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-none">
              {project.title}
            </h3>

            <!-- Real Operational Impact Description -->
            <p class="font-pixel-body text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
              {@html project.description}
            </p>
          </div>

          <!-- Equipment Tech Sockets -->
          <div class="pt-3 border-t border-slate-400/40 dark:border-slate-700/60 font-pixel-sub text-[10px] flex flex-wrap gap-1.5">
            <span class="text-slate-400 self-center mr-1">SOCKETS:</span>
            {#each project.tech as t}
              <span class="px-1.5 py-0.5 border border-slate-500/60 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300">
                {t}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
