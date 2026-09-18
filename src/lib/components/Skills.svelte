<script lang="ts">
  import { skills } from '../data/portfolio';
  import { playBlip } from '$lib/utils/sfx';

  const categoryIcons: Record<string, string> = {
    "AI & Data": "🔮",
    "Engineering": "⚙️",
    "Operations": "🛡️"
  };

  const statLevels: Record<string, { level: string; bar: string }> = {
    "AI & Data": { level: "LVL 95", bar: "■■■■■■■■■□" },
    "Engineering": { level: "LVL 92", bar: "■■■■■■■■■□" },
    "Operations": { level: "LVL MAX", bar: "■■■■■■■■■■" }
  };
</script>

<section id="skills" class="max-w-6xl mx-auto px-4 py-8 md:py-12">
  <div class="pixel-box p-4 md:p-8">
    
    <!-- Section Title Bar -->
    <div class="flex items-center justify-between border-b-2 border-[#1f2227] dark:border-[#2f374e] pb-3 mb-6 font-pixel-sub text-xs">
      <div class="flex items-center gap-2">
        <span class="inline-block w-3 h-3 bg-purple-500 shadow-[1px_1px_0_0_#000]"></span>
        <span class="tracking-widest uppercase text-slate-800 dark:text-slate-200">ATTRIBUTE MATRIX // SKILL TREE</span>
      </div>
      <span class="text-[10px] text-slate-500 font-mono">[PROFICIENCY MATRIX]</span>
    </div>

    <!-- 3 Core Branches -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each skills as cat}
        {@const icon = categoryIcons[cat.title] || "⚡"}
        {@const stat = statLevels[cat.title] || { level: "LVL 90", bar: "■■■■■■■■□□" }}
        {@const skillList = cat.skills.split(',').map(s => s.trim())}

        <div 
          class="pixel-box-inset p-5 flex flex-col justify-between hover:border-purple-500 dark:hover:border-purple-400 transition-none"
          onmouseenter={playBlip}
          role="article"
        >
          <div>
            <!-- Branch Title & Level -->
            <div class="flex items-center justify-between border-b border-slate-400/40 dark:border-slate-700/60 pb-3 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-base">{icon}</span>
                <h3 class="font-pixel-sub text-sm sm:text-base text-slate-900 dark:text-white font-bold">
                  {cat.title}
                </h3>
              </div>
              <span class="font-pixel-sub text-[10px] pixel-badge bg-slate-200 dark:bg-slate-800 text-purple-700 dark:text-purple-400">
                {stat.level}
              </span>
            </div>

            <!-- Pixel Progress Meter -->
            <div class="mb-4 font-mono text-xs text-purple-600 dark:text-purple-400 tracking-wider">
              <span class="text-[10px] text-slate-500 block mb-1 font-pixel-sub">POWER METRIC:</span>
              <span class="text-sm">{stat.bar}</span>
            </div>

            <!-- Individual Skill Sockets -->
            <div class="flex flex-wrap gap-1.5 font-pixel-body text-sm">
              {#each skillList as skillItem}
                <span class="px-2 py-0.5 border border-slate-400/50 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200">
                  {skillItem}
                </span>
              {/each}
            </div>
          </div>

          <div class="mt-5 pt-3 border-t border-slate-400/30 dark:border-slate-700/40 font-pixel-sub text-[9px] text-slate-500 flex justify-between">
            <span>BRANCH STATUS</span>
            <span class="text-emerald-600 dark:text-emerald-400">ACTIVATED</span>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
