<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Job title
          </th>
          <th class="text-left">
            Job Description
          </th>
          <th class="text-left">
            Job Specialization
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in jobs" :key="item.title"
          :class="{ 'bg-green': item?.users?.find(item => item.email == loginInfo.email)?.isAccepted }">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.specialization }}</td>
          <td>
            <v-btn v-if="!item?.users?.find(item => item.email == loginInfo.email)" style="margin: 0 10px;" variant="flat"
              color="warning" @click="applyMethod(item)">
              Apply
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>    
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ModuleComponent',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('companies', ['jobs']),
    ...mapState('main', ['loginInfo'])

  },
  methods: {
    ...mapActions('companies', ['apply']),
    applyMethod(item) {
      const data = { userEmail: this.loginInfo.email, jobId: item.id };
      this.apply(data).then(() => {
        alert('you have successfully applied')
      })
    }
  }
}
</script>

<style>
.bg-green {
  background-color: rgba(0, 128, 0, 0.367);
}
</style>