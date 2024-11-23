<template>
    <div class="projects-container w-full flex flex-col justify-center items-center bg-black gap-20">
        <div class="projects-container-title">
        <span class="text-[10rem] relative font-bold text-darkred">
  Projets
  <span class="text-lightpink font-relation text-[5rem] absolute left-8 top-16 ">
    Découvrez
  </span>
</span>
</div>

<div class="projects-button-container flex justify-evenly w-full">
        
    <div class="academic-button-container relative h-fit w-fit">
    <div class="backpicture w-full h-full border-2 border-lightpink absolute top-4 right-4 "></div>
    <div class="skills-top-left-container bg-lightred p-6 border-2 border-darkred relative  ">
        <div class="content flex flex-col text-center items-center justify-center">
        <div class="title-experiences ">
            <span class="text-[3rem] relative font-bold text-darkred">
            Académiques
            <span class="text-lightpink font-relation text-[2.8rem] absolute left-4 top-1">
                Projets
            </span>
            </span>
        </div>
        </div>
    </div>
    </div>

    <div class="professional-buttton-container relative h-fit w-fit">
    <div class="backpicture w-full h-full border-2 border-lightpink absolute top-4 right-4 "></div>
    <div class="skills-top-left-container bg-lightred p-6 border-2 border-darkred relative  ">
        <div class="content flex flex-col text-center items-center justify-center">
        <div class="title-experiences ">
            <span class="text-[3rem] relative font-bold text-darkred">
            Professionels
            <span class="text-lightpink font-relation text-[2.8rem] absolute left-4 top-1">
                Projets
            </span>
            </span>
        </div>
        </div>
    </div>
    </div>

    <div class="personnal-button-container relative h-fit w-fit">
    <div class="backpicture w-full h-full border-2 border-lightpink absolute top-4 right-4 "></div>
    <div class="skills-top-left-container bg-lightred p-6 border-2 border-darkred relative  ">
        <div class="content flex flex-col text-center items-center justify-center">
        <div class="title-experiences ">
            <span class="text-[3rem] relative font-bold text-darkred">
            Personnels
            <span class="text-lightpink font-relation text-[2.8rem] absolute left-4 top-1">
                Projets
            </span>
            </span>
        </div>
        </div>
    </div>
    </div>
</div>

<div class="academic-projects-container  w-full mt-24">
    <div class="top-academic-projetcs-container flex justify-center items-center">
        <div class="left-academic-projects-container-title w-3/5 flex items-center justify-center">
            <span class="text-[8rem] relative font-bold text-darkred">
                Académiques
                <span class="text-lightpink font-relation text-[6rem] absolute left-10 top-10 ">
                    Projets
                </span>
            </span>
        </div>
        <div class="left-academic-projects-container-title flex flex-col w-2/5 overflow-hidden bg-lightred">
            <span id="academic" class="text-darkred text-[15rem] font-bold ">EMIQUE</span>
            <span id="academic" class="text-darkred text-[15rem] font-bold ml-28 -mt-40">ACADEMIQUE</span>
        </div>
    </div>
</div>


</div>
  </template>
  
  <script>
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
  