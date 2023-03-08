<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <!-- <HomeView firstnumber2="3" secondnumber2="5" /> -->
    <NavbarComponent />
    <CardsComponent></CardsComponent>
  </div>
</template>

<script>
import CardsComponent from "./views/CardsComponent.vue";
import NavbarComponent from "./views/componentes/NavbarComponent.vue";
import HomeView from "./views/HomeView.vue";

export default {
  created() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        this.$store.dispatch('addCards', res.products)
      });
  },
  data() {
    return {
      cards: [],
    }
  },
  components: {
    HomeView,
    CardsComponent,
    NavbarComponent
},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
