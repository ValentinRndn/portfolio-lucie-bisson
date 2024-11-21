<template>
    <aside>
<div class="navbar-container flex justify-between text-xl py-20 text-white bg-darkblue">
    <div class="navbar-left-container ml-24">
        <h1><router-link to="/">LUCIE BISSON</router-link></h1>
    </div>
    <div class="navbar-right-container mr-24 ">
        <ul class="flex gap-10 ">
        <li><router-link to="/about">A propos</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>

    </ul>
    </div>
</div>
</aside>
</template>

<script>
export default { 
    name: 'Navbar'
}
</script>