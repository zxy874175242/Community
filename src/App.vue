<template>
  <div id="app">
    <navheader></navheader>
    <router-view/>
  </div>
</template>

<script>
  import navheader from "./components/navheader";
export default {
  name: 'App',
  components:{
    navheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
html,body,#app{
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
