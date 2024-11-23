<template>
  <div class="home-container h-full w-full">
  <Welcome />
  <Introduction />
</div>
  <!-- <div class="content font-fira text-center py-32 h-[100vh] overflow-x-hidden text-black w-1/3 bg-midbrown bg-opacity-80">
    <h1 class="text-7xl">Lucie bisson</h1>
    <span class="text-2xl">Chargée de communication </span>
</div> -->
</template>

<script>
import Welcome from '../components/Welcome.vue';
import Introduction from '../components/Introduction.vue';

export default {
  components: {
    Welcome,
    Introduction,
  },
};
</script>
