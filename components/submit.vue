<template>
  <div class="submit">
    <div class="text">
      <h1>{{ heading }}</h1>
      <h1>
        <div>Left</div>
        <div>{{ data[0] }}</div>
      </h1>
      <h1>
        <div>Right</div>
        <div>{{ data[1] }}</div>
      </h1>
    </div>
    <div class="inputs">
      <div class="input">
        <input placeholder="Left" ref="leftInput" type="number" />
        <button type="submit" v-on:click="left($refs.leftInput.value)">Submit</button>
      </div>
      <div class="input">
        <input placeholder="Right" ref="rightInput" type="number" />
        <button type="submit" v-on:click="right($refs.rightInput.value)">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    heading: String,
    left: Function,
    right: Function
  }
};
</script>
<style lang="scss">
div.submit {
  display: grid;
  grid-template-rows: calc(100% - 10rem) 10rem;
  height: 100%;
  width: 100%;
}
div.text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
div.inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
div.input {
  display: grid;
  grid-template-rows: repeat(2, 5rem);
}
h1:nth-of-type(1) {
  grid-column: 1 / -1;
  grid-row: 1;
}
h1:nth-of-type(2) {
  display: grid;
  grid-template-rows: min-content auto;
  grid-column: 1;
  grid-row: 2;
}
h1:nth-of-type(3) {
  display: grid;
  grid-template-rows: min-content auto;
  grid-column: 2;
  grid-row: 2;
}
h1 {
  align-items: center;
  border: 0.1rem solid white;
  display: flex;
  font-weight: 300;
  justify-content: center;
  font-size: 5rem;
  text-align: center;
  div:nth-of-type(1) {
    padding-top: 2rem;
  }
}
input {
  caret-color: transparent;
  text-align: center;
}
</style>