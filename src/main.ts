import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import Http from './serve/Http';
import Hybird from './utils/Hybird';
import Bus from './utils/Bus';
import Store from './utils/Store';
// Http.init();

Vue.config.productionTip = false;

// window.console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV, Http);

(window as any).showRank = false;
(window as any).showRankPerson = false;

(window as any).homeData = null;
(window as any).youngData = null;
(window as any).roomData = null;


// 由前端控制app返回功能
Hybird.interceptBack(1);

Hybird.setTitle('年度盛典')

let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

const goBack = 'goBack';
(window as any)[goBack] = () => {
  
  if (vm.$route.path == '/'){            // 首页，直接关闭
    Hybird.finish();
  } else if(vm.$route.path == '/about') { // 关于页面，导航到首页
    vm.$router.replace('/')
  } else {                               // 个人与房间页
    if (Store.RankInfo.show){    // 房间排行榜打开情况下
      Store.hideRank();
      return;
    } else if (Store.RoomInfo.show && vm.$route.path == '/room'){
      Store.hideRoomInfo();
      vm.$router.replace('/')
    } else {
      vm.$router.replace('/')
    }
  }
};


