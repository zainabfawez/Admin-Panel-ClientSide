<template>
  
     <div class="title">
      <h1> Topotrade.com </h1>
      
    </div>
      
    <TabView :activeIndex="activeIndex" v-if="$store.state.status.loggedIn == false">
      <TabPanel header="Login">
        <Login/>
      </TabPanel>
      <TabPanel header="Register">
        <Register/>
      </TabPanel>
    </TabView>

    <TabView :activeIndex="activeIndex" v-if="$store.state.status.loggedIn == true">
      <TabPanel header="Profile Page">
        <CustomerPage/>
      </TabPanel>
      <TabPanel header="Customers" v-if="$store.state.user.user.user_type == 1">
        <AdminPanel/>
      </TabPanel>
    </TabView>




</template>

<script>
   
    export default {
    name: 'Home',
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .title {
        margin: 10px;
        margin-bottom: 20px;
    }
    h3 {
    margin: 40px 0 0;
    }
</style>