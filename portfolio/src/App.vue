<template>
  <div class="app bg-logo bg-cover">
    <Navbar></Navbar>
    <router-view />
    <!-- <Socials /> -->
    <!-- <Footer /> -->
    
  </div>
</template>

<style>

</style>

<script setup> 
import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue';
  import Socials from './components/Socials.vue';
</script>