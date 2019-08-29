<template>
  <swiper :options="swiperOptions" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {swiper} from 'vue-awesome-swiper'
export default {
  name: 'MeSlider',
  components: {
    swiper
  },
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal','vertical'].indexOf(value) > -1  // 校验
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator(value) {
        return value >= 0
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      keyId: Math.random()
    }
  },
  created() {
    this.init()
    // console.log(1)
  },
  methods: {
    init() {
      this.swiperOptions = {
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        slidesPerView: 1,
        loop: this.data.length <= 1 ? false : this.loop,
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null
        }
      }
    }
  },
  watch: {
    data(newData) {
      if (newData.length === 0) {
        return
      }
      // console.log(2)
      this.swiperOptions.loop = newData.length === 1 ? false : this.loop // 只有一张 不无缝滚动
      this.keyId = Math.random()
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
