<template>
    <transition name="fades">
        <div class="toast" v-if="show">
            <div>
                {{massage}}
            </div>
        </div>
    </transition>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '../utils/Bus';
@Component({
    components: {},

})
export default class Toast extends Vue {

    private name: string = 'Toast';
    private massage: string = '';
    private show: boolean = false;

    private timeid: number = -1;
    private mounted(): void {
        Bus.$on('showToast', (msg: string) => {
            console.log('toast: ' + msg);
            this.show = true;
            this.massage = msg;

            if (this.timeid > 0) {
                clearTimeout(this.timeid);
                this.timeid = -1;
            }
            this.timeid = setTimeout(() => {
                this.show = false;
                this.massage = '';
            }, 2500);
        });
    }

}
</script>

<style>
    .fades-enter-active, .fades-leave-active {
        transition: opacity .5s;
    }
    .fades-enter, .fades-leave-to {
        opacity: 0;
    }
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        font-size: 0.28rem;
        color: #fff;
        margin-left: -2.5rem;
        margin-top: -0.4rem;
        width: 5rem;
        height: 0.6rem;
        z-index: 10;
        text-align: center;
    }
    .toast > div {
        background: rgba(0, 0, 0, 0.75);
        border-radius: 0.08rem;
        height: 100%;
        display: inline-block;
        min-width: 1rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        box-shadow: 0.02rem 0.05rem 0.05rem #222
    }
</style>