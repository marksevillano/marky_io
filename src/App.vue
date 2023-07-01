<template>
  <HomePage/>
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style src="./assets/css/pure@3.0.0/pure-min.css"/>

<style lang="scss">
@font-face {
  font-family: 'Sharetech';
  src: url('~@/assets/fonts/Share_Tech_Mono/ShareTechMono-Regular.ttf') format('font-truetype');
}

#app {
  font-family: 'Sharetech', monospace;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


