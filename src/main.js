import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import AdminPanel from './components/AdminPanel.vue'
import CustomerPage from './components/CustomerPage.vue'

import InputText from "primevue/inputtext"
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Paginator from 'primevue/paginator';

const app = createApp(App);

app.use(PrimeVue);

app.component("Login", Login);
app.component("Register", Register);
app.component("AdminPanel", AdminPanel);
app.component("CustomerPage", CustomerPage);

app.component("InputText", InputText);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Button", Button);
app.component("Card", Card);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Paginator", Paginator);


app
    .use(router)
    .use(store)
    .mount('#app')


