<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
    </header>
    <me-scroll :data="recommends" pullDown pullUp @pull-down="pullToRefresh" @pull-up="pullToLoadMore" @scroll="scroll" @scroll-end="scrollEnd" @pull-down-transition-end="pullDownTransitionEnd" ref="scroll">
      <home-slider ref="slider"/>
      <home-nav />
      <home-recommend @loaded="getRecommends" ref="recommend"/>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop  :visible="isBacktopVisible" @backtop="backToTop" ref="backtop"/>
    </div>
		<router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from '@/base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'
import {HEADER_TRANSITION_HEIGHT} from './config'
import MeBacktop from '@/base/backtop'

export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend,
    MeBacktop
  },
  // mounted(){
  //   console.log(this.$refs.slider) //ref指向dom或者vue组件对象
  // },
  data(){
    return {
      recommends: [],
      isBacktopVisible: false,
      isHeaderTransition: false
    }
  },
  methods: {
    getRecommends(recommends) {
      this.recommends = recommends
    },
    pullToRefresh(end) {
      this.$refs.slider.update().then(end)
    },
    pullToLoadMore(end) {
      this.$refs.recommend.update().then(end).catch(err => {
        if (err) {
          console.log(err)
        }
        end()
      })
    },
    scroll(translate) {
        this.changeHeaderStatus(translate);
      },
    scrollEnd(translate, scroll, pulling) {
      if (!pulling) {
        this.changeHeaderStatus(translate);
      }
      this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      // this.$refs.backtop.changeVisible(this.isBacktopVisible)  也可以改变backtop组件的data值来控制
    },
    pullDownTransitionEnd() {
      this.$refs.header.show();
    },
    backToTop() {
      this.$refs.scroll && this.$refs.scroll.scrollToTop();
    },
    changeHeaderStatus(translate) {
      if (translate > 0) {
        this.$refs.header.hide();
        return;
      }

        this.$refs.header.show();

        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      }
  },
  // updated() {
  //   console.log('update') // data中的数据发生变化时
  // }
}
</script>


<style lang="scss" scoped>

@import "~@/assets/scss/mixins";

.home {
 overflow:hidden;
 width:100%;
 height:100%;
 background-color: $bgc-theme;
}
</style>
