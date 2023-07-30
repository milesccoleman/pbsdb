<template>
  <div id="app">
    <PublicSpeakingDashboard/>
  </div>
</template>

<script>
import PublicSpeakingDashboard from './components/PublicSpeakingDashboard.vue'

export default {
  name: 'App',
  components: {
    PublicSpeakingDashboard
  }
}
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #123b52; 
}
</style>
