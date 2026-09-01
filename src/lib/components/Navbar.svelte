<script lang="ts">
  import { onMount } from "svelte";
  import { Sun, Moon } from "phosphor-svelte";

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

  function toggleTheme(event: MouseEvent) {
    const isNowDark = !isDark;
    
    const switchTheme = () => {
      isDark = isNowDark;
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    const transition = document.startViewTransition(switchTheme);

    transition.ready.then(() => {
      const numBars = 10;
      const startPolygon = ['0% 0%'];
      const endPolygon = ['0% 0%'];
      
      for (let i = 0; i < numBars; i++) {
        const left = (i / numBars) * 100;
        const right = ((i + 1) / numBars) * 100;
        
        startPolygon.push(`${left}% 0%`, `${right}% 0%`, `${right}% 0%`);
        endPolygon.push(`${left}% 100%`, `${right}% 100%`, `${right}% 0%`);
      }
      
      startPolygon.push('0% 0%');
      endPolygon.push('0% 0%');

      const clipPath = [
        `polygon(${startPolygon.join(', ')})`,
        `polygon(${endPolygon.join(', ')})`
      ];
      
      // Animate the active layer (the one performing the blinds effect)
      document.documentElement.animate(
        {
          clipPath: isNowDark ? clipPath : [...clipPath].reverse(),
          opacity: [1, 1] // Override the CSS opacity: 0
        },
        {
          duration: 600,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement: isNowDark ? "::view-transition-new(root)" : "::view-transition-old(root)"
        }
      );
      
      // Ensure the passive layer is fully visible
      document.documentElement.animate(
        { opacity: [1, 1] },
        {
          duration: 600,
          fill: "forwards",
          pseudoElement: isNowDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
        }
      );
    });
  }
</script>

<nav class="w-full border-b border-black/10 dark:border-white/10 transition-colors duration-300">
  <div class="max-w-4xl mx-auto px-6 py-4 flex flex-col items-center md:flex-row md:justify-between gap-4">
    <a href="#hero" class="text-base text-black dark:text-white font-medium tracking-tight hover:underline underline-offset-4 transition-colors duration-300">Maulana Muhammad</a>
    <div class="flex items-center gap-6">
      <div class="flex flex-wrap justify-center gap-4 text-xs text-gray-600 dark:text-gray-400 font-mono transition-colors duration-300">
        <a href="#about" class="hover:text-black dark:hover:text-white transition-none">/about</a>
        <a href="#experience" class="hover:text-black dark:hover:text-white transition-none">/experience</a>
        <a href="#projects" class="hover:text-black dark:hover:text-white transition-none">/work</a>
        <a href="#skills" class="hover:text-black dark:hover:text-white transition-none">/skills</a>
      </div>
      <button onclick={toggleTheme} aria-label="Toggle Theme" class="relative w-5 h-5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
        <div class="absolute inset-0 flex items-center justify-center transition-all duration-500 {isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}">
          <Sun size={16} />
        </div>
        <div class="absolute inset-0 flex items-center justify-center transition-all duration-500 {isDark ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}">
          <Moon size={16} />
        </div>
      </button>
    </div>
  </div>
</nav>
