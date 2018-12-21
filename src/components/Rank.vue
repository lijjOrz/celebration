<template>
<transition name="fadess">
    <div class="ranks" style="padding-bottom: 0;" v-if="data.show">
        <div class="warpper">
            <p class="title">{{data.ranktitle?data.ranktitle:''}}</p>
            <!-- 房间 -->
            <div v-if="data.type=='room'">
                <div class="header1" >
                    <div class="rank" :style="{'width': data.arr[0].number == -1?'2.22rem':'1.22rem'}">排名</div>
                    <div class="roominfo" :style="{'width': data.arr[0].number == -1?'4rem':'3rem'}">房间信息</div>
                    <div class="count" v-if="data.arr[0].number != -1">{{data.rankname}}</div>
                </div>
                <div class="content1">
                    <div class="item" v-for="(item, index) in data.arr" v-bind:key="index" :style="{'height': index>2?'1.44rem':'', 'background': (index>2 && index%2==0) || (index<=2)?'#1d1449':'#11093c'}">
                        <div class="rank" :style="{'width': data.arr[0].number == -1?'2.22rem':'1.22rem'}">
                            {{index > 2 ? (index +1) : ''}}
                            <img v-if="index==0" src="../assets/rank1.png" />
                            <img v-if="index==1" src="../assets/rank2.png" />
                            <img v-if="index==2" src="../assets/rank3.png" />
                        </div>
                        <div class="roominfo" :style="{'width': data.arr[0].number == -1?'4.5rem':'3rem'}">
                            <div class="roomname">{{item.name}}</div>
                            <div class="roomnum">房号：{{item.roomCode}}</div>
                        </div>
                        <div class="count" v-if="data.arr[0].number != -1">{{item.number}}</div>
                    </div>
                </div>
            </div>
            
            <!-- 个人 -->
            <div v-if="data.type=='person'">
                <div class="header2">
                    <div class="rank">排名</div>
                    <div class="roominfo">个人信息</div>
                    <div class="count">{{data.rankname}}</div>
                </div>
                <div class="content2">
                    <div class="item" v-for="(item, index) in data.arr" v-bind:key="index" :style="{'height': index>2?'1.44rem':'', 'background': (index>2 && index%2==0) || (index<=2)?'#1d1449':'#11093c'}">
                        <div class="rank">
                            <div class="rank1" v-if="index == 0">
                                <img v-if="index==0" class="avatarimg" src="../assets/rank1.png" alt="">
                                <div class="avatar">
                                    <img :src="item.portrait" alt="">
                                </div>
                            </div>
                            <div class="rank1" id="rankbg2" v-if="index == 1">
                                <img v-if="index==1" class="avatarimg" src="../assets/rank2.png" alt="">
                                <div class="avatar">
                                    <img :src="item.portrait" alt="">
                                </div>
                            </div>
                            <div class="rank1" id="rankbg3" v-if="index == 2">
                                <img v-if="index==2" class="avatarimg" src="../assets/rank3.png" alt="">
                                <div class="avatar">
                                    <img :src="item.portrait" alt="">
                                </div>
                            </div>
                            <div v-if="index > 2" class="bottomrank">
                                <p style="width: 0.8rem;">{{index > 2 ? (index+1) : ''}}</p>
                                <div class="bottomavatar">
                                    <img :src="item.portrait" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="roominfo" :style="{'padding-left': index > 2 ? '0.2rem': ''}">
                            <div class="roomname">{{item.nickname}}</div>
                            <div class="roomnum" >ID：{{item.userId}}</div>
                        </div>
                        <div class="count">{{item.number}}</div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
</transition>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Bus from '../utils/Bus';

import Store from '../utils/Store';

@Component({
  components: {
  },
})
export default class Youngrank extends Vue {
    
    // 排行榜类型
    // @Prop() private type!: string;

    // // 排行榜数据
    // @Prop() private arr!: any[];

    // @Prop() private rankname!: string;

    // @Prop() private ranktitle!: string;

    private data: any = Store.RankInfo

    private mounted(): void {
        Bus.$emit("showNav",false);
    }

