<template>
    <div class="charrues-container w-full bg-black flex justify-center items-center ">
        <router-link to="/">
            <img src="../../assets/home/left_arrow.png" alt="left-arrow" class="absolute w-[100px] top-12 left-12 z-20">
        </router-link>
      <div class="content w-full max-w-screen-lg">
        <h1 class="text-[7rem] relative text-center font-bold text-darkred md:text-[6rem]">
          Les vieilles charrues
          <span class="text-lightpink font-relation text-[5rem] absolute left-80 top-10 md:text-[3rem] md:top-12 md:left-4">
            Projet
          </span>
        </h1>
        <div class="introduction-left-container flex flex-col pointer-events-none absolute w-full z-0">
          <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem] z-0">VIELLES <br>CHARRUES</span>
          <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem] z-0">VIELLES CHARRUES</span>
        </div>
        <div class="pictures-container z-10 px-36 ">
          <img src="../../assets/projects/charrues/bag.png" alt="bag-picture" class="z-10 ">
          <img src="../../assets/projects/charrues/pancart.png" alt="pancart-picture" class="z-10">
          <img src="../../assets/projects/charrues/post.jpg" alt="post-picture" class="z-10">
          <img src="../../assets/projects/charrues/postmockup.png" alt="mockup-picture" class="z-10">
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
  </style>
  