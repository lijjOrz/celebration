<template>
<transition name="fadess">

    <div class="userdesc" v-show="datas.show" @click="close" @touchmove.stop.prevent>
      <div @click.stop>
        <p class="title">{{datas.title}}</p>
        <p class="msg1">&nbsp;&nbsp;&nbsp;&nbsp;{{datas.msg[0]}}</p>
        <p class="msg2 msg22" v-if="datas.msg.length > 1">&nbsp;&nbsp;&nbsp;&nbsp;{{datas.msg[1]}}</p>
        <div class="close" @click="close"></div>
      </div>
    </div>
    
</transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Bus from '../utils/Bus';
import Store from '../utils/Store';

@Component({
  components: {
  },
})
export default class RoomInfo extends Vue {

    private name: string = 'Roominfo';

    private datas: any = Store.RoomInfo;

    private mounted(): void {
    }

    private close(): void {
        Store.hideRoomInfo();
    }


}
</script>

<style scoped lang="scss">
.fadess-enter-active, .fadess-leave-active {
  transition: all 0.5s;
}
.fadess-enter, .fadess-leave-to  {
  opacity: 0;
}
  .userdesc {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
  }
  .userdesc > div {
    background: url('../assets/userdesc.png');
    background-size: cover;
    width: 5.68rem;
    height: 7.10rem;
    position: relative;
  }

  .title {
      color: #fff;
      font-size: 0.36rem;
      text-align: center;
      padding-top: 1.16rem;
      font-weight: 600;
      font-family: "PingFang_SC_Bold, Arial, sans-serif"
  }
  .msg1, .msg2 {
      color: #fff;
      font-size: 0.24rem;
      margin: 1.32rem 0.58rem 0 0.58rem;
      text-align: left;
      font-family: "PingFang_SC_Regular, Arial, sans-serif"
  }
  .msg22 {
      margin-top: 0.32rem;
  }
  .close {
      width: 0.5rem;
      height: 0.5rem;
      background-image: url('../assets/close.png');
      background-size: cover;
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
  }
</style>