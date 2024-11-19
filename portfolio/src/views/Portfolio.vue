<template>
    <h1>
        Portfolio
    </h1> 
    <div class="projects-container grid grid-cols-3 gap-4 mx-4 py-20">
        <router-link to="/portfolio/academic">
        <div class="project-card bg-midbrown text-center h-[40vh] flex items-center justify-center rounded-md cursor-pointer shadow-lg">
            <h2 class="text-3xl">Parcours académique</h2>
        </div>
    </router-link>
    <router-link to="/portfolio/professionnal">
        <div class="project-card bg-midbrown text-center h-[40vh] flex items-center justify-center rounded-md  cursor-pointer shadow-lg">
            <h2 class="text-3xl">Parcours professionel</h2>
        </div>
        </router-link>
        <router-link to="/portfolio/personnal">
        <div class="project-card bg-midbrown text-center h-[40vh] flex items-center justify-center rounded-md cursor-pointer shadow-lg">
            <h2 class="text-3xl">Projets personnels</h2>
        </div>
        </router-link>
    </div>
    
    </template>
      
      <script>
      </script>