<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let animationFrameId: number;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      if (!ctx) return;
      time += 0.0015;
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.lineWidth = 1;
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      // White lines for dark theme, Black lines for light theme (balanced opacity)
      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.20)' : 'rgba(0, 0, 0, 0.18)';
      
      const gap = 50; 
      const numLines = Math.ceil(window.innerHeight / gap) + 4;
      
      for(let i = -2; i < numLines; i++) {
        ctx.beginPath();
        for(let x = -50; x <= window.innerWidth + 100; x += 30) {
          const wave1 = Math.sin(x * 0.0015 + time) * 50;
          const wave2 = Math.cos(x * 0.002 - time * 0.4 + i * 0.05) * 60;
          const wave3 = Math.sin(x * 0.004 + time * 0.8) * 15;
          
          const perspectiveOffset = Math.sin(x / window.innerWidth * Math.PI) * 30;
          
          const y = (i * gap) + wave1 + wave2 + wave3 + perspectiveOffset;
          
          if (x === -50) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
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

<canvas bind:this={canvas} class="fixed inset-0 -z-20 w-full h-full pointer-events-none" style="mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 80%); -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 80%);"></canvas>
