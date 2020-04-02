<template>
  <div class="index">
    <button @click="login" class="login">Login</button>
  </div>
</template>
<script>
export default {
  methods: {
    login: function() {
      this.$router.push('/main');
    }
  }
};
</script>
<style lang="scss" scoped>
div.index {
  align-items: center;
  background-color: #141414;
  color: #efefef;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100vw;
}
button.login {
  background-color: tomato;
  border-radius: 2rem;
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 0.1rem;
  height: 7rem;
  outline: none;
  width: 20rem;
}
</style>