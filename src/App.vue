<template>
  <div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
@import "./styles/global";
</style>
