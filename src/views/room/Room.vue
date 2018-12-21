<template>
  <div class="room" v-cloak>
    <transition name="fade">
    
    
    <div class="roompre" v-if="pageData.isCreateGiftList == 0 && !ranhshow.show"> 
      <!-- style="display: none;" -->
      <div class="room1">
        
        <div class="light-box">
            <img class="leftLight" src="/p_1.png" :class="{visibility:this.imageShow == 0}">
            <img class="rightLight" src="/p_2.png" :class="{visibility:this.imageShow == 0}">
        </div>
        <div class="light-box">
            <img class="leftLight" src="/b_1.png" :class="{visibility:this.imageShow == 1}">
            <img class="rightLight" src="/b_2.png" :class="{visibility:this.imageShow == 1}">
        </div>
        <div class="light-box">
            <img class="leftLight" src="/o_1.png" :class="{visibility:this.imageShow == 2}">
            <img class="rightLight" src="/o_2.png" :class="{visibility:this.imageShow == 2}">
        </div>

        <div class="updata">榜單數據每日12點更新</div>
        <p class="p1">2018年最佳活躍房間</p>
        <p class="p2">舉辦活動次數top3房間</p>
        <p class="p3">（活動向官方申請並有效舉辦）</p>
        <div class="top">
          <div>
            <img src="../../assets/homeicon_1.png" alt="">
          </div>
          <p class="white-space" style="margin-top: 0.1rem">{{pageData.activity[0]?pageData.activity[0].name:'--'}}</p>
          <p>房号：{{pageData.activity[0]?pageData.activity[0].roomCode:'--'}}</p>

          <div class="scanrank" style="width: 1.72rem;height: 0.52rem;" @click="rank('activity', 0)"></div>
        </div>
        <div class="middle">
          <div class="secend">
            <div>
              <img src="../../assets/homeicon_2.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.activity[1]?pageData.activity[1].name:'--'}}</p>
            <p>房号：{{pageData.activity[1]?pageData.activity[1].roomCode:'--'}}</p>

          </div>
          <div class="thirds">
            <div>
              <img src="../../assets/homeicon_3.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.activity[2]?pageData.activity[2].name:'--'}}</p>
            <p>房号：{{pageData.activity[2]?pageData.activity[2].roomCode:'--'}}</p>
          </div>
        </div>
        <div class="bottom-title">獎勵介紹

          <div class="usedesc" @click="note(0)"></div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
            <img src="../../assets/book.png" class="rewardbook" alt="">
          </div>
          <div class="right">
            <p>TOP1:【房主獲得麥克風+8萬K豆+房間置頂一次+答案之書】</p>
            <p>TOP2:【房主獲得麥克風+6萬K豆+答案之書】</p>
            <p>TOP3:【房主獲得麥克風+4萬K豆+答案之書】</p>
          </div>
        </div>
      </div>
      <div class="room2">
        <p class="p1">2018年度“天上人間”</p>
        <p class="p2">年度貢獻top3房間</p>
        <!-- <p class="p3">（活動向官方申請並有效舉辦）</p> -->
        <div class="top">
          <div>
            <img src="../../assets/homeicon_1.png" alt="">
          </div>
          <p class="white-space" style="margin-top: 0.1rem">{{pageData.sendKd[0]?pageData.sendKd[0].name:''}}</p>
          <p>房号：{{pageData.sendKd[0]?pageData.sendKd[0].roomCode:''}}</p>
          <div class="scanrank" style="width: 1.72rem;height: 0.52rem;" @click="rank('sendKd', 1)"></div>
        </div>
        <div class="middle">
          <div class="secend">
            <div>
              <img src="../../assets/homeicon_2.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.sendKd[1]?pageData.sendKd[1].name:''}}</p>
            <p>房号：{{pageData.sendKd[1]?pageData.sendKd[1].roomCode:''}}</p>

          </div>
          <div class="thirds">
            <div>
              <img src="../../assets/homeicon_3.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.sendKd[2]?pageData.sendKd[2].name:''}}</p>
            <p>房号：{{pageData.sendKd[2]?pageData.sendKd[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom-title">獎勵介紹
          <div class="usedesc" @click="note(1)"></div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
          </div>
          <div class="right">
            <p>TOP1:【霸王特權（黃金）1次+指定時間段所有消費返比30%】</p>
            <p>TOP2:【霸王特權（白銀）1次+指定時間段所有消費返比20%】</p>
            <p>TOP3:【霸王特權（青銅）1次+指定時間段所有消費返比10%】</p>
            <p>*消費返比返給送禮的人</p>
          </div>
        </div>

      </div>
      <div class="room2 room3">

        <p class="p1" style="padding-top: 0.6rem;">2018年度“大佬房”</p>
        <p class="p2">年度支持最佳top3的房間</p>
        <!-- <p class="p3">（活動向官方申請並有效舉辦）</p> -->
        <div class="top">
          <div>
            <img src="../../assets/homeicon_1.png" alt="">
          </div>
          <p class="white-space" style="margin-top: 0.1rem">{{pageData.consume[0]?pageData.consume[0].name:''}}</p>
          <p>房号：{{pageData.consume[0]?pageData.consume[0].roomCode:''}}</p>
          <div class="scanrank" style="width: 1.72rem;height: 0.52rem;" @click="rank('consume', 2)"></div>
        </div>
        <div class="middle">
          <div class="secend">
            <div>
              <img src="../../assets/homeicon_2.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.consume[1]?pageData.consume[1].name:''}}</p>
            <p>房号：{{pageData.consume[1]?pageData.consume[1].roomCode:''}}</p>

          </div>
          <div class="thirds">
            <div>
              <img src="../../assets/homeicon_3.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.consume[2]?pageData.consume[2].name:''}}</p>
            <p>房号：{{pageData.consume[2]?pageData.consume[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom-title">獎勵介紹
          <div class="usedesc" @click="note(2)"></div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
          </div>
          <div class="right">
            <p>TOP1:【大佬特權（黃金）1次+指定時間段充值加送30%一次】</p>
            <p>TOP2:【大佬特權（白銀）1次+指定時間段充值加送20%一次】</p>
            <p>TOP3:【大佬特權（青銅）1次+指定時間段充值加送10%一次】</p>
          </div>
        </div>
      </div>
      <div class="room2 room4">
        <p class="p1" style="padding-top: 0.8rem;">2018 年度“幸運520”房間</p>
        <p class="p2">爆豆520倍次數最多房間</p>
        <!-- <p class="p3">（活動向官方申請並有效舉辦）</p> -->
        <div class="top">
          <div>
            <img src="../../assets/homeicon_1.png" alt="">
          </div>
          <p class="white-space" style="margin-top: 0.1rem">{{pageData.lucky[0]?pageData.lucky[0].name:''}}</p>
          <p>房号：{{pageData.lucky[0]?pageData.lucky[0].roomCode:''}}</p>
          <div class="scanrank" style="width: 1.72rem;height: 0.52rem;" @click="rank('lucky', 3)"></div>
        </div>
        <div class="middle">
          <div class="secend">
            <div>
              <img src="../../assets/homeicon_2.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.lucky[1]?pageData.lucky[1].name:''}}</p>
            <p>房号：{{pageData.lucky[1]?pageData.lucky[1].roomCode:''}}</p>

          </div>
          <div class="thirds">
            <div>
              <img src="../../assets/homeicon_3.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.lucky[2]?pageData.lucky[2].name:''}}</p>
            <p>房号：{{pageData.lucky[2]?pageData.lucky[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom-title">獎勵介紹
          <div class="usedesc" @click="note(3)"></div>
        </div>
        <div class="bottom" style="height: 1.3rem;">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
          </div>
          <div class="right">
            <p>【大佬特權（黃金）1次】</p>
          </div>
        </div>
      </div>
      <div class="room2 room5">
        <p class="p1" style="padding-top: 0.65rem;">2018 年度“風水寶地”</p>
        <p class="p2" style="height: 0.3rem;line-height:0.3rem;">觸髮寶箱次數最多</p>
        <p class="p3">（不區分類型）</p>
        <div class="top">
          <div>
            <img src="../../assets/homeicon_1.png" alt="">
          </div>
          <p class="white-space" style="margin-top: 0.1rem">{{pageData.lucky[0]?pageData.treasure[0].name:''}}</p>
          <p>房号：{{pageData.lucky[0]?pageData.treasure[0].roomCode:''}}</p>
          <div class="scanrank" style="width: 1.72rem;height: 0.52rem;" @click="rank('treasure', 4)"></div>
        </div>
        <div class="middle">
          <div class="secend">
            <div>
              <img src="../../assets/homeicon_2.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.treasure[1]?pageData.treasure[1].name:''}}</p>
            <p>房号：{{pageData.treasure[1]?pageData.treasure[1].roomCode:''}}</p>

          </div>
          <div class="thirds">
            <div>
              <img src="../../assets/homeicon_3.png" alt="">
            </div>
            <p class="white-space" style="margin-top: 0.1rem">{{pageData.treasure[2]?pageData.treasure[2].name:''}}</p>
            <p>房号：{{pageData.treasure[2]?pageData.treasure[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom-title">獎勵介紹
          <div class="usedesc" @click="note(4)"></div>
        </div>
        <div class="bottom" style="height:1.3rem;">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
          </div>
          <div class="right">
            <p>【獲得指定投放金、銀、銅寶箱特權各一次】</p>
          </div>
        </div>
      </div>
      
    </div>
    </transition>

    <transition name="fade">
    <div class="roomnext" v-if="pageData.isCreateGiftList == 1 && !ranhshow.show">
      <div class="roomnext1 roomnext11">
          
        <div class="light-box">
            <img class="leftLight" src="/p_1.png" :class="{visibility:this.imageShow == 0}">
            <img class="rightLight" src="/p_2.png" :class="{visibility:this.imageShow == 0}">
        </div>
        <div class="light-box">
            <img class="leftLight" src="/b_1.png" :class="{visibility:this.imageShow == 1}">
            <img class="rightLight" src="/b_2.png" :class="{visibility:this.imageShow == 1}">
        </div>
        <div class="light-box">
            <img class="leftLight" src="/o_1.png" :class="{visibility:this.imageShow == 2}">
            <img class="rightLight" src="/o_2.png" :class="{visibility:this.imageShow == 2}">
        </div>

        <p class="title">2018年最佳活躍房間</p>
        <div class="roomrank">
          <div>
            <p style="width: 2.4rem;text-align: left">{{pageData.activity[0]?pageData.activity[0].name:''}}</p>
            <p style="width: 1.4rem;">{{pageData.activity[0]?pageData.activity[0].roomCode:''}}</p>
          </div>
          <div>
            <p style="width: 2.4rem;text-align: left">{{pageData.activity[1]?pageData.activity[1].name:''}}</p>
            <p style="width: 1.4rem;">{{pageData.activity[1]?pageData.activity[1].roomCode:''}}</p>
          </div>
          <div>
            <p style="width: 2.4rem;text-align: left">{{pageData.activity[2]?pageData.activity[2].name:''}}</p>
            <p style="width: 1.4rem;">{{pageData.activity[2]?pageData.activity[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
            <img src="../../assets/book.png" class="rewardbook" alt="">
          </div>
          <div class="right">
            <p>TOP1:【房主獲得麥克風+8萬K豆+房間置頂一次+答案之書】</p>
            <p>TOP2:【房主獲得麥克風+6萬K豆+答案之書】</p>
            <p>TOP3:【房主獲得麥克風+4萬K豆+答案之書】</p>
          </div>
        </div>
      </div>
      <div class="roomnext2">
        <p class="title">2018年度“天上人間”</p>
        <div class="roomrank1">
          <p>{{pageData.sendKd[0]?pageData.sendKd[0].name:''}}</p>
          <p>{{pageData.sendKd[0]?pageData.sendKd[0].roomCode:''}}</p>
        </div>
        <div class="roomrank23">
          <div>
            <p>{{pageData.sendKd[1]?pageData.sendKd[1].name:''}}</p>
            <p>{{pageData.sendKd[1]?pageData.sendKd[1].roomCode:''}}</p>
          </div>
          <div>
            <p>{{pageData.sendKd[2]?pageData.sendKd[2].name:''}}</p>
            <p>{{pageData.sendKd[2]?pageData.sendKd[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="">
          </div>
          <div class="right">
            <p>TOP1:【霸王特權（黃金）1次+指定時間段所有消費返比30%】</p>
            <p>TOP2:【霸王特權（白銀）1次+指定時間段所有消費返比20%】</p>
            <p>TOP3:【霸王特權（青銅）1次+指定時間段所有消費返比10%】</p> 
            <p>*消費返比返給送禮的人</p>
          </div>
        </div>
      </div>
      <div class="roomnext3 roomnext1" >
        <p class="title" style="height: 1.52rem;padding-top: 0.9rem;">2018年度“大佬房”</p>
        <div class="roomrank" style="margin-top: 0.3rem;">
          <div>
            <p style="width: 2.4rem;text-align: left">{{pageData.consume[0]?pageData.consume[0].name:''}}</p>
            <p style="width: 1.4rem;">{{pageData.consume[0]?pageData.consume[0].roomCode:''}}</p>
          </div>
          <div>
            <p style="width: 2.4rem;text-align: left">{{pageData.consume[1]?pageData.consume[1].name:''}}</p>
            <p style="width: 1.4rem;">{{pageData.consume[1]?pageData.consume[1].roomCode:''}}</p>
          </div>
          <div>
            <p style="width: 2.4rem;text-align: left">{{pageData.consume[2]?pageData.consume[2].name:''}}</p>
            <p style="width: 1.4rem;">{{pageData.consume[2]?pageData.consume[2].roomCode:''}}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/cup.png" class="rewardcup" alt="" style="width:1.28rem;height: 1.16rem;">
          </div>
          <div class="right" style="width:3.76rem;">
            <p>TOP1:【大佬特權（黃金）1次+指定時間段充值加送30%一次】</p>
            <p>TOP2:【大佬特權（白銀）1次+指定時間段充值加送20%一次】</p>
            <p>TOP3:【大佬特權（青銅）1次+指定時間段充值加送10%一次】</p>
          </div>
        </div>
      </div>
      <div class="roomnext4">
        <div class="warpper">
          <div class="left">
            <p class="title">2018 年度<br />“幸運520”房間</p>
            <div class="roominfo">
              <p class="white-space">{{pageData.lucky[0]?pageData.lucky[0].name:''}}</p>
              <p>{{pageData.lucky[0]?pageData.lucky[0].roomCode:''}}</p>
              <img src="../../assets/cup.png" alt="" style="width:1.28rem;height: 1.16rem;margin:0.36rem auto">
            </div>
            <div class="rewardinfo">【大佬特權（黃金）1次】</div>
          </div>
          <div class="right">
            <p class="title">2018 年度“風水寶地”</p>
            <div class="roominfo">
              <p class="white-space">{{pageData.lucky[0]?pageData.treasure[0].name:''}}</p>
              <p>{{pageData.lucky[0]?pageData.treasure[0].roomCode:''}}</p>
              <img src="../../assets/cup.png" alt="" style="width:1.28rem;height: 1.16rem;margin:0.36rem auto">
            </div>
            <div class="rewardinfo">【獲得指定投放金、銀、<br />銅寶箱特權各一次】</div>
          </div>
        </div>
        

      </div>

    </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Rank from '../../components/Rank.vue';
import Error from '../../components/Error.vue';
import Http from '../../serve/Http';
import Bus from '../../utils/Bus';
import Store from '../../utils/Store';
@Component({
  components: {
    Rank,
    Error,
  },
})
export default class Rome extends Vue {

  private ranhshow: boolean = Store.RankInfo

    private imageShow = 0 //控制显隐
    private count:number = 0; //计数
    private timer:any = null; //清除延迟function

  private roomsDesc: any[] = [
    {title: '2018年最佳活躍房間', msgs: ['*Tips：1.獲得K豆可由房主進行分配，分配須於【吐槽與建議】留言：被分配用戶ID、昵稱、分配數額', '2.獲獎麥克風須於【吐槽與建議】留言：獲獎用戶ID、昵稱、通訊地址、聯繫電話，以便寄送'], rankname: '舉辦活動次數'},
    {title: '2018年度“天上人間”', msgs: ['*Tips：1.霸王特權（黃金/白銀/青銅）：向指定房間在指定時間段（2小時以內）所有在線用戶贈送288/188/88K豆', '2.特權須在使用前3個工作日於【吐槽與建議】留言：獲獎用戶ID及昵稱、指定時間段（2小時內）、指定房間號、特權類型，留言截止日期為2019年1月31日，逾期作廢'], rankname: '消費k豆數量'},
    {title: '2018年度“大佬房”', msgs: ['*Tips：1.大佬特權（黃金/白銀/青銅）：向指定房間在指定時間點所有在線用戶贈送288/188/88K豆', '2.特權須在使用前3個工作日於【吐槽與建議】留言：獲獎用戶ID及昵稱、指定時間點、指定房間號、特權類型，留言截止日期為2019年1月31日，逾期作廢'], rankname: ''},
    {title: '2018 年度“幸運520”房間', msgs: ['*Tips：1.大佬特權（黃金）：向指定房間在指定時間點所有在線用戶贈送288K豆', '2.特權須在使用前3個工作日於【吐槽與建議】留言：獲獎用戶ID及昵稱、指定時間點、指定房間號、特權類型，留言截止日期為2019年1月31日，逾期作廢'], rankname: '爆出520倍總次數'},
    {title: '2018 年度“風水寶地”', msgs: ['*Tips：特權須在使用前3個工作日於【吐槽與建議】留言：獲獎用戶ID及昵稱、指定時間點、指定房間號、特權類型，留言截止日期為2019年1月31日，逾期作廢'], rankname: '觸發寶箱總次數'},
  ];

  private pageData: any = {
    isCreateGiftList: null,
    activity: [],
    consume: [],
    lucky: [],
    sendKd: [],
    treasure: []
  };

  private mounted(): void {
    // console.error(this.ranhshow)
    this.init();
     this.timer = setInterval( () =>{
        this.count++;
        this.count = this.count % 3;
        switch(this.count){
            case 0 :
              this.imageShow =0
            break;
            case 1 :
              this.imageShow = 1
            break;
            case 2 :
              this.imageShow = 2
            break;
        }
    }, 300);


  }
  private beforeDestroy(): void {
        clearInterval(this.timer);        
        this.timer = null;
    }

  private init(): void {
    // Store.hideError();

    if((window as any).roomData){
        this.pageData = (window as any).roomData
        // this.pageData.isCreateGiftList = 1;
    }else{
        Http.axiosGet(
            '/annual/activity/top/rooms',
            {},
            (res) => {
                //
                console.log('res');
                this.pageData = res.data.data;
                (window as any).roomData = res.data.data;
                // this.pageData.isCreateGiftList = 1;
            },
            (err) => {
                //
                console.log('error---', err);
                Store.showError(this.init)
            },
        );
    }

    
  }

  private note(num: number) {

    Store.showRoomInfo(this.roomsDesc[num].title, this.roomsDesc[num].msgs);
  }

  private rank(type: string, num: number){
    if(this.pageData[type].length === 0) {
      Bus.$emit('showToast', '排行榜获取失败');
      return;
    }

    Store.showRnak('room', this.pageData[type], this.roomsDesc[num].rankname, this.roomsDesc[num].title);
  }

}
</script>


<style scoped lang="scss">
  [v-cloak] {
    display: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }
  .room {
    color: #fff;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-Y: auto;
    overflow-X: hidden;
    background:url('../../assets/young_bg5.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .room > div {
    min-height: 100%;
    padding-bottom: 0.8rem;
  }
  .roompre img {
    width: 100%;
    vertical-align: middle;
  }

  .scanrank {
    background-image: url('../../assets/button.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 0.26rem;
    bottom: 0.14rem;
  }

  .usedesc {
    width: 1.2rem;
    height: 0.56rem;
    background-image: url('../../assets/usedesc.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 0.26rem;
    top: 0;
  }

  .white-space {
    width: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 auto;
}
.light-box{
    width: 7.5rem;
    height: 3.35rem;
    position: absolute;
    left: 0;
    top: 0 ;
    z-index: 5;
}
.leftLight{
    width: 50% !important;
    height: 3.35rem;
    float: left;
    visibility: hidden;
}
.rightLight{
    width: 50% !important;
    height: 3.35rem;
    float: right;
    visibility: hidden;
}
.visibility{
  visibility: visible;
}

  @import "./roompre.scss";
  @import "./roomnext.scss";
  
</style>
