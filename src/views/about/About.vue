<template>
  <div class="about">
    <div style="min-height: 47rem;">
      <div>
        <img src="../../assets/about_1.jpg" style="width: 100%;"/>
      </div>
      <div>
        <img src="../../assets/about_2.jpg" style="width: 100%;"/>
      </div>
      <div>
        <img src="../../assets/about_3.jpg" style="width: 100%;"/>
      </div>
      <div>
        <img src="../../assets/about_4.jpg" style="width: 100%;"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
    components: {
    },
})
export default class About extends Vue {
    
  private name: string = 'about';


  private mounted(): void {

  }

}
</script>

<style scoped lang="scss">
  .about {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .about > div {
    // min-height: 100%;
    // padding-bottom: 0.8rem;
  }
  .about img {
    width: 100%;
    vertical-align: middle;
  }
</style>