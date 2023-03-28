<template>
  <div>
    <v-row style="margin: 20px 0" justify="center">
      <v-dialog v-model="dialog" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">
            Add new
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.title" :rules="[v => !!v || 'title type is required']"
                    label="Title"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="form.description" :rules="[v => !!v || 'description type is required']"
                    label="Description"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select v-model="form.specialization" :items="specializations"
                    :rules="[v => !!v || 'specialization type is required']" label="Item" required></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              Close
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
        <tr v-for="item in jobs" :key="item.title">
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.specialization }}</td>
          <td>
            <v-btn style="margin: 0 10px;" variant="flat" color="warning" @click="openEdit(item)">
              Edit
            </v-btn>
            <v-btn style="margin: 0 10px;" variant="flat" color="error">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>    
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ModuleComponent',
  data() {
    return {
      dialog: false,
      form: {
        specialization: '',
        description: '',
        title: ''
      },
      specializations: [
        'design',
        'web',
        'mobile',
      ]
    }
  },
  computed: {
    ...mapState('companies', ['jobs']),
  },
  methods: {
    ...mapActions('companies', ['newOrEdit']),
    save() {
      this.newOrEdit(this.form).then(() => {
        this.dialog = false
      })
    },
    openEdit(item) {
      this.form.title = item.title;
      this.form.description = item.description;
      this.form.specialization = item.specialization;
      this.form.id = item.id;
      this.form.isEdit = true;
      this.dialog = true;
    },
    close() {
      this.form.title = '';
      this.form.description = '';
      this.form.specialization = '';
      this.dialog = false;
    }
  }
}
</script>