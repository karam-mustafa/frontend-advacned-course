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
            <v-btn v-if="!isEdit" color="blue-darken-1" variant="text" @click="newMethod">
              Save
            </v-btn>
            <v-btn v-if="isEdit" color="blue-darken-1" variant="text" @click="updateMethod">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row style="margin: 20px 0" justify="center">
      <v-dialog v-model="appliersDialog" persistent width="1024">
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  User
                </th>
                <th class="text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in jobOpened.users" :key="item">
                <td>{{ item.email }}</td>
                <v-btn style="margin: 6px 10px;" variant="flat" color="success" @click="acceptAppliers(item)">
                  Accept
                </v-btn>
              </tr>
            </tbody>
          </v-table>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="appliersDialog = false">
              Close
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
            <v-btn style="margin: 0 10px;" variant="flat" color="warning" @click="openAppliers(item)">
              Appliers
            </v-btn>
            <v-btn style="margin: 0 10px;" variant="flat" color="warning" @click="openEdit(item)">
              Edit
            </v-btn>
            <v-btn style="margin: 0 10px;" variant="flat" color="error" @click="deleteMethod(item)">
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
      appliersDialog: false,
      jobOpened: {},
      form: {
        specialization: '',
        description: '',
        title: ''
      },
      isEdit: false,
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
    ...mapActions('companies', ['new', 'update', 'delete', 'accept']),
    newMethod() {
      this.new(JSON.parse(JSON.stringify(this.form))).then(() => {
        this.close();
      })
    },
    updateMethod() {
      this.update(JSON.parse(JSON.stringify(this.form))).then(() => {
        this.close();
      })
    },
    deleteMethod(item) {
      this.delete(item.id)
    },
    openEdit(item) {
      this.form.title = item.title;
      this.form.description = item.description;
      this.form.specialization = item.specialization;
      this.form.id = item.id;
      this.isEdit = true;
      this.dialog = true;
    },
    close() {
      this.form.title = '';
      this.form.description = '';
      this.form.specialization = '';
      this.dialog = false;
      this.isEdit = false;
    },
    openAppliers(item) {
      this.jobOpened = item;
      this.appliersDialog = true;
    },
    acceptAppliers(item) {
      this.accept({ jobId: this.jobOpened.id, userEmail: item.email }).then(() => {
        this.appliersDialog = false;
      })
    }
  }
}
</script>