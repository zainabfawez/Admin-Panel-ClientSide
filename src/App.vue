<template>
  <div id="app">
   
      <h1 > Topotrade.com </h1>

      
    <TabView :activeIndex="activeIndex">
      <TabPanel header="Login">
        <Login/>
      </TabPanel>
      <TabPanel header="Register">
        <Register/>
      </TabPanel>
      
    </TabView>

    <!-- <router-link to="/">Register</router-link> |
    <router-link to="/login">Login</router-link> -->

  </div>
  <!-- <router-view/> -->
</template>

<script>

  import Login from './components/Login.vue'
  import Register from './components/Register.vue'
  export default {
    name: 'App',
    components: {
      Login,
      Register
    }
}

</script>

<style>

</style>
