<template>
  <div id="app w-100">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <!-- <HomeView firstnumber2="3" secondnumber2="5" /> -->
    <div class="text-center" v-html="temp1"></div>
    <div class="mx-auto my-5 w-100">
      <div v-if="openedItem.id" class="card" style="width: 18rem;">
        <img :src="openedItem.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ openedItem.title }}</h5>
          <p class="card-text">{{ openedItem.desc }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <CardsComponent :jsonData="cards" @openItemInParent="assignOpenedItemFromChild"></CardsComponent>


  </div>
</template>

<script>
import CardsComponent from "./views/CardsComponent.vue";
import HomeView from "./views/HomeView.vue";

export default {
  created() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => this.cards = res.products);
  },
  updated() {
    console.log('====================================');
    console.log(this.openedItem);
    console.log('====================================');
  },
  beforeUpdate() {
    console.log('====================================');
    console.log(this.openedItem, 123);
    console.log('====================================');
  },
  data() {
    return {
      cards: [],
      openedItem: {},
      temp1: `<h1>Hello from course</h1>`
    }
  },
  components: {
    HomeView,
    CardsComponent
  },
  methods: {
    assignOpenedItemFromChild(child) {
      this.openedItem.title = child.title;
      this.openedItem.image = child.images[0];
      this.openedItem.desc = child.description;
      this.openedItem.id = child.id;
    }
  }
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
