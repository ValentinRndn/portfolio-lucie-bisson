<template>
    <div class="introduction-container w-full flex justify-center items-center bg-lightred p-20 gap-20 md:flex-col overflow-hidden md:gap-10 md:p-0">
        <div class="introduction-left-container flex flex-col pointer-events-none relative w-full">
    <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem]">INTRO<br>DUCTION</span>
    <span id="intro" class="text-darkred text-[8rem] font-bold md:text-[6rem]">INTRODUC<br>TION</span>
    <div class="image-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <!-- Le cadre décalé en arrière-plan -->
  <div class="backpicture w-[90%] h-[100%] border-2 border-lightpink absolute top-6 right-16 bg-lightred"></div>

  <!-- L'image principale -->
  <img
    src="../assets/intro/ppred.webp"
    alt="Profil Picture"
    class="object-cover w-[90%] max-w-[400px] border-2 border-darkred bg-lightred relative"
  />
</div>

</div>
<div class="introduction-right-container flex flex-col gap-20 md:items-center md:justify-center md:gap-10">



<div class="top-right-container w-full flex flex-col md:items-center">
    <span class="text-[10rem] relative font-bold text-darkred md:text-[6rem]">
  Hellooo!
  <span class="text-lightpink font-relation text-[5rem] absolute left-8 top-20 md:text-[3rem] md:top-12 md:left-4">
    Introduction
  </span>
</span>
<div class="presentation-text w-full md:max-w-[80%] flex flex-col">
    <p class="text-darkred text-[1.5rem] md:text-[1.5rem] ">Moi c'est Lucie</p>
    <p class="text-darkred text-[1.5rem] md:text-[1.5rem]  ">Je suis passionnée par le montage vidéo et photo, je
suis créative j’aime capturer et raconter des histoires à
travers mes montages. Que ce soit pour des projets
personnels ou professionnels, j'adore donner vie à des
moments uniques et inspirants.
En dehors du monde du montage, je suis une
aventurière qui aime découvrir de nouveaux horizons à
travers les voyages. J'aime explorer de nouvelles
cultures, goûter à des saveurs exotiques et créer des
souvenirs inoubliables.
La mode est également une passion qui me permet
d'exprimer ma créativité. Je suis toujours à l'affût des
dernières tendances. </p>
  </div>
  </div>
<div class="bottom-right-container w-full flex flex-col md:items-center">
    <span class=" text-darkred text-[4rem] font-bold relative">Mes réseaux
        <span class="text-lightpink font-relation text-[2.4rem] absolute left-4 top-7 ">
    Follow me
  </span>
    </span>
    <div class="bottom-right-content-container flex gap-12 md:pb-24">
    <div class="social-media flex items-center gap-2">
      <a href="" class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#F9B29C" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
        <a href="https://www.linkedin.com/in/lucie-bisson-850082232/" target="_blank" class="text-darkred text-[1.2rem] md:hidden">Linkedin</a>
      </a>
    </div>

    <div class="social-media flex items-center gap-2">
      <a href="" class="flex items-center gap-2">

        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#F9B29C" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
        <a href="https://www.instagram.com/blab_creative/"  target="_blank" class="text-darkred text-[1.2rem] md:hidden">Instagram</a>
        </a>
    </div>

</div>
    </div>
</div>
</div>
  </template>
  
  <script>
  export default {
    name: "Introduction",

    
  };
  
  </script>
  
  <style scoped>
    #intro {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.6px;
  }
  </style>
  