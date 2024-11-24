<template>
    <div class="welcome-container h-screen w-full text-black flex flex-col items-center justify-center z-0 ">
<div class="portfolio-container text-white text-xxl font-bold flex justify-center items-center relative border-b-2 border-lightred py-4 ">
  <div class="absolute top-[17px] left-0 w-[2px] h-[5%] bg-lightred"></div>

  <div class="absolute bottom-[0] left-0 w-[2px] h-[5%] bg-lightred"></div>
  <div class="absolute bottom-[0] right-0 w-[2px] h-[5%] bg-lightred"></div>


  <div class="portofolio-left-container flex flex-col">
  <span class="border-t-2 border-lightred relative duration-200 ease-out ">PORT
  <div class="absolute top-[0] right-0 w-[2px] h-[11%] bg-lightred"></div>

  </span>
  
  <span>FOLIO<span class="text-darkred">.</span></span> 
</div>
<div class="portfolio-right-container ">
<img src="../assets/home/logo.png" alt="Logo portfolio" class="w-[300px]">
</div>
</div>
      <span class="text-lightred font-relation text-[11rem] absolute blur-sm ">
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
  @keyframes drawHorizontal {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}


  </style>
  