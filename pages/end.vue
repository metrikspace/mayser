<template>
  <div class="end">
    <submit
      heading="Ending Partials"
      v-bind:data="end"
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
      end: 'end/GET_DATA'
    })
  },
  components: {
    submit: Submit
  },
  layout: 'app',
  methods: {
    ...mapActions({
      setLeft: 'end/SET_LEFT',
      setRight: 'end/SET_RIGHT'
    })
  },
  transitions: 'page'
};
</script>
<style lang="scss" scoped>
div.end {
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
