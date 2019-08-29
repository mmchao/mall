<template>
  <me-navbar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <div class="title" slot="center">商品详情</div>
    <i class="iconfont icon-cart" slot="right"></i>
  </me-navbar>
</template>

<script>
import MeNavbar from '@/base/navbar'
export default {
  name:'productHeader',
  components: {
    MeNavbar
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixins';

  .header {
    background-color: $header-bgc-translucent;
    .title {
      font-size: $font-size-l;
      color: #fff
    }
    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
