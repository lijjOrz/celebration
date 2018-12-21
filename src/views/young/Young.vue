<template>
<div class="young-box" v-cloak>
<!-- 冲榜阶段 -->
<transition name="fade">
    <div class="young" v-if="this.isCreateGiftList == 0 && !ranhshow" style="height: 100%;background: #191136;">
        <div class="young-body">

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


            <div class="header-info pingfang-sc-medium">榜單數據每日12點更新</div>
            <ul class="young-nav pingfang-sc-regular" style="position: relative; z-index: 6;">
                <li :class="{buttonactive: isActive == 0}" @click="choose(0)">奉獻王者</li>
                <li :class="{buttonactive: isActive == 1}" @click="choose(1)">實力偶像</li>
                <li :class="{buttonactive: isActive == 2}" @click="choose(2)">人氣王</li>
                <li :class="{buttonactive: isActive == 3}" @click="choose(3)">老司機</li>
                <li :class="{buttonactive: isActive == 4}" @click="choose(4)">最佳小甜心</li>
                <li :class="{buttonactive: isActive == 5}" @click="choose(5)">錦鯉</li>
                <li :class="{buttonactive: isActive == 6}" @click="choose(6)">寶箱之王</li>
                <li :class="{buttonactive: isActive == 7}" @click="choose(7)">收藏家</li>
                <li :class="{buttonactive: isActive == 8}" @click="choose(8)">黃金手</li>
                <li :class="{buttonactive: isActive == 9}" @click="choose(9)">任務之王</li>
                <li :class="{buttonactive: isActive == 10}" @click="choose(10)">團寵</li>
                <li :class="{buttonactive: isActive == 11}" @click="choose(11)">搭訕王</li>
            </ul>
            <div class="stage">
                <div class="title pingfang-sc-heavy">{{pageMsg.title}}</div>
                <div class="young-rule pingfang-sc-regular">{{pageMsg.msg}}</div>
                <!-- 查看排行榜 -->
                <div class="info-button" @click="ranking"></div>

                <div class="first head-box pingfang-sc-regular">
                    <img :src="pageMsg.first.portrait" alt="">
                    <div>
                        <div class="name">{{pageMsg.first.nickname}}</div>
                        <div class="name-id">{{pageMsg.first.userId}}</div>
                    </div>
                </div>

                <div class="second head-box pingfang-sc-regular">
                    <img :src="pageMsg.second.portrait" alt="">
                    <div>
                        <div class="name">{{pageMsg.second.nickname}}</div>
                        <div class="name-id">{{pageMsg.second.userId}}</div>
                    </div>
                </div>

                <div class="third head-box pingfang-sc-regular">
                    <img :src="pageMsg.third.portrait" alt="">
                    <div>
                        <div class="name">{{pageMsg.third.nickname}}</div>
                        <div class="name-id">{{pageMsg.third.userId}}</div>
                    </div>
                </div>
            </div>

            <div class="prize-box">
                <div class="prize-title pingfang-sc-bold">獎勵介紹</div>
                <div class="kuang-box">
                    <img class="kuang" src="../../assets/kuang.png">
                    <!-- 奖杯图片需要更换 -->
                    <img class="cup" :src="pageMsg.cupSrc">
                    <img class="goods" :src="pageMsg.src">
                    
                </div>
                <div class="prize-text pingfang-sc-regular">{{pageMsg.prizeText}}</div>
            </div>
        </div>
    </div>
