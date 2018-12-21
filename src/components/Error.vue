<template>
    <div class="error" style="padding: 0;" @click="refresh" v-show="data.show">
        <div class="error-bg">
            <img class="error-logo" src="../assets/error.png" alt="">
            <div class="error-text pingfang-sc-regular">点击重新加载页面</div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Store from '../utils/Store';
@Component({
  components: {
  },
})
export default class Error extends Vue {

    private name: string = "Error";

    private data: any = Store.errorInfo;

    private mounted(): void {
        // 
    }

    private refresh(): void { // 触发父元素的refresh方法
        // this.$emit('refresh');
        Store.hideError()
    }

}
</script>

<style scoped lang="scss">
    .error {
  width: 100%;
  /*loading 总大小*/
  height: 100%;
  /*loading 总大小*/
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.error-bg{
    width: 100%;
    height: 100%;
    // background:url("../assets/loading.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // padding-top: 4.8rem;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#261562), color-stop(100%,#0e082a));
    background: -webkit-linear-gradient(top, #261562 0%,#0e082a 100%);
    background: -ms-linear-gradient(top, #261562 0%,#0e082a 100%);
    background: linear-gradient(to bottom, #261562 0%,#0e082a 100%);
}
.error-logo{
    width: 0.74rem;
    height: 0.76rem;
    margin: 0 auto;
    margin-bottom: 0.28rem;
}
.error-text{
    font-size: 0.3rem;
    text-align: center;
    color: #7e6cc7;
}

</style>