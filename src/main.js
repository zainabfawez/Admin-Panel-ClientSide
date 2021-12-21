import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

import InputText from "primevue/inputtext"
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue);

app.component("InputText", InputText);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Button", Button);

app.use(router).mount('#app')



