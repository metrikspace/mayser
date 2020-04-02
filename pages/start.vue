<template>
  <div class="start">
    <submit heading="Starting Partials" />
  </div>
</template>
<script>
import Submit from '@/components/submit.vue';
export default {
  components: {
    submit: Submit
  },
  layout: 'app',
  transitions: 'page'
};
</script>
<style lang="scss" scoped>
.page-enter-active {
  animation: acrossIn 1s ease-in both;
}
.page-leave-active {
  animation: acrossOut 1s ease-out both;
}
@keyframes acrossIn {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
</style>
