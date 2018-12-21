<template>
    <div class="home" v-cloak>
        
        <div v-show="this.countdown !== null">
            <div class="top-bg">
                <!-- 动画 -->
                    <div class="animation">
                        
                        
                        
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



                        <div class="home-logo" ref="homelogo"></div>
                        
                        

                        <div class="home-stage">
                            <img src="/stage_1.png" :class="{visibility: this.imageShow == 0}">
                        </div>
                        <div class="home-stage">
                            <img src="/stage_2.png" :class="{visibility: this.imageShow == 1}">
                        </div>
                        <div class="home-stage">
                            <img src="/stage_3.png" :class="{visibility: this.imageShow == 2}">
                        </div>



                        <div class="m-box">
                            <div class="m-box-left">
                                <div class="s-mbox" ref="smbox"></div>
                                <div class="b-mbox">
                                    <div class="eye-l" ref="eyel"></div>
                                    <div class="eye-r" ref="eyer"></div>
                                    <div class="mouth" ref="mouth"></div>
                                </div>
                            </div>

                            <div class="m-box-right">
                                <div class="s-mbox" ref="Rsmbox"></div>
                                <div class="b-mbox" style="left: 0;">
                                    <div class="eye-l" ref="Reyel"></div>
                                    <div class="eye-r" ref="Reyer"></div>
                                    <div class="mouth" ref="Rmouth"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                <!-- 冲榜时间 -->
                <div class="top-text pingfang-sc-medium" v-if="this.countdown !== 0">
                    <p>距離發榜日</p>
                    <div class="time-box">
                        <p>還有</p> 
                        <div class="time pingfang-sc-heavy">{{countdown}}</div> 
                        <p>天</p>
                    </div>
                </div>
                <!-- 过度时间 -->
                <div class="top-text pingfang-sc-bold among" v-if="this.countdown == 0 && this.isCreateGiftList == 0">
                    <p>今日十二點</p>
                    <p>大獎歸屬即將揭曉</p>
                </div>
                <!-- 结果时间 -->
                <div class="top-text pingfang-sc-bold end" v-if="this.countdown == 0 && this.isCreateGiftList == 1">
                    <p>2018年度之星</p>
                    <router-link tag="span" to="/young">
                        <div>「點擊查看」</div>
                    </router-link>
                </div>

            </div>

            <div class="footer-bg">
                <div class="margin-bottom-48">
                    <div class="pingfang-sc-bold">Party傑出青年</div>
                    <div class="pingfang-sc-regular">2018年度全民Party傑出個人大盤點，</div>
                    <div class="pingfang-sc-regular">駐足仰望，閃耀之星，哪一顆最亮？</div>
                </div>
                <div class="margin-bottom-48">
                    <div class="pingfang-sc-bold">Party火爆房間</div>
                    <div class="pingfang-sc-regular">2018年度全民Party最熱門的房間，哪一間承載着你</div>
                    <div class="pingfang-sc-regular">唱過的歌、遇見的人和最不凡的回憶？</div>
                </div>
                <div class="margin-bottom-48" style="margin-bottom: 0.4rem;">
                    <div class="pingfang-sc-bold">Party頒獎典禮</div>
                    <div class="pingfang-sc-regular">2019年1月1日全民Party傑出青年、火爆房間</div>
                    <div class="pingfang-sc-regular">頒獎禮，輪番抽獎大禮轟炸等着你！</div>
                </div>
                <div class="text_img margin-bottom-48" style="margin-bottom: 0.2rem;"></div>
                <div class="footer-msg pingfang-sc-regular">
                    <div><div class="width-30"></div> Tips:1. 凡獲得實物獎勵須於【吐槽與建議】留言：獲獎用戶ID、昵稱、獲得獎勵名稱、通訊地址、收件人姓名、聯繫電話，以便寄送.</div>
                    <div><div class="width-30"></div>2. 虛擬獎勵將在活動結束后5個工作日內發放，實物獎勵將在反饋后15個工作日內發放</div>
                    <div><div class="width-30"></div>3. 以上獎項數據均以2018年1月1日-12月31日（北京時間）統計為準</div>
                </div>
            </div>
        </div>
        <!-- <div class="footer-null"></div> -->

        
    </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Http from '../../serve/Http';
import axios from 'axios';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui.js';
import Bus from '../../utils/Bus';
import Store from '../../utils/Store';
// var width = document.documentElement.clientWidth;





