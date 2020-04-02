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
        <input ref="leftInput" type="number" />
        <button v-on:click="left($refs.leftInput.value)">Submit</button>
      </div>
      <div class="input">
        <input ref="rightInput" type="number" />
        <button v-on:click="right($refs.rightInput.value)">Submit</button>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}
div.text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
}
div.inputs {
  border: 2px solid white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
div.input {
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 3rem;
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
  width: 100%;
}
button {
  width: 100%;
}
</style>
<style lang="scss">
@media screen and (max-width: 2560px) {
  div.text {
    height: 100%;
  }
}
@media screen and (max-width: 1440px) {
  div.text {
    height: 90%;
  }
}
@media screen and (max-width: 1024px) {
  div.text {
    height: 80%;
  }
}
@media screen and (max-width: 768px) {
  div.text {
    height: 70%;
  }
}
@media screen and (max-width: 425px) {
  div.text {
    height: 60%;
  }
}
@media screen and (max-width: 375px) {
  div.text {
    height: 50%;
  }
}
@media screen and (max-width: 320px) {
  div.text {
    height: 40%;
  }
}
</style>