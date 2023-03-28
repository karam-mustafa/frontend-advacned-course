<template>
  <v-sheet class="mx-auto w-75">
      <v-form ref="form">
          <v-text-field v-model="form.name" :counter="3" :rules="[v => !!v || 'Name is required']" label="Name"
              required></v-text-field>
          <v-text-field v-model="form.email" :counter="3" :rules="[v => !!v || 'Email is required']" label="Email"
              required></v-text-field>
          <v-text-field v-model="form.password" :counter="5" :rules="[v => !!v || 'Password is required']"
              label="Password" required></v-text-field>
          <v-select v-model="form.user_type" :items="usersTypes" :rules="[v => !!v || 'user type is required']"
              label="Item" required></v-select>
          <div class="d-flex flex-column">
              <v-btn color="success" class="mt-4" block @click="registerMethod">
                  Register
              </v-btn>
          </div>
      </v-form>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  data: () => ({
      valid: true,
      form: {
          name: '',
          email: '',
          password: '',
          user_type: ''
      },

      usersTypes: [
          'Freelancer',
          'Company',
      ]
  }),

  methods: {
      ...mapActions('main', ['register']),
      async registerMethod() {
          const { valid } = await this.$refs.form.validate()
          if (valid) {
              this.register(this.form).then(res => {
                  alert(res.message)
              })
              this.$router.push({
                  name: 'home'
              })
          }
      },
  },
}
</script>