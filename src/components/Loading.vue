<template>
  <div class="loader" v-show="isShow" id="domLoading">
    <div class="loader-inner line-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="bg-box"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '../utils/Bus';

@Component({
  components: {},
})
/**
 * loading
 * 调用方法：
 * Bus.$emit('loading', true); true/fasle(显示/不显示) 默认：true
 */
export default class Loading extends Vue {
  private name: string = 'Loading';

  private domLoading: any;
  private isShow: boolean = false;

  private mounted(): void {
    this.domLoading = document.getElementById('domLoading');
    Bus.$on('loading', (val?: boolean) => {
      if (val === undefined || val === null) {
        val = true;
      }
      this.isShow = val;
      if (this.isShow) {
        this.disableScroll();
      } else {
        this.allowScroll();
      }
    });
  }
  private beforeDestroy(): void {
    console.log('beforeDestroy');
    this.allowScroll();
  }

  /**
   * 禁止页面滚动
   */
  private disableScroll(): void {
    this.allowScroll();
    this.domLoading.addEventListener('touchmove', this.preventDefault);
  }
  /**
   * 允许页面滚动
   */
  private allowScroll(): void {
    this.domLoading.removeEventListener('touchmove', this.preventDefault);
  }
  private preventDefault(e: any): void {
    e.stopPropagation();
    if (e.cancelable) {
      // console.log('cancelable')
      // 判断默认行为是否已经被禁用
      if (!e.defaultPrevented) {
        e.preventDefault();
      }
    }
  }
}
</script>
<style scoped>
.loader {
  width: 100%;
  /*loading 总大小*/
  height: 100%;
  /*loading 总大小*/
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

@-moz-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
}

.loader .line-spin-fade-loader {
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -0.4rem;
  margin-left: -0.1rem;
  text-align: center;
}

.loader .bg-box {
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: -1.2rem;
  margin-left: -1rem;
  width: 2rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}

.line-spin-fade-loader > div:nth-child(1) {
  top: 0.4rem;
  left: 0;
  -webkit-animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(2) {
  top: 0.28rem;
  left: 0.28rem;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 0.4rem;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(4) {
  top: -0.28rem;
  left: 0.28rem;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(5) {
  top: -0.4rem;
  left: 0;
  -webkit-animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(6) {
  top: -0.28rem;
  left: -0.28rem;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -0.4rem;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
}

.line-spin-fade-loader > div:nth-child(8) {
  top: 0.28rem;
  left: -0.28rem;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
  animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
}

.line-spin-fade-loader > div {
  background-color: #ccc;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
  width: 0.1rem;
  height: 0.3rem;
}
</style>