</transition>
<!-- 结果出来后 -->
<transition name="fade">
    <div class="youngResult" v-if="this.isCreateGiftList == 1 && !ranhshow">
       <div class="young_bg1 header">
        
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


           <div class="left-box pingfang-sc-medium">
               <div class="head-id float-left">
                   <div class="head-id-title">2018年奉獻王者</div>
                   <div class="head-id-img">
                       <img :src="pageData.sendKd[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.sendKd[0].nickname}}</div>
                            <div class="name-id">{{pageData.sendKd[0].userId}}</div>
                        </div>
                   </div>
               </div>
               <div class="cup-info float-right">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/tou.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-right">“傑出青年”面板+28888K豆+水晶獎盃+Jarre AeroSkull Nano音箱</div>
               </div>
           </div>

           <div class="right-box">
               <div class="cup-info float-left">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/qing.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-left">“傑出青年”面板+28888K豆+水晶獎盃+恩雅X1C全單板32寸初學者尤克里里</div>
               </div>
               <div class="head-id float-right padding-top">
                   <div class="head-id-title margin-left">2018年實力偶像</div>
                   <div class="head-id-img">
                       <img :src="pageData.receivedKd[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.receivedKd[0].nickname}}</div>
                            <div class="name-id">{{pageData.receivedKd[0].userId}}</div>
                        </div>
                   </div>
               </div>
           </div>

            <div class="left-box pingfang-sc-medium">
               <div class="head-id float-left">
                   <div class="head-id-title">2018年度人氣王</div>
                   <div class="head-id-img">
                       <img :src="pageData.fans[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.fans[0].nickname}}</div>
                            <div class="name-id">{{pageData.fans[0].userId}}</div>
                        </div>
                   </div>
               </div>
               <div class="cup-info float-right">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/dog.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-right">“傑出青年”面板+28888K豆+水晶獎盃+Jarre AeroBull Nano音箱</div>
               </div>
           </div>           
           
       </div>


       <div class="young_bg2 padding-top-32">
           <div class="right-box">
               <div class="cup-info float-left">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/fei.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-left">“傑出青年”面板+28888K豆+水晶獎盃+Tello無人機航拍飛行器</div>
               </div>
               <div class="head-id float-right padding-top">
                   <div class="head-id-title margin-left">2018年度“老司機”</div>
                   <div class="head-id-img">
                       <img :src="pageData.giftMan[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.giftMan[0].nickname}}</div>
                            <div class="name-id">{{pageData.giftMan[0].userId}}</div>
                        </div>
                   </div>
               </div>
           </div>

            <div class="left-box pingfang-sc-medium">
               <div class="head-id float-left">
                   <div class="head-id-title">2018年度“最佳小甜心”</div>
                   <div class="head-id-img">
                       <img :src="pageData.giftWoman[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.giftWoman[0].nickname}}</div>
                            <div class="name-id">{{pageData.giftWoman[0].userId}}</div>
                        </div>
                   </div>
               </div>
               <div class="cup-info float-right">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/shu.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-right">“傑出青年”面板+28888K豆+水晶獎盃+聞綺金屬書魚子醬狀巧克力禮盒</div>
               </div>
           </div>

           <div class="right-box">
               <div class="cup-info float-left">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/hongshou.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-left">“傑出青年”面板+28888K豆+水晶獎盃+周大生黃金錦鯉轉運珠</div>
               </div>
               <div class="head-id float-right padding-top">
                   <div class="head-id-title margin-left">2018年度“錦鯉”</div>
                   <div class="head-id-img">
                       <img :src="pageData.lucky[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.lucky[0].nickname}}</div>
                            <div class="name-id">{{pageData.lucky[0].userId}}</div>
                        </div>
                   </div>
               </div>
           </div>

       </div>

       <div class="young_bg3 padding-top-24">
           <div class="left-box pingfang-sc-medium">
               <div class="head-id float-left">
                   <div class="head-id-title">2018年度“寶箱之王”</div>
                   <div class="head-id-img">
                       <img :src="pageData.treasure[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.treasure[0].nickname}}</div>
                            <div class="name-id">{{pageData.treasure[0].userId}}</div>
                        </div>
                   </div>
               </div>
               <div class="cup-info float-right">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/tu.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-right">“傑出青年”面板+28888K豆+水晶獎盃+聞綺尊貴魚子醬狀巧克力禮盒</div>
               </div>
           </div>

           <div class="right-box">
               <div class="cup-info float-left">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/duizi.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-left">“傑出青年”面板+28888K豆+水晶獎盃+2019黃金典藏版故宮日曆</div>
               </div>
               <div class="head-id float-right padding-top">
                   <div class="head-id-title margin-left">2018年度“收藏家”</div>
                   <div class="head-id-img">
                       <img :src="pageData.bag[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.bag[0].nickname}}</div>
                            <div class="name-id">{{pageData.bag[0].userId}}</div>
                        </div>
                   </div>
               </div>
           </div>
           <div class="left-box pingfang-sc-medium">
               <div class="head-id float-left">
                   <div class="head-id-title">2018 年度“黃金手”</div>
                   <div class="head-id-img">
                       <img :src="pageData.gold[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.gold[0].nickname}}</div>
                            <div class="name-id">{{pageData.gold[0].userId}}</div>
                        </div>
                   </div>
               </div>
               <div class="cup-info float-right">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/heishou.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-right">“傑出青年”面板+28888K豆+水晶獎盃+周大福足金貔貅玉髓手鏈</div>
               </div>
           </div>

       </div>

       <div class="young_bg4 foooter">
           <div class="right-box">
               <div class="cup-info float-left">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/ren.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-left">“傑出青年”面板+28888K豆+水晶獎盃+Blue sky studios星球大戰白兵頭盔音箱</div>
               </div>
               <div class="head-id float-right padding-top">
                   <div class="head-id-title margin-left">2018年度任務之王</div>
                   <div class="head-id-img">
                       <img :src="pageData.task[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.task[0].nickname}}</div>
                            <div class="name-id">{{pageData.task[0].userId}}</div>
                        </div>
                   </div>
               </div>
           </div>
           <div class="left-box pingfang-sc-medium">
               <div class="head-id float-left">
                   <div class="head-id-title">2018年度團寵</div>
                   <div class="head-id-img">
                       <img :src="pageData.receivedGift[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.receivedGift[0].nickname}}</div>
                            <div class="name-id">{{pageData.receivedGift[0].userId}}</div>
                        </div>
                   </div>
               </div>
               <div class="cup-info float-right">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/ren2.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-right">“傑出青年”面板+28888K豆+水晶獎盃+飛利浦AW6005A藍牙無線阿里ai智能音箱</div>
               </div>
           </div>

            <div class="right-box">
               <div class="cup-info float-left">
                   <div class="cup-info-title">獎勵介紹</div>
                   <div class="cup-info-img">
                       <img src="../../assets/bei.png" alt="">
                       <img src="../../assets/first.png" alt="">
                   </div>
                   <div class="cup-info-text pingfang-sc-regular padding-left">“傑出青年”面板+28888K豆+水晶獎盃+The Beast野獸派 馬克對杯</div>
               </div>
               <div class="head-id float-right padding-top">
                   <div class="head-id-title margin-left">2018年度”搭訕王”</div>
                   <div class="head-id-img">
                       <img :src="pageData.accost[0].portrait" alt="">
                        <div>
                            <div class="name">{{pageData.accost[0].nickname}}</div>
                            <div class="name-id">{{pageData.accost[0].userId}}</div>
                        </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
