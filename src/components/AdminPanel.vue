<template>
  <div style=".flex-row">
    <h4>Customers List</h4>
    <h6>Filter by:</h6>
  </div>

  <div class="p-formgroup-inline" style="display: flex">
    <div class="p-field">
        <label for="email" class="p-sr-only" >Email</label>
        <InputText type="text" placeholder="Email" v-model="email" style="margin: 5px"/>
    </div>
    <div class="p-field">
        <label for="firstname" class="p-sr-only">First Name</label>
        <InputText type="text" placeholder="First Name"  v-model="first_name" style="margin: 5px" />
    </div>
    <Button 
      
      icon="pi pi-search" 
      type="button" 
      style="margin: 5px"
      @click="handleSearch"
    />
</div>
  
  <!-- <div>
    <input v-model="email" placeholder="Email" style="margin: 10px" />
    <input v-model="first_name" placeholder="First Name" style="margin: 10px" />
    <Button
      style="margin: 10px"
      class="p-button-raised p-button-sm "
      icon="pi pi-search"
      @click="handleSearch"
    />
  </div> -->

  <DataTable :value="customers" :rows="paginationOption">
    <Column field="id" header="Id"></Column>
    <Column field="first_name" header="First Name"></Column>
    <Column field="last_name" header="Last Name"></Column>
    <Column field="email" header="Email"></Column>
  </DataTable>

  <Paginator
    v-model:first="offset"
    :rows="rows"
    :totalRecords="totalCustomers"
    @page="onPage"
    :rowsPerPageOptions="[20, 50, 100]"
  >
  </Paginator>

</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "AdminPanel",

  data() {
    return {
      offset: 1,
      customers: [],
      totalCustomers: 0,
      rows: 20,
      email: "",
      first_name: "",
      paginationOption: 20,
    };
  },
  mounted() {
    this.handleSearch()
  },
  methods: {
    onPage($event) {
      this.handleSearch($event.page + 1, $event.rows)
    },
    handleSearch(page = 1, paginationOption = 20) {
      UserService.getFilteredCustomers(
        this.email,
        this.first_name,
        paginationOption,
        page
      ).then(
        (response) => {
          this.customers = response.data.data.data;
          this.totalCustomers = response.data.data.total;
       
        },
        () => {
          this.content = "";
        }
      );
    },
  },
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}

.button {
  position: absolute;
  bottom: 10%;
  right: 10%;
}

.input_ {
  margin: 15px 0px;
}
</style>