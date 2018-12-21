<template>
    <div class="loader" v-show="isShow" id="domLoading">
        <div class="loader-bg">
            <img class="loading-logo" src="../assets/loading_logo.png" alt="">
            <div class="loading-text pingfang-sc-regular">年度盛典即將呈現...</div>
        </div>
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
.loader-bg{
    width: 100%;
    height: 100%;
    background:url("../assets/loading.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* padding-top: 3.46rem; */
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
}
.loading-logo{
    width: 1.87rem;
    height: 2.16rem;
    margin: 0 auto;
    margin-bottom: 0.28rem;
}
.loading-text{
    font-size: 0.3rem;
    text-align: center;
    color: #7e6cc7;
}

</style>