<template>
  <div class="row px-5 py-5">
    Results length: {{ $store.getters.getCardsFromFilter?.length }}
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(card, index) of $store.getters.getCardsFromFilter">
          <th scope="row">{{ index }}</th>
          <td>{{ card.title }}</td>
          <td><img width="100" height="100" :src="card.images[0]"></td>
          <td>{{ card.description.slice(0, 25) }}</td>
          <td>
            <button class="btn btn-primary" @click="editCard(card)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
export default {
  name: 'CardsView',
  methods: {
    editCard(card) {
      this.$router.push({
        name: 'editCard',
        query: card
      })
    }
  }
}
</script>