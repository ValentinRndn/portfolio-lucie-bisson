<template>
    <div class="welcome-container bg-logo h-screen w-full bg-center bg-no-repeat text-black flex flex-col items-center justify-center z-0 ">
      <span
        v-if="isHomeRoute"
        class="text-midbrown text-8xl font-relation -ml-52"
      >
        Bienvenue dans mon
      </span>
      <span
        v-if="isHomeRoute"
        class="text-darkblue font-relation text-[12rem] -mt-12 ml-32"
      >
        Portfolio
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: "Welcome",
    computed: {
      isHomeRoute() {
        return this.$route.name === "home"; 
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  