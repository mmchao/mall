<template>
  <me-navbar class="header" title="我的淘宝">
    <div slot="center"></div>
    <i class="iconfont icon-setting" slot="right"></i>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from '@/base/navbar';

  export default {
    name: 'PersonalHeader',
    components: {
      MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixins";
  .header {
    &.mine-navbar{
      background-color: $header-bgc;
      color: #fff;
    }
    .iconfont{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
    .icon-setting {
      margin-right: 10px;
    }
  }
</style>
