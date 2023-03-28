<template>
  <v-layout>
    <v-app-bar color="drak" density="compact" style="padding: 0 60px;">
      <v-app-bar-title>Focal X</v-app-bar-title>

      <template v-slot:append>
        <v-btn style="margin: 0 10px;" v-if="!loginInfo" variant="flat">
          <router-link :to="{ name: 'loginPage' }">Login</router-link>
        </v-btn>
        <v-btn style="margin: 0 10px;" v-if="!loginInfo" variant="flat">
          <router-link :to="{ name: 'registerPage' }">Register</router-link>
        </v-btn>
        <v-btn style="margin: 0 10px;" variant="flat" @click="resolveHomeLink">
          Home
        </v-btn>
        <v-btn style="margin: 0 10px;" v-if="loginInfo" variant="flat" @click="logout">
          Logout
        </v-btn>
      </template>
    </v-app-bar>
    <v-main style="margin: 40px 0">
      <router-view style="margin: 0 80px;"></router-view>
    </v-main>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ModuleComponent',
  computed: {
    ...mapState('main', ['loginInfo'])
  },
  methods: {
    ...mapActions('main', ['logout']),
    resolveHomeLink() {
      if (this.loginInfo.user_type == 'Freelancer') {
        this.$router.push({
          name: 'usersComponent'
        })
      }
      else if (this.loginInfo.user_type == 'Company') {
        this.$router.push({
          name: 'companiesComponent'
        })
      } else {
        this.$router.push({
          name: 'adminsComponent'
        })
      }
    }
  }
}
</script>