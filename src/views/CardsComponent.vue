<template>
  <div class="row px-5 py-5">
    Results length: {{ $store.getters.getCardsFromFilter.length }}
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
        <tr v-for="(item, index) of $store.getters.getCardsFromFilter">
          <th scope="row">{{ index }}</th>
          <td>{{ item.title }}</td>
          <td><img width="100" height="100" :src="item.images[0]"></td>
          <td>{{ item.description.slice(0, 25) }}</td>
          <td>
            <button class="btn btn-primary" @click="openItem(item)">Open</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CardsComponent',
}
</script>