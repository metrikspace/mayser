<template>
  <div class="scrap">
    <submit
      heading="Scrap Parts"
      v-bind:data="scrap"
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
      scrap: 'scrap/GET_DATA'
    })
  },
  components: {
    submit: Submit
  },
  layout: 'app',
  methods: {
    ...mapActions({
      setLeft: 'scrap/SET_LEFT',
      setRight: 'scrap/SET_RIGHT'
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
