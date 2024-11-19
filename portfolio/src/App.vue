<template>
  <div class="app color">
    <router-view />
    <Socials />
    <!-- <Footer /> -->
    
  </div>
</template>

<style>

</style>

<script setup> 
  import Footer from './components/Footer.vue';
  import Socials from './components/Socials.vue';
</script>