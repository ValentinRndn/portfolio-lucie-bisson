<template>
  <div class="home-container h-full w-full">
  <Welcome />
  <Introduction />
  <Curriculum />
  <Projects />
</div>
</template>

<script>
import Welcome from '../components/Welcome.vue';
import Introduction from '../components/Introduction.vue';
import Curriculum from '../components/Curriculum.vue';
import Projects from '../components/Projects.vue';

export default {
  components: {
    Welcome,
    Introduction,
    Curriculum,
    Projects,
  },
};
</script>
