<template>
  <div id="app">
    <h3>Icon</h3>
    <icon></icon>
    <h3>Basic Button</h3>
    <basic-button></basic-button>
  </div>
</template>

<script>
import icon from "@/components/icon";
import BasicButton from "@/components/basicButton";

export default {
  name: 'app',
  components: {
    BasicButton,
    icon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
