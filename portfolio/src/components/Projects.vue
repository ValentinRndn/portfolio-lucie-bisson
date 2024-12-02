<template>
    <div class="projects-container w-full flex flex-col justify-center items-center bg-black gap-20 overflow-hidden">
        <div class="projects-container-title">
        <span class="text-[10rem] relative font-bold text-center text-darkred md:text-[5rem] w-fit">
  Projets
  <span class="text-lightpink font-relation text-[5rem] absolute left-8 top-16  md:top-7 md:left-5 md:text-[3rem]">
    Découvrez
  </span>
</span>
<p class="text-center text-lightpink text-lg -mt-8">Cliquez sur un projet pour découvrir le contenu</p>
</div>

<div class="projects-button-container flex justify-evenly w-full md:flex-col md:justify-center md:items-center md:gap-10 ">
        
  <!-- <div class="academic-button-container group relative h-fit w-fit ">
    <div class="backpicture w-full h-full border-2 border-lightpink absolute top-4 right-4 hoverChildButton"></div>
    <div class="skills-top-left-container bg-lightred p-6 border-2 border-darkred relative  hoverParentButton">
        <div class="content flex flex-col text-center items-center justify-center">
            <div class="title-experiences">
                <a href="#academic-project" class="hoverbutton text-[3rem] relative font-bold text-darkred">
                    Académiques
                    <span class="text-lightpink font-relation text-[2.8rem] absolute left-4 top-1 textHover">
                        Projets
                    </span>
                </a>
            </div>
        </div>
    </div>
</div> -->

    <div class="professional-buttton-container group relative h-fit w-fit">
    <div class="backpicture w-full h-full border-2 border-lightpink absolute top-4 right-4 hoverChildButton"></div>
    <div class="skills-top-left-container bg-lightred p-6 border-2 border-darkred relative hoverParentButton ">
        <div class="content flex flex-col text-center items-center justify-center">
        <div class="title-experiences ">
            <a href="#professional-project" class="text-[3rem] relative font-bold text-darkred">
            Professionels
            <span class="text-lightpink font-relation text-[2.8rem] absolute left-4 top-1 textHover">
                Projets
            </span>
          </a>
        </div>
        </div>
    </div>
    </div>

    <div class="personnal-button-container group relative h-fit w-fit">
    <div class="backpicture w-full h-full border-2 border-lightpink absolute top-4 right-4 hoverChildButton "></div>
    <div class="skills-top-left-container bg-lightred p-6 border-2 border-darkred relative hoverParentButton ">
        <div class="content flex flex-col text-center items-center justify-center">
        <div class="title-experiences ">
            <a href="#personnal-project" class="text-[3rem] relative font-bold text-darkred">
            Personnels
            <span class="text-lightpink font-relation text-[2.8rem] absolute left-4 top-1 textHover">
                Projets
            </span>
          </a>
        </div>
        </div>
    </div>
    </div>
</div>

<!-- <div id="academic-project" class="academic-projects-container w-full mt-24  overflow-hidden">
  <div class="top-academic-projetcs-container flex justify-center items-center md:relative ">
    <div class="left-academic-projects-container-title w-3/5 flex items-center justify-center md:absolute md:w-full">
      <span class="text-[8rem] relative font-bold text-darkred w-fit md:text-[4rem] md:text-center ">
        Académiques
        <span class="text-lightpink font-relation text-[6rem] absolute left-10 top-10 md:left-6 md:top-5 md:text-[3rem]">
          Projets
        </span>
      </span>
    </div>
    <div class="left-academic-projects-container-title flex flex-col w-2/5 overflow-hidden bg-lightred md:w-full ">
      <span id="academic" class="text-darkred text-[15rem] font-bold">EMIQUE</span>
      <span id="academic" class="text-darkred text-[15rem] font-bold ml-28 -mt-40">ACADEMIQUE</span>
    </div>
  </div> -->


  <!-- <div
    class="projects-academic-grid-container grid grid-cols-2 gap-8 p-8 md:grid-cols-1">
    <div class="charrue-container relative w-fit h-fit group overflow-hidden">
    <img
      src="../assets/projects/charrues/pancart.png"
      loading="lazy"
      alt="pancart-charrues"
      class="w-full h-auto"
    />
    <div
      class="charrue-overlay flex flex-col  justify-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="charrue-text p-4">
        <span class="text-[3rem] font-bold text-darkred block mb-2">
          Les Charrues
        </span>
        <router-link
          to="/projet/charrues"
          class="bg-darkred text-white py-2 px-4 hover:bg-red-600 transition"
        >
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>





  <div class="pettokaskes-container relative w-fit h-fit group">
    <img
      src="../assets/projects/pettokaskes/mockup-flyer.webp"
      loading="lazy"
      alt="mockup-flyer"
      class="w-full h-auto"
    />
    <div
      class="pettokaskes-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="pettokaskes-text p-4 ">
          <span class="text-[3rem] font-bold text-darkred block mb-2">
          Pettokaskes
        </span>

      </div>
    </div>
  </div>


  <div class="purina-container relative w-fit h-fit group">
    <img
      src="../assets/projects/purina/logo-purina.png"
      loading="lazy"
      alt="logo-purina"
      class="w-full h-auto bg-white"
    />
    <div
      class="purina-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="purina-text p-4">
          <span class="text-[3rem] font-bold text-darkred block mb-2">
          Purina
        </span>
        <router-link
          to="/projet/purina"
          class="bg-darkred text-white py-2 px-4 hover:bg-red-600 transition"

        >
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>

  <div class="dday-container relative w-fit h-fit group -mt-8 md:mt-0">
    <img
      src="../assets/projects/reviers/mockup.webp"
      loading="lazy"
      alt="mockup-reviers"
      class="w-full h-auto"
    />
    <div
      class="dday-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="dday-text p-4">
        <span class="text-[3rem] font-bold text-darkred block mb-2">
          Reviers
        </span>

      </div>
    </div>
  </div>
  </div> -->
