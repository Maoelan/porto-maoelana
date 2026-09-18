<script lang="ts">
  import { playBlip, playSelect, playCoin } from "$lib/utils/sfx";
</script>

<section id="hero" class="max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-20">
  
  <!-- Main Character Status Window -->
  <div class="pixel-box p-4 md:p-8">
    
    <!-- Window Header Title Bar -->
    <div class="flex items-center justify-between border-b-2 border-[#1f2227] dark:border-[#2f374e] pb-3 mb-6 font-pixel-sub text-xs">
      <div class="flex items-center gap-2">
        <span class="inline-block w-3 h-3 bg-amber-500 shadow-[1px_1px_0_0_#000]"></span>
        <span class="tracking-widest uppercase text-slate-800 dark:text-slate-200">CHARACTER SHEET // OPERATOR PROFILE</span>
      </div>
      <div class="hidden sm:flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
        <span>REGION: ID</span>
        <span>STATUS: ACTIVE</span>
      </div>
    </div>

    <!-- Character Sheet Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      <!-- Dialogue & Action Area (Col 8) -->
      <div class="lg:col-span-8 flex flex-col justify-between">
        
        <!-- Player Class & Tags -->
        <div class="flex flex-wrap gap-2 mb-4 font-pixel-sub text-xs">
          <span class="pixel-badge bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300">
            CLASS: AI & AUTOMATION ENGINEER
          </span>
          <span class="pixel-badge bg-sky-100 dark:bg-sky-950/70 text-sky-900 dark:text-sky-300">
            SPEC: HEALTHCARE IT & RPA
          </span>
        </div>

        <!-- Dialogue Box -->
        <div class="pixel-box-inset p-4 md:p-6 mb-6">
          <div class="flex items-center gap-2 mb-2 font-pixel-sub text-[11px] text-emerald-700 dark:text-emerald-400">
            <span>► SPEAKER: MAULANA</span>
            <span class="text-slate-400 text-[9px]">// MSG_ID: 0x2026</span>
          </div>

          <h1 class="font-pixel-title text-base sm:text-xl md:text-2xl text-slate-900 dark:text-white leading-relaxed tracking-wide mb-4">
            Translating complex data into operational reality<span class="animate-retro-blink text-amber-500">_</span>
          </h1>

          <p class="font-pixel-body text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Focused on precision, <strong class="text-sky-600 dark:text-sky-400">clean architecture</strong>, and deploying systems that deliver <strong class="text-emerald-600 dark:text-emerald-400">measurable impact</strong> across public health and enterprise infrastructure.
          </p>
        </div>

        <!-- RPG Stat Gauges -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-pixel-sub text-xs">
          <!-- HP -->
          <div class="p-2 border border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60">
            <div class="flex justify-between mb-1 text-[10px]">
              <span class="text-red-700 dark:text-red-400">HP (CODE REVIEWS)</span>
              <span class="font-mono">4000/4000</span>
            </div>
            <div class="w-full h-2 bg-slate-300 dark:bg-slate-800 border border-slate-600 overflow-hidden">
              <div class="h-full bg-red-500 w-full"></div>
            </div>
          </div>

          <!-- MP -->
          <div class="p-2 border border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60">
            <div class="flex justify-between mb-1 text-[10px]">
              <span class="text-sky-700 dark:text-sky-400">MP (AUTOMATION)</span>
              <span class="font-mono">999/999</span>
            </div>
            <div class="w-full h-2 bg-slate-300 dark:bg-slate-800 border border-slate-600 overflow-hidden">
              <div class="h-full bg-sky-500 w-full"></div>
            </div>
          </div>

          <!-- EXP -->
          <div class="p-2 border border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60">
            <div class="flex justify-between mb-1 text-[10px]">
              <span class="text-amber-700 dark:text-amber-400">EXP (DELIVERY)</span>
              <span class="font-mono">LVL MAX</span>
            </div>
            <div class="w-full h-2 bg-slate-300 dark:bg-slate-800 border border-slate-600 overflow-hidden">
              <div class="h-full bg-amber-500 w-full"></div>
            </div>
          </div>
        </div>

        <!-- Action Command Buttons -->
        <div class="flex flex-wrap gap-3 font-pixel-sub text-xs">
          <a
            href="https://www.linkedin.com/in/maulanamuhammad2000"
            target="_blank"
            rel="noopener noreferrer"
            class="pixel-btn pixel-btn-primary px-5 py-3 gap-2"
            onmouseenter={playBlip}
            onclick={playCoin}
          >
            <span>▶ CONNECT LINKEDIN</span>
          </a>

          <a
            href="#projects"
            class="pixel-btn px-5 py-3 gap-2"
            onmouseenter={playBlip}
            onclick={playSelect}
          >
            <span>▶ OPEN ARSENAL [WORK]</span>
          </a>
        </div>

      </div>

      <!-- Character Portrait Box (Col 4) -->
      <div class="lg:col-span-4 flex flex-col items-center">
        <div class="pixel-box-inset p-2 w-full max-w-[260px] flex flex-col items-center">
          <div class="w-full aspect-square border-2 border-[#1f2227] dark:border-[#2f374e] overflow-hidden bg-slate-900 relative">
            <img 
              src="/new-my-photo.png" 
              alt="Maulana Muhammad Avatar" 
              class="w-full h-full object-cover pixelated contrast-125 brightness-95"
            />
            <div class="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-emerald-400 text-[9px] font-pixel-sub border border-emerald-500/50">
              OPERATOR.PNG
            </div>
          </div>
          <div class="w-full mt-2 pt-2 border-t border-slate-400 dark:border-slate-700 text-center font-pixel-sub text-[10px] text-slate-600 dark:text-slate-400">
            MAULANA MUHAMMAD // INDONESIA
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
