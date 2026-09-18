<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let animationFrameId: number;

  interface PixelStar {
    x: number;
    y: number;
    size: number;
    speed: number;
    twinkleSpeed: number;
    phase: number;
    colorType: 'white' | 'cyan' | 'amber';
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Integer virtual resolution scale
    const pixelScale = 2;
    let width = 0;
    let height = 0;

    const stars: PixelStar[] = [];
    const starCount = 80;

    const resize = () => {
      width = Math.floor(window.innerWidth / pixelScale);
      height = Math.floor(window.innerHeight / pixelScale);
      canvas.width = width;
      canvas.height = height;

      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          size: Math.random() > 0.85 ? 2 : 1,
          speed: 0.1 + Math.random() * 0.25,
          twinkleSpeed: 0.02 + Math.random() * 0.04,
          phase: Math.random() * Math.PI * 2,
          colorType: Math.random() > 0.8 ? 'cyan' : (Math.random() > 0.85 ? 'amber' : 'white')
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    let frame = 0;
    const draw = () => {
      frame++;
      const isDark = document.documentElement.classList.contains('dark');

      // Clear with slight stepped background
      ctx.clearRect(0, 0, width, height);

      // Render pixel stars on integer coordinates
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.floor(Math.random() * width);
        }

        // Stepped twinkle calculation (4 discrete light levels, strictly avoiding muddy alpha)
        const rawBrightness = Math.sin(frame * star.twinkleSpeed + star.phase);
        let brightnessLevel = 1;
        if (rawBrightness > 0.5) brightnessLevel = 3;
        else if (rawBrightness > 0) brightnessLevel = 2;
        else if (rawBrightness > -0.5) brightnessLevel = 1;
        else brightnessLevel = 0;

        if (brightnessLevel === 0) continue;

        if (isDark) {
          if (star.colorType === 'cyan') {
            ctx.fillStyle = brightnessLevel === 3 ? '#a5f3fc' : (brightnessLevel === 2 ? '#38bdf8' : '#0284c7');
          } else if (star.colorType === 'amber') {
            ctx.fillStyle = brightnessLevel === 3 ? '#fde68a' : (brightnessLevel === 2 ? '#f59e0b' : '#b45309');
          } else {
            ctx.fillStyle = brightnessLevel === 3 ? '#ffffff' : (brightnessLevel === 2 ? '#cbd5e1' : '#64748b');
          }
        } else {
          // Retro Handheld LCD / Parchment dots
          ctx.fillStyle = brightnessLevel === 3 ? '#334155' : (brightnessLevel === 2 ? '#64748b' : '#94a3b8');
        }

        // Draw crisp integer square
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 -z-20 w-full h-full pointer-events-none pixelated bg-[#e5e3d7] dark:bg-[#0b0d14] transition-colors duration-300"
  style="image-rendering: pixelated;"
></canvas>
