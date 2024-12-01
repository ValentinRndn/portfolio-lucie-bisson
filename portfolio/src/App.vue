<template>
<div class="app bg-black ">
      <!-- <Navbar></Navbar> -->

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
  import Socials from './components/Socials.vue';
</script>