</transition>
    <!-- <Error v-show="isShow" @refresh="refresh"></Error> -->
</div>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Http from '../../serve/Http';
import Error from '../../components/Error.vue';
import Bus from '../../utils/Bus';
import Store from '../../utils/Store';


@Component({
    components: {
        Error,
    },
})
export default class Young extends Vue {

    private imageShow = 0; //控制显隐
    private count:number = 0; //计数
    private timer:any = null; //清除延迟function


    private ranhshow: boolean = Store.RankInfo.show

    // private isShow: boolean = false;//error页面开关
    private isCreateGiftList:any = null;//控制显示排行结果页面

    private isActive:number = 0;//记录当前title位置

    private rankInfo: any[] = [];//发送给Rank组件排行信息
    private showRankPerson: boolean = false;//Rank组件显示条件
    private rankname: any = null; //项目名字
    private ranktitle:string='2018年奉獻王者';

    private pageData:any = {//请求数据 
        sendKd: [],// 奉献之王
        receivedKd: [],// 實力偶像
        fans: [],// 人氣王
        giftMan: [],// 老司机
        giftWoman: [],// 最佳小甜心
        lucky: [],// 锦鲤
        treasure: [],// 宝箱之王
        bag: [],// 收藏家
        gold: [],// 黃金手
        task: [],// 任務之王
        receivedGift: [],// 团宠
        accost: [],// 搭訕王
    };

   
    // private pageMsg:any = this.array[0];
    private pageMsg:any = {//绑定页面数据
        title: '',
        msg: '',
        src: '',
        first: {},
        second: {},
        third: {},
        rankname: '',
    }
    private array:any[] = [];//基本数据
    
