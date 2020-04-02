<template>
  <div class="app">
    <navigation />
    <nuxt />
  </div>
</template>
<script>
import Navigation from '@/components/navigation.vue';
export default {
  components: {
    navigation: Navigation
  }
};
</script>
<style lang="scss">
$navigationHeight: 8rem;
html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  font-size: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  word-spacing: 1px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
div.app {
  background-color: #141414;
  color: #efefef;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: $navigationHeight calc(
      100vh - #{$navigationHeight}
    );
  min-height: 100vh;
  width: 100vw;
}
</style>
