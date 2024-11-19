<template>
  <div class="footer-container relative flex justify-between text-white bg-black py-14 mx-36  ">
    <div class="footer-logo">
<img src="../assets/home/perso-copie.png" alt="pp-footer " class="w-[100px] object-cover rounded-full border border-slate-200">    
</div>
<div class="footer-right flex gap-28">
    <div class="footer-end flex flex-col items-center ">
      <h1 class="text-xl font-semibold mb-2">CONTACT</h1>
      <a href="https://discord.com/users/413353493898854400">
      <p class="discord text-light-grey">Discord</p>
      </a>
      <a href="https://www.linkedin.com/in/valentin-renaudin-b908b8263/">
        <p class="linkedin text-light-grey">Linkedin</p>
        </a>
        <a href="https://github.com/ValentinRndn">
          <p class="github text-light-grey">Github</p>
          </a>
        <a href="https://www.malt.fr/profile/valentinrenaudin">
          <p class="malt text-light-grey">Malt</p>
          </a>

    </div>

    <div class="footer-end flex flex-col items-center">
      <h1 class="text-xl font-semibold mb-2">LEGAL</h1>
      <a href="">
      <p class="conditions text-light-grey">Conditions d'utilisations</p>
      </a>
      <a href="mentions">
        <p class="mentions text-light-grey">Mentions légales</p>
        </a>

    </div>
  </div>
  </div>
  <p class="text-light-grey text-center">Copyright © 2024 Valentin RENAUDIN. Tous droits réservés. </p>

</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>


.footer-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px; /* Taille de la bordure */
  background: linear-gradient(to right, transparent, #0038C9, transparent);
}
</style>
