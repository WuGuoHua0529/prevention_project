<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

#app {
  background-color: #f5f5f5;
}
</style>