@Component({
    components: {
    },
})




export default class Home extends Vue {

    
    private imageShow:number = 0 //控制图片显隐

    

    private count:number = 0; //计数
    private timer:any = null; //清除延迟function

    private countdown:any = null;   //倒计时天数
    private isCreateGiftList:any = null; //是否生成获奖名单
    private musicSrc:any = {
        gotime: '/gotime.mp3',
        sunburst: '/sunburst.mp3',
    }
    

    private musicFun(): void{
        if(this.countdown == 0){
            Bus.$emit('initPlayer', this.musicSrc.gotime)
        }else{
            Bus.$emit('initPlayer', this.musicSrc.sunburst)
        }
    }

    private init(): void {
        
        // Store.hideError()
        
        if((window as any).homeData){
            this.countdown = (window as any).homeData.countdown;
            this.isCreateGiftList = (window as any).homeData.isCreateGiftList;
            this.musicFun();
        }else{
            Http.axiosGet(
                '/annual/activity',
                {},
                (res) => {
                    //
                    console.log('res----',res)
                    this.countdown = res.data.data.countdown;
                    this.isCreateGiftList = res.data.data.isCreateGiftList;
                    (window as any).homeData = res.data.data;
                    this.musicFun();
                },
                (err) => {
                    //
                    console.log('err----',err)
                    Store.showError(this.init)
                }
            );
        }
        
        
    }


    private beforeMount(): void{
       
    }

