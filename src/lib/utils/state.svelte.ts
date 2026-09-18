// Svelte 5 Global HUD state for retro controls
import { isSoundMuted, toggleSound } from './sfx';

class RetroSettings {
  crtEnabled = $state(false);
  sfxMuted = $state(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.crtEnabled = localStorage.getItem('retro_crt') === 'true';
      this.sfxMuted = isSoundMuted();
    }
  }

  toggleCrt() {
    this.crtEnabled = !this.crtEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('retro_crt', String(this.crtEnabled));
    }
  }

  toggleAudio() {
    this.sfxMuted = toggleSound();
  }
}

export const retroSettings = new RetroSettings();
