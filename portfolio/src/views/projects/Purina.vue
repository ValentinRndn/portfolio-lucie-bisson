<template>
    <div class="charrues-container w-full bg-black flex justify-center items-center ">
        <router-link :to="{ path: '/', hash: '#academic-project' }">
            <img src="../../assets/home/left_arrow.png" alt="left-arrow" class="absolute w-[100px] top-12 left-12 z-20 md:top-5 md:left-0 md:w-[80px]">
        </router-link>
      <div class="content w-full max-w-screen-lg">
        <h1 class="text-[7rem] relative text-center font-bold text-darkred md:text-[3rem] w-fit mx-auto">
          Purina
          <span class="text-lightpink font-relation text-[5rem] absolute left-9 top-10 md:text-[2.3rem] md:top-4 md:left-3">
            Projet
          </span>
        </h1>
        <div class="introduction-left-container flex flex-col pointer-events-none absolute w-full z-0 overflow-hidden">
          <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem] z-0">PUR <br>INA</span>
          <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem] z-0">PURINA</span>
        </div>
        <div class="pictures-container z-10 px-36 md:px-4 md:grid-cols-1 ">
          <img src="../../assets/projects/purina/logo-purina.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/logo.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/palette.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/typo.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/logo-size.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/logo-simplifie.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/logo-monochrome.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/logo-marron.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/logo-declinaison.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/interdit.png" alt="purina-logo" class="z-10 bg-white">
          <img src="../../assets/projects/purina/icon-declinaison.png" alt="purina-logo" class="z-10 bg-white">




        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PurinaPage",
  };
  </script>
  
  <style>
  #intro {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.6px;
  }

  
  .pictures-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
  </style>
  