<!-- </div> -->


<div id="professional-project" class="professional-projects-container w-full mt-24 overflow-hidden">
    <div class="top-professional-projetcs-container flex justify-center items-center flex-row-reverse">
        <div class="left-professional-projects-container-title w-3/5 flex items-center justify-center md:absolute md:w-full">
            <span class="text-[8rem] relative font-bold text-darkred w-fit md:text-[4rem] md:text-center ">
                Professionels
                <span class="text-lightpink font-relation text-[6rem] absolute left-10 top-10 md:left-6 md:top-5 md:text-[3rem]">
                    Projets
                </span>
            </span>
        </div>
        <div class="left-professional-projects-container-title flex flex-col w-2/5 overflow-hidden bg-lightred md:w-full">
            <span id="academic" class="text-darkred text-[15rem] font-bold">SSIONNEL</span>
            <span id="academic" class="text-darkred text-[15rem] font-bold ml-28 -mt-40">PROFESSIONNEL</span>
        </div>
    </div>

    <div class="projects-grid-container grid grid-cols-2 gap-8 p-8 md:grid-cols-1">
      <div class="bienvoir-container relative w-fit h-fit group">
    <img
      src="../assets/projects/bienvoir/article_2.png"
      loading="lazy"
      alt="mockup-reviers"
      class="w-full h-auto"
    />
    <div
      class="bienvoir-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="bienvoir-text p-4">
        <span class="text-[3rem] font-bold text-darkred block mb-2">
          Bienvoir
        </span>
        <router-link
          to="/projet/bienvoir"
          class="bg-darkred text-white py-2 px-4 hover:bg-red-600 transition"

        >
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>

</div>
</div>



<div id="personnal-project" class="personnal-projects-container w-full mt-24">
    <div class="top-personnal-projetcs-container flex justify-center items-center">
        <div class="left-personnal-projects-container-title w-3/5 flex items-center justify-center md:absolute md:w-full">
            <span class="text-[8rem] relative font-bold text-darkred w-fit md:text-[4rem] md:text-center ">
                Personnels
                <span class="text-lightpink font-relation text-[6rem] absolute left-10 top-10 md:left-6 md:top-5 md:text-[3rem]">
                    Projets
                </span>
            </span>
        </div>
        <div class="left-personnal-projects-container-title flex flex-col w-2/5 overflow-hidden bg-lightred md:w-full">
            <span id="academic" class="text-darkred text-[15rem] font-bold">ONNEL</span>
            <span id="academic" class="text-darkred text-[15rem] font-bold ml-28 -mt-40">PERSONNEL</span>
        </div>
    </div>

    <div class="projects-grid-container grid grid-cols-2 gap-8 p-8 md:grid-cols-1">
      <div class="lucie-container relative w-fit h-fit group">
    <img
      src="../assets/projects/lucie/carte.webp"
      loading="lazy"
      alt="carte-lucie"
      class="w-full h-auto"
    />
    <div
      class="lucie-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="lucie-text p-4">
        <span class="text-[3rem] font-bold text-darkred block mb-2">
          Lucie Bisson
        </span>
        <router-link
          to="/projet/lucie"
          class="bg-darkred text-white py-2 px-4 hover:bg-red-600 transition"

        >
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>

  <div class="dday-container relative w-fit h-fit group">
    <img
      src="../assets/projects/lucie/logostacklab.png"
      loading="lazy"
      alt="stacklab-logo"
      class="w-full h-auto"
    />
    <div
      class="dday-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      <div class="dday-text p-4">
        <span class="text-[3rem] font-bold text-darkred block mb-2">
          Stacklab
        </span>
        <router-link
          to="/projet/stacklab"
          class="bg-darkred text-white py-2 px-4 hover:bg-red-600 transition"

        >
          En savoir plus
        </router-link>
      </div>
    </div>
  </div>



</div>
</div>

</div>
  </template>
<script>
import { animate, scroll } from "@motionone/dom";
import { onMounted } from "vue";

export default {
  name: "Projects",
};
</script>


  <style scoped>
    #academic {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.9px;
    transform: rotate(-20deg);
    translate: -25%;
  }




  </style>
  