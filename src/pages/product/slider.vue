<template>
  <div class="slider-wrapper">
    <me-slider :data="sliders" :direction="direction" :loop="loop" :interval="interval" :pagination="pagination">
      <swiper-slide v-for="(item, index) in sliders" :key="index">
          <img :src="item" alt="" class="slider-img">
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from '@/base/slider';
import {swiperSlide} from 'vue-awesome-swiper';
import {sliderOptions} from './config.js';


export default {
  name: 'productSlider',
  components: {
    MeSlider,
    swiperSlide
  },
  props: {
    sliders: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination
    };
  }
}
</script>

<style lang="scss" scoped>
  .slider-wrapper {
    width: 100%;
    height: 360px;
  }
  .slider-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
