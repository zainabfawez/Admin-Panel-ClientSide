<template>
  <div id="app">
    <div class="title">
      <h1> Topotrade.com </h1>
    </div>
      
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
  .title {
    margin: 10px;
    margin-bottom: 20px;
  }
</style>
