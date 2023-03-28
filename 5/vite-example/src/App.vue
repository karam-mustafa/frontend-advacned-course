<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
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
input, select{
  margin: 0;
}
</style>
