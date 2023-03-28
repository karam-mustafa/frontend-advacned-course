<template>
  <div class="container my-5">
    <h3>edit a card</h3>
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
    <button class="btn btn-primary mt-5 btn-block" @click="edit">Submit</button>
  </div>
</template>
  
<script>

import { mapActions } from 'vuex'
export default {
  name: "EditCardView",
  created() {
    this.form.title = this.$route.query?.title || '';
    this.form.description = this.$route.query?.description || '';
    this.form.id = this.$route.query?.id || '';
    this.form.images = this.$route.query?.images || '';
  },
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
    ...mapActions(['editCard']),
    edit() {
      // this.$store.dispatch('createCard', form)
      this.editCard(this.form).then(() => {
        this.$router.push({
          name: 'cards'
        })
      })
    },
    appendFile(event) {
      this.form.images = [URL.createObjectURL(event.target.files[0])]
    }
  }
};
</script>