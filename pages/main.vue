<template>
  <div class="main">
    <div class="grid">
      <info head="Box" :body="calcBox" />
      <info head="Partial" :body="calcPartial" />
      <info head="Current Total Part" :body="current" />
      <info head="Scrap" :body="scrap" />
      <info head="Reject" :body="reject" />
      <info head="Starting Partial" :body="start" />
      <info head="Reset" :body="reset" />
      <info head="Ending Partial" :body="end" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Info from '@/components/info.vue';
export default {
  computed: {
    ...mapGetters({
      current: 'current/GET_DATA',
      end: 'end/GET_DATA',
      reset: 'reset/GET_DATA',
      reject: 'reject/GET_DATA',
      scrap: 'scrap/GET_DATA',
      start: 'start/GET_DATA'
    }),
    calcBox: function() {
      let left =
        this.current[0] +
        this.start[0] +
        this.end[0] -
        (this.reject[0] + this.scrap[0] + this.reset[0]);
      let right =
        this.current[1] +
        this.start[1] +
        this.end[1] -
        (this.reject[1] + this.scrap[1] + this.reset[1]);
      left = Math.floor(left / this.perBox);
      right = Math.floor(right / this.perBox);
      return [left, right];
    },
    calcPartial: function() {
      let left =
        this.current[0] +
        this.start[0] +
        this.end[0] -
        (this.reject[0] + this.scrap[0] + this.reset[0]);
      let right =
        this.current[1] +
        this.start[1] +
        this.end[1] -
        (this.reject[1] + this.scrap[1] + this.reset[1]);
      left %= this.perBox;
      right %= this.perBox;
      return [left, right];
    }
  },
  components: {
    info: Info
  },
  data() {
    return {
      perBox: 20
    };
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
