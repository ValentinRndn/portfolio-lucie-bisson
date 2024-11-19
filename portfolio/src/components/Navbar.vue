<template>
<div class="navbar-container flex justify-between mx-20 text-xl py-10">
    <div class="navbar-left-container">
        <h1>Logo</h1>
    </div>
    <div class="navbar-right-container ">
        <ul class="flex gap-10 ">
        <li><router-link to="/">A propos</router-link></li>
        <li><router-link to="/">Portfolio</router-link></li>
        <li><router-link to="/">Contact</router-link></li>

    </ul>
    </div>
</div>

</template>

<script>
export default {
    name: 'Navbar'
}
</script>