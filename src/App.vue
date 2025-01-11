<template>
  <NavBar/>
  <RouterView />
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style src="./assets/css/output.css"/>

<style lang="scss">
@font-face {
  font-family: 'Sharetech';
  src: url('~@/assets/fonts/Share_Tech_Mono/ShareTechMono-Regular.ttf') format('font-truetype');
}

#app {
  font-family: 'Sharetech', monospace;
  text-align: center;
  color: #2c3e50;
}

.section {
  height: 100vh;
}
</style>


