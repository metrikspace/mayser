<template>
  <div class="navigation">
    <nuxt-link class="brand" to="/main">Mayser Sensor USA</nuxt-link>
    <div class="links">
      <nuxt-link class="current" to="/current">Current</nuxt-link>
      <nuxt-link class="scrap" to="/scrap">Scrap</nuxt-link>
      <nuxt-link class="reject" to="/reject">Reject</nuxt-link>
      <nuxt-link class="start" to="/start">Start</nuxt-link>
      <nuxt-link class="reset" to="/reset">Reset</nuxt-link>
      <nuxt-link class="end" to="/end">End</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
div.navigation {
  background-color: #efefef;
  border: 1px solid black;
  box-shadow: 0 0.3rem 0.1rem rgba(239, 239, 239, 0.6);
  color: #141414;
  display: grid;
  grid-template-areas: 'brand links';
  grid-template-columns: max-content auto;
  z-index: 10;
}
a {
  align-items: center;
  border: none;
  color: #141414;
  cursor: default;
  display: flex;
  height: 100%;
  justify-content: center;
  outline: none;
  position: relative;
  text-align: center;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
a.brand {
  grid-area: brand;
  padding: 1rem;
  width: 100%;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 15%;
    position: absolute;
    top: 25%;
    width: 70%;
  }
}
div.links {
  display: grid;
  grid-area: links;
  grid-template-areas:
    'current current scrap scrap reject reject'
    'start start reset reset end end';
  grid-template-columns: repeat(min-content, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
a.current {
  grid-area: current;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 40%;
    position: absolute;
    top: 25%;
    width: 20%;
  }
}
a.scrap {
  grid-area: scrap;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 42.5%;
    position: absolute;
    top: 25%;
    width: 15%;
  }
}
a.reject {
  grid-area: reject;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 41%;
    position: absolute;
    top: 25%;
    width: 17.5%;
  }
}
a.start {
  grid-area: start;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 42.5%;
    position: absolute;
    top: 25%;
    width: 15%;
  }
}
a.reset {
  grid-area: reset;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 41%;
    position: absolute;
    top: 25%;
    width: 17.5%;
  }
}
a.end {
  grid-area: end;
  &::after {
    content: '';
    cursor: pointer;
    height: 50%;
    left: 44%;
    position: absolute;
    top: 25%;
    width: 12%;
  }
}
</style>
<style lang="scss">
@media screen and (min-width: 320px) {
  a.brand {
    font-size: 1.5rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 1.8rem;
  }
  a.start {
    justify-content: flex-end;
    padding-right: 0.4rem;
  }
  a.end {
    justify-content: flex-start;
    padding-left: 0.4rem;
  }
}
@media screen and (min-width: 375px) {
  a.brand {
    font-size: 1.8rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 2.1rem;
  }
}
@media screen and (min-width: 425px) {
  a.brand {
    font-size: 2.1rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 2.4rem;
  }
}
@media screen and (min-width: 768px) {
  a.brand {
    font-size: 2.7rem;
    padding: 1rem 5rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 2.7rem;
  }
  a.start {
    justify-content: center;
    padding-right: 0rem;
  }
  a.end {
    justify-content: center;
    padding-left: 0rem;
  }
  div.links {
    grid-template-areas: 'current scrap reject start reset end';
    grid-template-columns: repeat(6, min-content);
    grid-column-gap: 1rem;
    grid-template-rows: repeat(1, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  a.brand {
    font-size: 2.7rem;
    padding: 1rem 5rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 2.7rem;
  }
  div.links {
    grid-template-areas: 'current scrap reject start reset end';
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1rem;
    grid-template-rows: repeat(1, 1fr);
  }
}
@media screen and (min-width: 1440px) {
  a.brand {
    font-size: 2.7rem;
    padding: 1rem 5rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 2.7rem;
  }
}
@media screen and (min-width: 2560px) {
  a.brand {
    font-size: 2.7rem;
    padding: 1rem 5rem;
  }
  a.current,
  a.end,
  a.reject,
  a.reset,
  a.scrap,
  a.start {
    font-size: 2.7rem;
  }
}
</style>
