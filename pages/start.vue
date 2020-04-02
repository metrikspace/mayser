<template>
  <div class="start">
    <submit
      heading="Starting Partials"
      v-bind:data="[0,1]"
      v-bind:left="left"
      v-bind:right="right"
    />
  </div>
</template>
<script>
import Submit from '@/components/submit.vue';
export default {
  components: {
    submit: Submit
  },
  layout: 'app',
  methods: {
    left: function(ref) {
      console.log(ref);
    },
    right: function(ref) {
      console.log(ref);
    }
  },
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