    private type:string = 'sendKd';
    private countType(): void{//计算当前type
        switch(this.isActive){
            case 0 :
                this.type = 'sendKd'
                break;
            case 1 :
                this.type = 'receivedKd'
                break;
            case 2 :
                this.type = 'fans'
                break;
            case 3 :
                this.type = 'giftMan'
                break;
            case 4 :
                this.type = 'giftWoman'
                break;
            case 5 :
                this.type = 'lucky'
                break;
            case 6 :
                this.type = 'treasure'
                break;
            case 7 :
                this.type = 'bag'
                break;
            case 8 :
                this.type = 'gold'
                break;
            case 9 :
                this.type = 'task'
                break;
            case 10 :
                this.type = 'receivedGift'
                break;
            case 11 :
                this.type = 'accost'
                break;
            default:
                this.type = 'sendKd'
                break;
        }
    };
    
    private choose(num:number){ //顶部title点击
        this.isActive = num;
        this.pageMsg = this.array[num];
    }; 

    private ranking(): void{//排行榜功能
        this.countType();
        if(this.pageData[this.type].length === 0) {
            Bus.$emit('showToast', '排行榜获取失败');
            return;
        }
        Store.showRnak('person', this.pageData[this.type], this.pageMsg.rankname, this.pageMsg.title);


    }

    private init(): Promise<any>{//请求数据
        // this.isShow = false;
        
        if((window as any).youngData){
            return new Promise((resolve)=>{
                resolve((window as any).youngData)
                this.isCreateGiftList = (window as any).youngData.isCreateGiftList;
                this.pageData = (window as any).youngData;
                // this.isCreateGiftList = 1
            })
        }else{
            
            return new Promise((resolve, reject)=>{

                Http.axiosGet(
                    '/annual/activity/top/users',
                    {},
                    (res) => {
                        //
                        resolve(res)
                        console.log('res----',res)
                        this.isCreateGiftList = res.data.data.isCreateGiftList;
                        this.pageData = res.data.data;
                        (window as any).youngData = res.data.data;
                        // this.isCreateGiftList = 1
                    },
                    (err) => {
                        reject(err)
                        console.log('err----',err)
                        // this.isShow = true;
                    },
                );
    
            })

        }
        
        

    };

