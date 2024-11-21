<template>
    <div class="projects-container grid grid-cols-1 md:grid-cols-3 gap-8 mx-6 py-20">
      <!-- Parcours académique -->
      <router-link to="/portfolio/academic" class="hover:scale-105 transition-transform duration-300">
        <div
          class="project-card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center h-[40vh] flex items-center justify-center rounded-lg shadow-2xl cursor-pointer transform hover:shadow-xl"
        >
          <h2 class="text-4xl font-bold">🎓 Parcours académique</h2>
        </div>
      </router-link>
  
      <!-- Parcours professionnel -->
      <router-link to="/portfolio/professionnal" class="hover:scale-105 transition-transform duration-300">
        <div
          class="project-card bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-center h-[40vh] flex items-center justify-center rounded-lg shadow-2xl cursor-pointer transform hover:shadow-xl"
        >
          <h2 class="text-4xl font-bold">💼 Parcours professionnel</h2>
        </div>
      </router-link>
  
      <!-- Projets personnels -->
      <router-link to="/portfolio/personnal" class="hover:scale-105 transition-transform duration-300">
        <div
          class="project-card bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-center h-[40vh] flex items-center justify-center rounded-lg shadow-2xl cursor-pointer transform hover:shadow-xl"
        >
          <h2 class="text-4xl font-bold">✨ Projets personnels</h2>
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .projects-container {
    background-color: #f9fafb; /* Background de la section */
  }
  
  .project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animation fluide */
  }
  
  .project-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); /* Ombre plus marquée au survol */
  }
  </style>
  