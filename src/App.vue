<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>
        <router-view/>
      </keep-alive>
      <div class="g-footer-container" v-show="$route.meta.showFooter">
      	<c-tabbar></c-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
	import CTabbar from '@/components/tabbar'
  export default {
    name: 'App',
    components:{
    	CTabbar
    }
  };
</script>
