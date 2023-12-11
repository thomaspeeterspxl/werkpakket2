<template>
  <nav class="navbar">
    <img src="../assets/images/Layer%206.png" alt="nav image">
    <ul>
      <li><router-link to="/"><i class="fa-solid fa-house"></i></router-link></li>
      <li><router-link to="/products">Producten</router-link></li>
      <li><router-link to="/:Contact">Contact</router-link></li>
      <li><router-link to="/LogIn"><i class="fa-solid fa-user"></i></router-link></li>
      <li><router-link to="/winkelmand"> <i class="fa-solid fa-cart-shopping"></i></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>

</style>