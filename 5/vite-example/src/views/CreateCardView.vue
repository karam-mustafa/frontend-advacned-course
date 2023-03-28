<template>
  <div class="container my-5">
    <h3>Create a new card</h3>
    <div class="row">
      <div class="col">
        <input v-model="form.title" type="text" class="form-control" placeholder="Title">
      </div>
      <div class="col">
        <input v-model="form.description" type="text" class="form-control" placeholder="description">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <input v-model="form.id" type="text" class="form-control" placeholder="id">
      </div>
      <div class="col">
        <input @change="appendFile($event)" type="file" class="form-control">
      </div>
    </div>
    <button class="btn btn-primary mt-5 btn-block" @click="create">Submit</button>
  </div>
</template>
  
<script>

import { mapActions } from 'vuex'
export default {
  name: "CreateCardView",
  data() {
    return {
      form: {
        title: '',
        description: '',
        id: '',
        images: [],
      }
    }
  },
  methods: {
    ...mapActions(['createCard']),
    create() {
      // this.$store.dispatch('createCard', form)
      this.createCard(this.form).then(() => {
        this.$router.push({
          name:'cards'
        })
      })
    },
    appendFile(event) {
      this.form.images = [URL.createObjectURL(event.target.files[0])]
    }
  }
};
</script>