    private refresh(): void {
        this.init().then((res)=>{
             this.array = [
                {title: '2018年奉獻王者',msg: '給其他小夥伴送禮總額最多', cupSrc: require('../../assets/first.png') ,src: require('../../assets/tou.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+Jarre AeroSkull Nano音箱', first: this.pageData.sendKd[0], second: this.pageData.sendKd[1], third: this.pageData.sendKd[2], rankname: "給其他小夥伴送禮"},
                {title: '2018年實力偶像',msg: '收到其他小夥伴送禮總額最多', cupSrc: require('../../assets/first.png') ,src: require('../../assets/qing.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+恩雅X1C全單板32寸初學者尤克里里', first: this.pageData.receivedKd[0], second: this.pageData.receivedKd[1], third: this.pageData.receivedKd[2],rankname: "收到其他夥伴送禮"},
                {title: '2018年度人氣王',msg: '收穫粉絲最多的小夥伴', cupSrc: require('../../assets/first.png') ,src: require('../../assets/dog.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+Jarre AeroBull Nano音箱', first: this.pageData.fans[0], second: this.pageData.fans[1], third: this.pageData.fans[2], rankname: "粉絲數量"},
                {title: '2018年度“老司機”',msg: '收到“老司雞”禮物个数最多的小夥伴', cupSrc: require('../../assets/first.png') ,src: require('../../assets/fei.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+Tello無人機航拍飛行器', first: this.pageData.giftMan[0], second: this.pageData.giftMan[1], third: this.pageData.giftMan[2], rankname: "收到“老司雞”個數"},
                {title: '2018年度“最佳小甜心”',msg: '收到“比心心”禮物个数最多的小夥伴', cupSrc: require('../../assets/first.png') ,src: require('../../assets/shu.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+聞綺金屬書魚子醬狀巧克力禮盒', first: this.pageData.giftWoman[0], second: this.pageData.giftWoman[1], third: this.pageData.giftWoman[2], rankname: "收到“比心心”個數"},
                {title: '2018年度“錦鯉”',msg: '爆520倍次數最多的小夥伴', cupSrc: require('../../assets/first.png') ,src: require('../../assets/hongshou.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+周大生黃金錦鯉轉運珠', first: this.pageData.lucky[0], second: this.pageData.lucky[1], third: this.pageData.lucky[2], rankname: "爆豆520倍總次數"},
                {title: '2018年度“寶箱之王”',msg: '觸發寶箱次數最多的小夥伴（不區分寶箱類型）', cupSrc: require('../../assets/first.png') ,src: require('../../assets/tu.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+聞綺尊貴魚子醬狀巧克力禮盒', first: this.pageData.treasure[0], second: this.pageData.treasure[1], third: this.pageData.treasure[2], rankname: "觸發寶箱次數"},
                {title: '2018年度“收藏家”',msg: '擁有2018年官方活動所涉及個性裝扮最多的小夥伴（不區分類型）', cupSrc: require('../../assets/first.png') ,src: require('../../assets/duizi.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+2019黃金典藏版故宮日曆', first: this.pageData.bag[0], second: this.pageData.bag[1], third: this.pageData.bag[2], rankname: "活動個性裝扮個數"},
                {title: '2018 年度“黃金手”',msg: '搶寶箱次數最多的小夥伴（不區分寶箱類型）', cupSrc: require('../../assets/first.png') ,src: require('../../assets/heishou.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+周大福足金貔貅玉髓手鏈', first: this.pageData.gold[0], second: this.pageData.gold[1], third: this.pageData.gold[2], rankname: "搶寶箱次數"},
                {title: '2018年度任務之王',msg: '完成任務數最多的小夥伴', cupSrc: require('../../assets/first.png') ,src: require('../../assets/ren.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+Blue sky studios星球大戰白兵頭盔音箱', first: this.pageData.task[0], second: this.pageData.task[1], third: this.pageData.task[2], rankname: "完成任務總數"},
                {title: '2018年度團寵',msg: '被最多小夥伴送禮的人（不包含私聊禮物）', cupSrc: require('../../assets/first.png') ,src: require('../../assets/ren2.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+飛利浦AW6005A藍牙無線阿里ai智能音箱', first: this.pageData.receivedGift[0], second: this.pageData.receivedGift[1], third: this.pageData.receivedGift[2], rankname: "贈禮人數"},
                {title: '2018年度”搭訕王”',msg: '私聊禮物送出個數最多的小夥伴', cupSrc: require('../../assets/first.png') ,src: require('../../assets/bei.png'), prizeText: '“傑出青年”面板+28888K豆+水晶獎盃+The Beast野獸派 馬克對杯', first: this.pageData.accost[0], second: this.pageData.accost[1], third: this.pageData.accost[2], rankname: "私聊送出禮物個數"},
            ];
            this.pageMsg = this.array[0];//初始化默认数

        }).catch((err)=>{
            console.log('111------',err)
            Store.showError(this.refresh)
        })
    }

    private mounted():void {
        this.refresh();
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

    };
    private beforeDestroy(): void {
        clearInterval(this.timer);        
        this.timer = null;
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

.light-box{
    width: 7.5rem;
    height: 3.35rem;
    position: absolute;
    left: 0;
    top: 0 ;
    z-index: 5;
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
.visibility{
    visibility: visible !important;
}



@import "./Young.css";
@import "./YoungResult.css";


</style>
