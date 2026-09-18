<script lang="ts">
  import { playBlip, playCoin, playSelect } from "$lib/utils/sfx";
</script>

<footer id="contact" class="max-w-6xl mx-auto px-4 pt-8 pb-16">
  <div class="pixel-box p-4 md:p-8">
    
    <!-- Save Point Header -->
    <div class="flex items-center justify-between border-b-2 border-[#1f2227] dark:border-[#2f374e] pb-3 mb-6 font-pixel-sub text-xs">
      <div class="flex items-center gap-2">
        <span class="inline-block w-3 h-3 bg-red-500 shadow-[1px_1px_0_0_#000] animate-ping"></span>
        <span class="tracking-widest uppercase text-slate-800 dark:text-slate-200">SAVE POINT REACHED // GUILD DISPATCH</span>
      </div>
      <span class="text-[10px] text-slate-500 font-mono">[TERMINAL: ONLINE]</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
      
      <div class="md:col-span-8">
        <div class="pixel-badge inline-block mb-3 bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 border-red-500 font-pixel-sub text-[10px]">
          STATUS: READY FOR NEW QUESTS
        </div>
        
        <h2 class="font-pixel-title text-base sm:text-xl text-slate-900 dark:text-white mb-4">
          Availability & Open Comms
        </h2>

        <p class="font-pixel-body text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-6">
          Open for freelance contracts, AI/ML advisory, or full-time roles in forward-thinking engineering teams. Let's engineer systems that solve real operational bottlenecks.
        </p>

        <!-- Communication Action Buttons -->
        <div class="flex flex-wrap gap-3 font-pixel-sub text-xs">
          <a 
            href="mailto:maulanamuhammad2000@gmail.com"
            class="pixel-btn pixel-btn-primary px-4 py-3 gap-2"
            onmouseenter={playBlip}
            onclick={playCoin}
          >
            <span>✉️ TRANSMIT EMAIL</span>
          </a>

          <a 
            href="https://wa.me/6287873026445" 
            target="_blank"
            rel="noopener noreferrer"
            class="pixel-btn px-4 py-3 gap-2"
            onmouseenter={playBlip}
            onclick={playCoin}
          >
            <span>💬 WHATSAPP COMM</span>
          </a>
        </div>
      </div>

      <!-- Retro Terminal Telemetry Box (Col 4) -->
      <div class="md:col-span-4">
        <div class="pixel-box-inset p-4 font-pixel-sub text-xs flex flex-col gap-2.5">
          <div class="text-slate-400 text-[10px] border-b border-slate-700 pb-1.5 font-mono">
            // TELEMETRY TRANSMITTER
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">OPERATOR:</span>
            <span class="text-slate-900 dark:text-white">MAULANA M.</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">RESPONSE TIME:</span>
            <span class="text-emerald-600 dark:text-emerald-400 font-mono">&lt; 24 HOURS</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">PING / LATENCY:</span>
            <span class="text-sky-600 dark:text-sky-400 font-mono">18 MS [STABLE]</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">CLEARANCE:</span>
            <span class="text-amber-600 dark:text-amber-400 font-mono">ALL GUILDS</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Retro Bottom System Bar -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t-2 border-[#1f2227] dark:border-[#2f374e] pt-4 font-pixel-sub text-[10px] text-slate-600 dark:text-slate-400">
      <div>
        © 2026 MAULANA MUHAMMAD // INSERT COIN TO REPLAY
      </div>

      <div class="flex items-center gap-4">
        <a 
          href="https://github.com/Maoelan" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hover:text-amber-500 transition-none"
          onmouseenter={playBlip}
          onclick={playSelect}
        >
          [⚔️ GITHUB]
        </a>
        <a 
          href="https://www.linkedin.com/in/maulanamuhammad2000" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hover:text-amber-500 transition-none"
          onmouseenter={playBlip}
          onclick={playSelect}
        >
          [🛡️ LINKEDIN]
        </a>
      </div>
    </div>

  </div>
</footer>
