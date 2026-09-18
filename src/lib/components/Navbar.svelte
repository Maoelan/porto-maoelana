<script lang="ts">
  import { onMount } from "svelte";
  import { playBlip, playSelect, playPowerUp } from "$lib/utils/sfx";
  import { retroSettings } from "$lib/utils/state.svelte";
  import { bgmManager } from "$lib/utils/bgm.svelte";

  let isDark = $state(true);

  onMount(() => {
    if (localStorage.theme === 'light') {
      isDark = false;
      document.documentElement.classList.remove('dark');
    } else {
      isDark = true;
      document.documentElement.classList.add('dark');
    }
  });

  function toggleTheme() {
    playPowerUp();
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  function handleCrtToggle() {
    playPowerUp();
    retroSettings.toggleCrt();
  }

  function handleSfxToggle() {
    retroSettings.toggleAudio();
  }

  function handleBgmToggle() {
    playSelect();
    bgmManager.toggle();
  }
</script>

<nav class="sticky top-0 z-40 w-full border-b-2 border-[#1f2227] dark:border-[#2f374e] bg-[#f2f0e6]/95 dark:bg-[#131722]/95 backdrop-blur-none transition-colors duration-200 shadow-[0_2px_0_0_#141619] dark:shadow-[0_2px_0_0_#05070a]">
  <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
    
    <!-- Player Status Brand with new_logo.png -->
    <a 
      href="#hero" 
      class="group flex items-center gap-2.5 font-pixel-sub text-sm tracking-wider text-slate-900 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-400 transition-none"
      onmouseenter={playBlip}
      onclick={playSelect}
    >
      <div class="w-7 h-7 border border-[#1f2227] dark:border-[#2f374e] bg-slate-900 flex items-center justify-center p-0.5 shadow-[1px_1px_0_0_#000]">
        <img 
          src="/new_logo.png" 
          alt="Maulana Logo" 
          class="w-full h-full object-contain pixelated"
        />
      </div>
      <span class="inline-block w-2 h-2 bg-emerald-500 shadow-[1px_1px_0_0_#000] animate-pulse"></span>
      <span class="font-pixel-title text-xs">MAULANA.SYS</span>
      <span class="text-[10px] px-1.5 py-0.5 border border-slate-700 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
        LVL 26
      </span>
    </a>

    <!-- Navigation Nodes -->
    <div class="flex flex-wrap items-center justify-between md:justify-end gap-2 sm:gap-4 text-xs font-pixel-sub">
      <div class="flex items-center gap-1 sm:gap-2">
        <a 
          href="#about" 
          class="px-2 py-1 border border-transparent hover:border-slate-800 dark:hover:border-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-none"
          onmouseenter={playBlip}
          onclick={playSelect}
        >
          [01.INFO]
        </a>
        <a 
          href="#experience" 
          class="px-2 py-1 border border-transparent hover:border-slate-800 dark:hover:border-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-none"
          onmouseenter={playBlip}
          onclick={playSelect}
        >
          [02.QUESTS]
        </a>
        <a 
          href="#projects" 
          class="px-2 py-1 border border-transparent hover:border-slate-800 dark:hover:border-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-none"
          onmouseenter={playBlip}
          onclick={playSelect}
        >
          [03.ARSENAL]
        </a>
        <a 
          href="#skills" 
          class="px-2 py-1 border border-transparent hover:border-slate-800 dark:hover:border-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-none"
          onmouseenter={playBlip}
          onclick={playSelect}
        >
          [04.SKILLS]
        </a>
      </div>

      <!-- Retro Utility Toggles -->
      <div class="flex items-center gap-1 sm:gap-2 border-l-2 border-slate-400 dark:border-slate-700 pl-2 sm:pl-3">
        <!-- 8-Bit BGM Soundtrack Toggle -->
        <button
          onclick={handleBgmToggle}
          onmouseenter={playBlip}
          title="Toggle 8-Bit Background Soundtrack"
          class="pixel-btn px-2 py-1 text-[10px] sm:text-xs flex items-center gap-1.5 {bgmManager.isPlaying ? 'text-amber-500 bg-amber-950/40 border-amber-500' : 'text-slate-600 dark:text-slate-400'}"
        >
          <span>{bgmManager.isPlaying ? '🎵 BGM: ON' : '🔇 BGM: OFF'}</span>
        </button>

        <!-- SFX Sound Toggle -->
        <button
          onclick={handleSfxToggle}
          onmouseenter={playBlip}
          title="Toggle 8-bit Audio Effects"
          class="pixel-btn px-2 py-1 text-[10px] sm:text-xs flex items-center gap-1 {retroSettings.sfxMuted ? 'opacity-60 bg-red-900/30' : 'text-emerald-600 dark:text-emerald-400'}"
        >
          <span>{retroSettings.sfxMuted ? '🔇 SFX: OFF' : '🔊 SFX'}</span>
        </button>

        <!-- CRT Overlay Toggle -->
        <button
          onclick={handleCrtToggle}
          onmouseenter={playBlip}
          title="Toggle Retro CRT Monitor Filter"
          class="pixel-btn px-2 py-1 text-[10px] sm:text-xs flex items-center gap-1 {retroSettings.crtEnabled ? 'text-amber-500 bg-amber-950/30' : ''}"
        >
          <span>📺 CRT</span>
        </button>

        <!-- Theme Toggle -->
        <button
          onclick={toggleTheme}
          onmouseenter={playBlip}
          title="Switch Color Palette"
          class="pixel-btn px-2 py-1 text-[10px] sm:text-xs"
        >
          <span>{isDark ? '🌙 DARK' : '☀️ DMG'}</span>
        </button>
      </div>

    </div>

  </div>
</nav>
