<template>
  <div class="home">
    <h3>图标</h3>
    <icon></icon>
    <div style="float: left; width: 10%">
      <ul id="menu">
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/radio">Radio</router-link>
        </li>
      </ul>
    </div>
    <div style="float: left; width: 90%;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon.vue';

export default {
  name: 'home',
  components: {
    Icon,
  }
}
</script>
