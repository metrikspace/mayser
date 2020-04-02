<template>
  <div class="current">
    <submit
      heading="Current Total Parts"
      v-bind:data="current"
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
      current: 'current/GET_DATA'
    })
  },
  components: {
    submit: Submit
  },
  layout: 'app',
  methods: {
    ...mapActions({
      setLeft: 'current/SET_LEFT',
      setRight: 'current/SET_RIGHT'
    })
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
