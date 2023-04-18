<template>
  <div id="app">
    <h3>图标</h3>
    <icon></icon>
    <h3>基础按钮</h3>
    <basic-button></basic-button>
    <h3>禁用按钮</h3>
    <disable-button></disable-button>
  </div>
</template>

<script>
import icon from "@/components/icon";
import BasicButton from "@/components/basicButton";
import DisableButton from "@/components/disableButton";

export default {
  name: 'app',
  components: {
    DisableButton,
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
