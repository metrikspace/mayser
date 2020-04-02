<template>
  <div class="reset">
    <submit
      heading="Reset Parts"
      v-bind:data="reset"
      v-bind:left="setLeft"
      v-bind:right="setRight"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Submit from '@/components/submit.vue';
export default {
  computed: {
    ...mapGetters({
      reset: 'reset/GET_DATA'
    })
  },
  components: {
    submit: Submit
  },
  layout: 'app',
  methods: {
    ...mapActions({
      setLeft: 'reset/SET_LEFT',
      setRight: 'reset/SET_RIGHT'
    })
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
