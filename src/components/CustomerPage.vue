<template>
  
  <div class = "info"> 
    <Card>
        <template #header>
            <img alt="user header" src="../assets/profile.png" class = "image">
        </template>
        <template #title>
          Personal Info
        </template>
        <template #content>
          First Name:  {{$store.state.user.user.first_name}}
          <br>
          Last Name: {{$store.state.user.user.last_name}}
          <br>
          Email: {{$store.state.user.user.email}}
        </template>       
    </Card>
  </div>

  <div class = "button">
      <Button label="Logout" class="p-button-outlined" @click="handleLogout"/>
  </div>
  


</template>

<script>
export default {
  name: 'CustomerPage',
  
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
    },
  
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .image {
   margin-top: 10%;
   margin-left: 25%;
   border-radius: 50%;
   height: 100px;
   width: 100px;
  }

 .info {
    display: block;
    margin: 30px 0px !important;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 }

 .button {
    position: absolute;
    bottom: 10%;
    right: 10%;
 }

</style>