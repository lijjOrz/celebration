<template>
  <div class="audio" :class="{'music-player-stop': cssplay}" @click="checkoutPlayStatus">
      <audio id="audio" style="display:none;" preload="auto" loop="loop" autoplay="autoplay"></audio> 
      <!-- preload loop autoplay -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '../utils/Bus';

@Component({
  components: {
  },
})
export default class Audio extends Vue {

    private name: string = 'Audio';

    private cssplay: boolean = true;

    private audio: any = null;

    private src: any = null;

    private checkoutPlayStatus(): void {
        if(!this.audio){
            this.audio = document.getElementById('audio');
            this.audio.addEventListener('play', () => {
                this.cssplay = false;
            }, false);
            this.audio.addEventListener('pause', () => {
                this.cssplay = true;
            }, false);
        }
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
        // Bus.$emit('showToast', 'haha');
        
    }

    private created(): void {
        Bus.$on('initPlayer', this.initPlayer);
    }

    private mounted(): void {
        // this.initPlayer();
        
    }



    private initPlayer(url?: string): void {
        
        if(this.audio) return;

        this.audio = document.getElementById('audio');

        this.audio.src = url;
        this.audio.loop = true;
        this.audio.autoplay = true;
        this.audio.preload = "auto"
        // this.audio.muted = true;
        this.audio.setAttribute('webkit-playsinline', 'true');
        this.audio.setAttribute('x-webkit-airplay', 'true');
        // this.audio.play();
        // this.cssplay = false;

        this.audio.addEventListener('play', () => {
            this.cssplay = false;
        }, false);
        this.audio.addEventListener('pause', () => {
            this.cssplay = true;
        }, false);
    }
}
</script>

<style scoped lang="scss">
    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .audio {
        width: 0.73rem;
        height: 0.73rem;
        position: fixed;
        top: 0.2rem;
        right: 0.3rem;
        background-image: url('../assets/play.png');
        background-size: cover;
        animation: circle 10s linear infinite;
        z-index: 9;
    }
    .music-player-stop {
        background-image: url('../assets/stop.png');
        animation: unset;
    }
</style>