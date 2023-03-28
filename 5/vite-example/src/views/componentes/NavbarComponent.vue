<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse container" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="link of links">
            <router-link class="nav-link" :to="link.to">{{ link.title }}</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input @input="search" v-model="searchText" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      searchText: '',
      links: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Cards',
          to: '/cards'
        },
        {
          title: 'Create card',
          to: '/create'
        },
      ]
    }
  },
  methods: {
    search() {
      this.$store.dispatch('applySearch', this.searchText)
    }
  }
}
</script>
<style>
.nav-link {
  cursor: pointer;
}
</style>