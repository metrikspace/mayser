<template>
  <div class="current">
    <submit
      heading="Current Total Parts"
      v-bind:data="getData()"
      v-bind:left="setLeft"
      v-bind:right="setRight"
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
    getData: function() {
      return [0, 1];
    },
    setLeft: function(ref) {
      console.log(ref);
    },
    setRight: function(ref) {
      console.log(ref);
    }
  },
  transitions: 'page'
};
</script>
<style lang="scss" scoped>
div.current {
  padding-top: 1rem;
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
