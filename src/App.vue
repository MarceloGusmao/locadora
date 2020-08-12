<template>
  <div id="app" class = "app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
  .app{
    background-color: #f2f2f2;
    height: 657px;
    font-family: 'Open Sans',Sans-serif;
  }
</style>
