import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import store from "./store";
import router from "./router";

const app = createApp(App);


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


app.use(vuetify);
app.use(store);
app.use(router);
app.mount("#app");
