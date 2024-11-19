<template>
<div class="navbar-container flex justify-between mx-20 text-xl py-10 text-white ">
    <div class="navbar-left-container">
        <h1><router-link to="/">Portfolio</router-link></h1>
    </div>
    <div class="navbar-right-container ">
        <ul class="flex gap-10 ">
        <li><router-link to="/about">A propos</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>

    </ul>
    </div>
</div>

</template>

<script>
export default { 
    name: 'Navbar'
}
</script>