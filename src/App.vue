<template>
  <div id="app">
    <Audio></Audio>
    <Toast></Toast>
    <Loading></Loading>
    <RoomInfo></RoomInfo>
    <Rank></Rank>
    <transition name="fade">
      <router-view/>
    </transition>
    <div id="nav">

      <div class="nav">

        <router-link tag="span" to="/">
        <div class="tab">
          <div class="tab-ctx">年度盛典</div>
        </div>
      </router-link>

      <router-link tag="span" to="/young">
        <div class="tab">
          <div class="tab-ctx">傑出青年</div>
        </div>
      </router-link>

      <router-link tag="span" to="/room">
        <div class="tab">
          <div class="tab-ctx">火爆房間</div>
        </div>
      </router-link>

      <router-link tag="span" to="/about">
        <div class="tab">
          <div class="tab-ctx">頒獎典禮</div>
        </div>
      </router-link>
      </div>
    </div>
    <Error></Error>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Audio from './components/Audio.vue';
import Toast from './components/Toast.vue';
import RoomInfo from './components/RoomInfo.vue';
import Rank from './components/Rank.vue';
import Loading from './components/Loading.vue';
import Error from './components/Error.vue';
@Component({
  components: {
    Audio,
    Toast,
    Loading,
    RoomInfo,
    Rank,
    Error
  },
})
export default class Young extends Vue {



}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
  transform: translate3d(0, -0.5rem, 0)
}



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  height: 100%;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  background: #8b27c4;
  // position: relative;
  // z-index: 1;
  overflow: hidden;
  // overflow-y: auto;
}


// 字体
.pingfang-sc-medium{
    font-family: "PingFang_SC_Medium","Arial";
}
.pingfang-sc-heavy{
    font-family: "PingFang_SC_Heavy","Arial";
}
.pingfang-sc-bold{
    font-family: "PingFang_SC_Bold","Arial";
}
.pingfang-sc-regular{
    font-family: "PingFang_SC_Regular","Arial";
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-image: url('./assets/young_bg5.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#nav {
  // padding: 30px;
  width: 100%;
  min-height: 0.9rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
  font-size: 0.28rem;
  background-image: url('./assets/navbg.png');
  background-repeat: repeat-x;
  background-size: 100% 100%;
  .nav {
    height: 0.9rem;
    width: 100%;
    display: -webkit-box;
    -webkit-box-align: center;
    // -webkit-box-orient: horizontal;
    -webkit-box-pack: justify;
    span {
      // float: left;
      width: 25%;
      height: 100%;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      line-height: 0.9rem;
      position: relative;
      display: block;
      &.router-link-exact-active {
        color: #42b983;
        .tab {
        height: 100%;
        width: 100%;
        display: box;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        .tab-ctx {
          width: 1.79rem;
          height: 0.63rem;
          line-height: 0.63rem;
          background-image: url('./assets/navtab.png');
          background-size: cover;
          color: #fff;
          font-size: 0.26rem;
          font-weight: bold;
        }
      }
      }
      .tab {
        height: 100%;
        width: 100%;
        // display: box;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        .tab-ctx {
          width: 1.79rem;
          height: 0.63rem;
          line-height: 0.63rem;
          color: #948ac8;
          font-size: 0.26rem;
        }
      }
    }
  }
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){
  .nav{
    margin-bottom: 0.34rem
  }
}
  
        

</style>
