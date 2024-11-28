<template>
    <div class="charrues-container w-full bg-black flex justify-center items-center overflow-hidden">
      <router-link to="/">
        <img 
          src="../../assets/home/left_arrow.png" 
          alt="left-arrow" 
          class="absolute w-[100px] top-12 left-12 z-20 md:top-5 md:left-0"
        >
      </router-link>
      <div class="content w-full max-w-screen-lg">
        <h1 class="text-[7rem] relative text-center font-bold text-darkred md:text-[3rem] w-fit mx-auto">
          Purina
          <span 
            class="text-lightpink font-relation text-[5rem] absolute left-12 top-10 md:text-[2.3rem] md:top-4 md:left-28">
            Projet
          </span>
        </h1>
        <div class="introduction-left-container flex flex-col pointer-events-none absolute w-full z-0 overflow-hidden">
          <!-- <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem] z-0">VIELLES <br>CHARRUES</span> -->
          <!-- <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem] z-0">VIELLES CHARRUES</span> -->
        </div>
        <div 
          class="pictures-container z-10   whitespace-nowrap bg-white"
        >
          <img 
            src="../../assets/projects/purina/charte.png" 
            alt="bag-picture" 
            class="z-10 inline-block"
          >
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CharruesPage",
  };
  </script>
  
  <style>
  #intro {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.6px;
  }
  
  .pictures-container {
    display: block; 
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: thin; 
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
  }
  
  .pictures-container::-webkit-scrollbar {
    height: 8px;
  }
  
  .pictures-container::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
  
  .pictures-container::-webkit-scrollbar-track {
    background: transparent;
  }
  </style>