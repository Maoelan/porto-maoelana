<script lang="ts">
  import { experiences } from '../data/portfolio';
  import { playBlip } from '$lib/utils/sfx';
</script>

<section id="experience" class="max-w-6xl mx-auto px-4 py-8 md:py-12">
  <div class="pixel-box p-4 md:p-8">
    
    <!-- Section Title Bar -->
    <div class="flex items-center justify-between border-b-2 border-[#1f2227] dark:border-[#2f374e] pb-3 mb-6 font-pixel-sub text-xs">
      <div class="flex items-center gap-2">
        <span class="inline-block w-3 h-3 bg-emerald-500 shadow-[1px_1px_0_0_#000]"></span>
        <span class="tracking-widest uppercase text-slate-800 dark:text-slate-200">CAMPAIGN TIMELINE // QUEST LOG</span>
      </div>
      <span class="text-[10px] text-slate-500 font-mono">[TOTAL RAIDS: {experiences.length}]</span>
    </div>

    <!-- Quest Entries List -->
    <div class="flex flex-col gap-4">
      {#each experiences as exp, idx}
        {@const isOngoing = exp.period.includes('Pres')}
        <div 
          class="pixel-box-inset p-4 md:p-5 transition-transform hover:-translate-y-0.5 transition-none"
          onmouseenter={playBlip}
          role="article"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-400/40 dark:border-slate-700/60 pb-3 mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs text-slate-400 font-mono">#{String(idx + 1).padStart(2, '0')}</span>
              <h3 class="font-pixel-sub text-sm sm:text-base text-slate-900 dark:text-white font-bold tracking-wide">
                {exp.role} <span class="text-amber-600 dark:text-amber-400">@ {exp.company}</span>
              </h3>
            </div>

            <div class="flex items-center gap-2 font-pixel-sub text-[11px]">
              <span class="px-2 py-0.5 border border-slate-600 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {exp.period}
              </span>
              {#if isOngoing}
                <span class="pixel-badge bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-600">
                  ⚔️ ACTIVE
                </span>
              {:else}
                <span class="pixel-badge bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-500">
                  ✓ CLEARED
                </span>
              {/if}
            </div>
          </div>

          <div class="flex items-start gap-2 font-pixel-body text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <span class="text-amber-600 dark:text-amber-400 font-pixel-sub text-xs mt-1 shrink-0">►</span>
            <div>
              {@html exp.description}
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
