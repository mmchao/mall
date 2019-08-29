<template>
  <div class="personal">
    <header class="g-header-container">
      <personal-header></personal-header>
    </header>
    <div class="g-content-container">
      <me-scroll ref="scroll">
        <img src="./personal.png" alt="">
      </me-scroll>
    </div>
    
  </div>
</template>

<script>
import PersonalHeader from './header'
import MeScroll from '@/base/scroll';
export default {
  name: 'Personal',
  components: {
    PersonalHeader,
    MeScroll
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixins";
  .personal {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }
  img {
    width: 100%;
  }
</style>