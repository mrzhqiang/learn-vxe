<template>
  <div id="app">
    <div id="nav">
      <vxe-button status="primary" icon="vxe-icon-home" @click="goHome()">主页</vxe-button>
      |
      <router-link :to="{name: 'about'}">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
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
}
</style>
