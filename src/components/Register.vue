<template>

    <h2>Register Page</h2>

    <div style="width:200px; margin:0 auto">

      <form @submit.prevent="handleRegistration">

        <span class="p-float-label input_" >
          <InputText id="first-name" type="text" v-model="first_name" />
          <label for="first-name">First Name</label>
        </span>
        
        <span class="p-float-label input_"  >
          <InputText id="last-name" type="text" v-model="last_name" />
          <label for="last-name">Last Name</label>
        </span>

        <span class="p-float-label input_" >
          <InputText id="email" type="email" v-model="email" />
          <label for="email">Email</label>
        </span>
        
        <span class="p-float-label input_"  >
          <InputText id="password" type="password" v-model="password" />
          <label for="password">Password</label>
        </span>

        <span class="p-float-label input_"  >
          <InputText id="password-confirmation" type="password" v-model="password_confirmation" />
          <label for="password-confirmation">Confirm Password</label>
        </span>

        <Button label="Register" class="p-button-outlined" type= "submit" />

      </form>

    </div>

</template>

<script>
export default {
  name: 'Register',
  data() {
      return {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h2 {text-align: center;}

    .input_ {
      
      display: block;
      margin: 30px 0px !important;
    }
</style>