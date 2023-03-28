<template>
    <v-sheet class="mx-auto w-75">
        <v-form ref="form">
            <v-text-field v-model="form.email" :counter="3" :rules="[v => !!v || 'Email is required']" label="Email"
                required></v-text-field>
            <v-text-field v-model="form.password" :counter="5" :rules="[v => !!v || 'Password is required']"
                label="Password" required></v-text-field>
            <div class="d-flex flex-column">
                <v-btn color="success" class="mt-4" block @click="loginMethod">
                    Login
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
            email: '',
            password: '',
        },
    }),

    methods: {
        ...mapActions('main', ['login']),
        async loginMethod() {
            const { valid } = await this.$refs.form.validate()
            if (valid) {
                this.login(this.form).then(res => {
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