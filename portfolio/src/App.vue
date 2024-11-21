<template>
<div class="app ">
      <Navbar></Navbar>
      <Welcome class="absolute"/>
    <router-view />
    <!-- <Socials /> -->
    <!-- <Footer /> -->
    
  </div>
</template>

<style>

</style>

<script setup> 
import Navbar from './components/Navbar.vue'
import Welcome from './components/Welcome.vue';
  import Footer from './components/Footer.vue';
  import Socials from './components/Socials.vue';
</script>