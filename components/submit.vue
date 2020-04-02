<template>
  <div class="submit">
    <h1>{{ heading }}</h1>
    <input type="number" />
    <button type="submit">Submit</button>
  </div>
</template>
<script>
export default {
  props: {
    heading: String
  }
};
</script>
<style lang="scss">
div.submit {
  display: grid;
  grid-template-rows: auto repeat(2, min-content);
  height: 100%;
  width: 100%;
}
h1 {
  align-items: center;
  display: flex;
  font-size: 5rem;
  font-weight: 300;
  justify-content: center;
}
input {
  height: 5rem;
}
button {
  height: 5rem;
}
</style>
<style lang="scss">
@media screen and (max-width: 2560px) {
}
@media screen and (max-width: 1440px) {
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 425px) {
}
@media screen and (max-width: 375px) {
}
@media screen and (max-width: 320px) {
}
</style>
