<template>
  <div class="main">
    <div class="grid">
      <info head="Box" :body="[0, 1]" />
      <info head="Partial" :body="[0, 1]" />
      <info head="Slope" :body="[0, 1]" />
      <info head="Current Partial" :body="[0, 1]" />
      <info head="Scrap Partial" :body="[0, 1]" />
      <info head="Reject Partial" :body="[0, 1]" />
      <info head="Starting Partial" :body="[0, 1]" />
      <info head="Ending Partial" :body="[0, 1]" />
    </div>
  </div>
</template>
<script>
import Info from '@/components/info.vue';
export default {
  components: {
    info: Info
  },
  layout: 'app',
  transitions: 'page'
};
</script>
<style lang="scss" scoped>
div.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
div.grid {
  align-items: center;
  display: grid;
  height: 100%;
  width: 100%;
}
</style>
<style lang="scss">
@media screen and (max-width: 2560px) {
  div.grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media screen and (max-width: 1440px) {
  div.grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  div.grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {
  div.grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
@media screen and (max-width: 425px) {
  div.grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
@media screen and (max-width: 375px) {
  div.grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
@media screen and (max-width: 320px) {
  div.grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>
<style lang="scss" scoped>
.page-enter-active {
  animation: acrossIn 1s ease-in both;
}
.page-leave-active {
  animation: acrossOut 1s ease-out both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