    private quit(): void {
        // (window as any).goBack();
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
    .ranks {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #11093c;
        overflow-x: hidden;
        overflow-y: scroll;
        z-index: 10;
    }
    
    .warpper {
        width: 100%;
        min-height: 100%;
        background: url('../assets/rank_1.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        padding: 0 0.3rem;
        padding-bottom: 0.1rem;
        .header1 {
            margin-top: 0.48rem;
            height: 0.32rem;
            display: -webkit-box;
            -webkit-box-align: center;
            -webkit-box-pack: start;
            font-size: 0.26rem;
            color: #fff;
            .rank {
                width: 1.22rem;
            }
            .roominfo {
                width: 3rem;
            }
            .count {
                width: 2.52rem;
            }
        }
        .content1 {
            // padding-top: 0.5rem;
            width: 100%;
            .item {
                height: 1.87rem;
                display: -webkit-box;
                -webkit-box-align: center;
                -webkit-box-pack: start;
                .rank {
                    height: 100%;
                    width: 1.22rem;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
                    font-size: 0.36rem;
                    color: #6f60ae;
                    img {
                        width: 0.74rem;
                        height: 0.55rem;
                    }
                }
                .roominfo {
                    width: 3rem;
                    display: -webkit-box;
                    -webkit-box-align: start;
                    -webkit-box-pack: center;
                    -webkit-box-orient: vertical;
                    // text-align: left;
                    padding-left: 0.2rem;
                    .roomname {
                        color: #d4cdf3;
                        font-size: 0.3rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        max-width: 100%;
                        text-align: center;
                    }
                    .roomnum {
                        margin-top: 0.12rem;
                        color: #6f60ae;
                        font-size: 0.3rem;
                    }
                }
                .count {
                    width: 2.52rem;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
                    font-size: 0.36rem;
                    color: #a191e2;
                }
            }
            
            
            
        }
        .header2 {
            margin-top: 0.48rem;
            height: 0.32rem;
            display: -webkit-box;
            -webkit-box-align: center;
            -webkit-box-pack: start;
            font-size: 0.26rem;
            color: #fff;
            .rank {
                width: 1.8rem;
            }
            .roominfo {
                width: 2.7rem;
            }
            .count {
                width: 2.3rem;
            }
        }
        .content2 {
            padding-top: 0.5rem;
            width: 100%;
            .item {
                height: 1.87rem;
                display: -webkit-box;
                -webkit-box-align: center;
                -webkit-box-pack: start;
                .rank {
                    height: 100%;
                    width: 1.8rem;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
                    font-size: 0.36rem;
                    color: #6f60ae;
                    // img {
                    //     width: 0.74rem;
                    //     height: 0.55rem;
                    // }
                    .rank1 {
                        background: url('../assets/1.png') no-repeat;
                        width: 1.56rem;
                        height: 1.56rem;
                        // background-position: 0 0.3rem;
                        background-size: contain;
                        position: relative;
                        .avatarimg {
                            width: 0.74rem;
                            height: 0.55rem;
                            // margin-left: 0.47rem;
                            position: absolute;
                            top: -0.25rem;
                            left: 0.41rem;
                            z-index: 1;
                        }
                        .avatar {
                            width: 1.2rem;
                            height: 1.2rem;
                            position: absolute;
                            top: 0.14rem;
                            left: 0.18rem;
                            -webkit-border-radius: 50%;
                            border-radius: 50%;
                            background-clip: padding-box;
                            border: 0.04rem solid #ffb714;
                            font-size: 0.16rem;
                            overflow: hidden;
                            background: #ffb714;
                            img {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .bottomrank {
                        display: -webkit-box;
                        -webkit-box-align: center;
                        -webkit-box-pack: start;
                        width: 100%;
                        .bottomavatar {
                            width: 0.86rem;
                            height: 0.86rem;
                            overflow: hidden;
                            border-radius: 50%;
                            margin-left: 0.05rem;
                            box-shadow: 0 0 0.1rem #999;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }

                }
                .roominfo {
                    width: 2.7rem;
                    display: -webkit-box;
                    -webkit-box-align: start;
                    -webkit-box-pack: center;
                    -webkit-box-orient: vertical;
                    .roomname {
                        color: #d4cdf3;
                        font-size: 0.3rem;
                        text-align: left;
                        text-overflow: ellipsis;
                        word-break:keep-all;
                        white-space:nowrap;
                        overflow:hidden;
                        width: 100%;
                    }
                    .roomnum {
                        margin-top: 0.12rem;
                        color: #6f60ae;
                        font-size: 0.3rem;
                        text-align: left;
                    }
                }
                .count {
                    width: 2.3rem;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
                    font-size: 0.36rem;
                    color: #a191e2;
                }
            }
            
            
            
        }
        
    }
    .warpper > p.title {
        padding-top: 1rem;
        width: 100%;
        // height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.36rem;
        color: #fff;
        font-weight: 700;
    }
    #rankbg2 {
        background: url('../assets/2.png') no-repeat;
        background-size: contain;
    }
    #rankbg3 {
        background: url('../assets/3.png') no-repeat;
        background-size: contain;
    }
</style>