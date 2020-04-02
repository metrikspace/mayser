<template>
  <div class="info">
    <h1 class="head">{{head}}</h1>
    <h2 class="body">{{body[0]}}</h2>
    <h2 class="body">{{body[1]}}</h2>
  </div>
</template>
<script>
export default {
  props: {
    head: String,
    body: Array
  }
};
</script>
<style lang="scss">
div.info {
  border-radius: 1rem;
  border: 1px solid black;
  box-shadow: 0.12rem 0.23rem 0.21rem white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  z-index: 9;
}
h1.head {
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 1px solid white;
  display: flex;
  grid-column: 1 / -1;
  grid-row: 1;
  justify-content: center;
  text-align: center;
}
h2.body {
  align-items: center;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  font-weight: 500;
  text-align: center;
  &:nth-of-type(1) {
    border-bottom-left-radius: 1rem;
    grid-column: 1;
    grid-row: 2;
  }
  &:nth-of-type(2) {
    border-bottom-right-radius: 1rem;
    grid-column: 2;
    grid-row: 2;
  }
}
</style>
<style lang="scss">
@media screen and (max-width: 2560px) {
  div.info {
    margin: 0 auto;
    height: 90%;
    width: 90%;
  }
}
@media screen and (max-width: 1440px) {
  div.info {
    margin: 0 auto;
    height: 80%;
    width: 90%;
  }
}
@media screen and (max-width: 1024px) {
  div.info {
    margin: 0 auto;
    height: 70%;
    width: 90%;
  }
}
@media screen and (max-width: 768px) {
  div.info {
    margin: 0 auto;
    height: 80%;
    width: 90%;
  }
}
@media screen and (max-width: 425px) {
  div.info {
    margin: 0 auto;
    height: 90%;
    width: 90%;
  }
}
@media screen and (max-width: 375px) {
  div.info {
    margin: 0 auto;
    height: 80%;
    width: 90%;
  }
}
@media screen and (max-width: 320px) {
  div.info {
    margin: 0 auto;
    height: 75%;
    width: 90%;
  }
}
</style>
