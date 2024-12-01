<template>
  <div v-if="isLoading" class="loading-screen fixed inset-0 bg-darkred flex items-center justify-center">
    <div class="loading-spinner w-16 h-16 border-4 border-lightred border-t-transparent rounded-full animate-spin"></div>
  </div>

  <div v-else class="welcome-container h-screen w-full text-black flex flex-col items-center justify-center z-0 px-4">
    <div
      class="portfolio-container text-white text-xxl font-bold flex justify-center items-center relative border-b-2 border-lightred py-4 md:text-[6rem]"
      :class="{ 'fade-in': !isLoading }"
    >
      <div class="absolute top-[17px] left-0 w-[2px] h-[5%] bg-lightred"></div>
      <div class="absolute bottom-[0] left-0 w-[2px] h-[5%] bg-lightred"></div>
      <div class="absolute bottom-[0] right-0 w-[2px] h-[5%] bg-lightred"></div>

      <div class="portofolio-left-container flex flex-col">
        <span class="border-t-2 border-lightred relative duration-200 ease-out">
          PORT
          <div class="absolute top-[0] right-0 w-[2px] h-[11%] bg-lightred"></div>
        </span>

        <span>FOLIO<span class="text-darkred">.</span></span>
      </div>
      <div class="portfolio-right-container">
        <img
          src="../assets/home/logo.png"
          alt="Logo portfolio"
          class="w-[300px]"
        />
      </div>
    </div>
    <span
      class="text-lightred font-relation text-[11rem] absolute blur-sm md:text-[8rem] fade-in"
      :class="{ 'fade-in': !isLoading }"
    >
      Portfolio
    </span>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Simule un chargement (2 secondes)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style scoped>
/* Effet de chargement */
.loading-screen {
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.loading-spinner {
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Effet d'apparition */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
 