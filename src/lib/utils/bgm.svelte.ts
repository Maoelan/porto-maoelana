// Background Music (BGM) Manager for 8-Bit Soundtrack
class BgmManager {
  isPlaying = $state(false);
  private audio: HTMLAudioElement | null = null;

  init() {
    if (typeof window === 'undefined') return;
    if (!this.audio) {
      this.audio = new Audio('/8-Bit Music.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.35; // Balanced, non-intrusive retro volume
    }
  }

  toggle(): boolean {
    this.init();
    if (!this.audio) return false;

    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.audio.play().then(() => {
        this.isPlaying = true;
      }).catch((err) => {
        console.warn('Audio play prevented by browser policy:', err);
        this.isPlaying = false;
      });
    }
    return this.isPlaying;
  }
}

export const bgmManager = new BgmManager();
