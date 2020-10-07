<template>
  <div id="app">
   <heading/>
   
   <foot/>

   <router-view></router-view>
  </div>
</template>

<script>
import heading from './components/header.vue'
import foot from './components/footer.vue'

export default {
  name: 'App',
  components: {
   heading,
foot
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap');
*{font-family: 'Montserrat', sans-serif;}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