    private mounted(): void {
        this.init();
        this.timer = setInterval( () =>{
            this.count++;
            this.count = this.count % 3;
            switch(this.count){
                case 0 :
                    this.imageShow = 0;
                break;
                case 1 :
                    this.imageShow = 1;
                break;
                case 2 :
                    this.imageShow = 2;
                break;
            }
        }, 300);

        //左边音响
        Velocity.animate(this.$refs.mouth as HTMLElement, {
            scale: 1.5,
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.mouth as HTMLElement, {
            scale: 0.8,
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.eyel as HTMLElement, {
            scale: 0.7,
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.eyer as HTMLElement, {
            scale: 0.7,
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.smbox as HTMLElement, {
            height: '0.91rem',
            scaleX: 1.3,
        }, {
            duration: 300,
            loop: true,
        });
        //右边音响
        Velocity.animate(this.$refs.Rmouth as HTMLElement, {
            scale: 1.5,
           
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.Rmouth as HTMLElement, {
            scale: 0.8,
           
        }, {
            duration: 300,
            loop: true,
        });
         
        Velocity.animate(this.$refs.Reyel as HTMLElement, {
            scale: 0.7,
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.Reyer as HTMLElement, {
            scale: 0.7,
        }, {
            duration: 300,
            loop: true,
        });
        Velocity.animate(this.$refs.Rsmbox as HTMLElement, {
            height: '0.91rem',
            scaleX: 1.3,
        }, {
            duration: 300,
            loop: true,
        });

    }

    private beforeDestroy(): void {
        clearInterval(this.timer);        
        this.timer = null;
    }

}



</script>


<style scoped lang="scss">
[v-cloak] {
    display: none  !important;
  }

.home {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
    overflow-x: hidden;
}
.home > div {
    padding-bottom: 0.8rem;
    // height: 100%;
    background:url('../../assets/young_bg5.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // overflow: auto;
}
.margin-bottom-48{
    margin-bottom: 0.54rem;
}
.margin-bottom-48 .pingfang-sc-bold{
    font-weight: bold;
}

// animetion动画部分
.light-box{
    width: 7.5rem;
    height: 3.35rem;
    position: absolute;
    left: 0;
    top: 0 ;
    z-index: 5;
    // opacity: 0.1;
}
.leftLight{
    width: 50%;
    height: 3.35rem;
    float: left;
    visibility: hidden;
}
.rightLight{
    width: 50%;
    height: 3.35rem;
    float: right;
    visibility: hidden;
}


.m-box{
    width: 100%;
    height: 2rem;
    padding-top: 0.4rem;
    position: absolute;
    left: 0;
    top: 3.4rem;

    display: -webkit-box;
    -webkit-box-pack:justify;

    /* W3C */
    display:box;
    box-pack:justify;
}
.m-box-left{
    width: 1.6rem;
    height: 1.6rem;
    position: relative;
    left: 0;
    top: 0;
}
.m-box-right{
    width: 1.6rem;
    height: 1.6rem;
    position: relative;
    right: 0;
    top: 0;
}


.m-box-right .s-mbox{
    left: 0.05rem;
    background:url("../../assets/animation/i_up2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.m-box-right .b-mbox{
    left: 0;
    background:url("../../assets/animation/i_box2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

// 小箱子
.s-mbox{
    width: 0.45rem;
    height: 0.7rem;
    background:url("../../assets/animation/i_up1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0.05rem;
    bottom: 0.88rem;
    margin-top: -0.7rem;
    z-index: 3;
}

// 大箱子
.b-mbox{
    width: 0.6rem;
    height: 0.9rem;
    background:url("../../assets/animation/i_box1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-top: 0.15rem;
}
.b-mbox .eye-l{
    width: 0.2rem;
    height: 0.2rem;
    background:url("../../assets/animation/eye.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-left: 0.05rem;
}
.b-mbox .eye-r{
    width: 0.2rem;
    height: 0.2rem;
    background:url("../../assets/animation/eye.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    float: right;
    margin-right: 0.07rem;
}
.b-mbox .mouth{
    width: 0.4rem;
    height: 0.4rem;
    background:url("../../assets/animation/mouth.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 0.26rem;
}

.animation .home-logo{
    width: 100%;
    height: 4.86rem;
    background:url("../../assets/home_logo.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: -0.3rem;
    left: 0;
    z-index: 2;
}

.fhjdskfhjd{
    background:url("/stage_0");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.visibility{
    visibility: visible !important;
}


.animation .home-stage {
    width: 4.4rem;
    height: 1.23rem;
    position: absolute;
    left: 50%;
    margin-left: -2.2rem;
    top: 4.1rem;
}
.home-stage img{
    width: 100%;
    height: 100%;
    visibility: hidden;
}




// 首页背景

.top-bg{
    width: 100%;
    height: 7.85rem;
    background:url(../../assets/home_01.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.footer-bg{
    width: 100%;
    // height: 9.5rem;
    // min-height: 9.5rem;
    padding: 0.66rem 0;
    background:url(../../assets/home_02.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0.24rem;
    color: #fff;
}
.footer-null{
    width: 100%;
    height: 0.9rem;
}

.animation{
    width: 100%;
    height: 6.04rem;
    position: relative;
    left: 0;
    top: 0;
}
.top-text{
    width: 4.8rem;
    height: 1.4rem;
    margin: 0 auto;
    font-size: 0.36rem;
    color: #fff;

    /* Safari, Chrome, and Opera */
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center;
    -webkit-box-orient: vertical;
    /* W3C */
    display:box;
    box-pack:center;
    box-align:center;
    box-orient: vertical;
}
.time-box{
    margin-top: 0.09rem;
    /* Safari, Chrome, and Opera */
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center;

    /* W3C */
    display:box;
    box-pack:center;
    box-align:center;
}
.time{
    min-width: 0.6rem;
    height: 0.6rem;
    margin: 0 0.36rem;
    line-height: 0.6rem;
    font-size: 0.6rem;
    color: #3020a8;
    background:url(../../assets/time.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.among{
    font-size: 0.3rem !important;
    font-weight: bold;
}
.end{
    font-weight: bold;
}
.end p{
    margin-bottom: 0.12rem;
}
.end div{
    width: 2.4rem;
    height: 0.5rem;
    background:url(../../assets/navtab.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0.26rem;
    font-weight: bold;
    /* Safari, Chrome, and Opera */
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center;

    /* W3C */
    display:box;
    box-pack:center;
    box-align:center;
}

.margin-bottom-48 > .pingfang-sc-bold{
    font-size: 0.36rem;
}
.margin-bottom-48 > .pingfang-sc-regular{
    font-size: 0.28rem;
}

.margin-bottom-48 div{
    margin-bottom: 0.1rem;
}
.text_img{ 
    width: 2.68rem;
    height: 0.88rem;
    margin: 0 auto 0.48rem auto;
    background:url(../../assets/home_text.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.footer-msg{
    width: 100%;
    font-size: 0.2rem;
    color: #a095b4;
    text-align: start;
    padding: 0 0.52rem;
}
.width-30{
    width: 0.3rem;
    height: 0.1rem;
    float: left;
}

</style>
