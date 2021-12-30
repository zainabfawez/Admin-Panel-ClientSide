<template>

    <h2  style = "margin-top: 20px; margin-bottom: 30px">Login Page</h2>

    <div style="width:200px; margin:0 auto">
    
      <form @submit.prevent="handleLogin({email, password})">
      
        <span class="p-float-label "  style = "margin-top: 10px" >
          <InputText id="email" type="email" v-model="v$.email.$model" />
          <label for="email">Email</label>
        </span>

        <template
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
        <p style = "color:red ; font-size: 10px">{{ error.$message }}</p>
        </template>
       

        <span class="p-float-label " style = "margin-top: 10px">
          <InputText id="password" type="password" v-model="v$.password.$model" />
          <label for="password">Password</label>
        </span>

        
        <template
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
        <p  style = "color:red; font-size: 10px">{{ error.$message }}</p>
        </template>
     

        <Button label="Login" class="p-button-outlined" type="submit" style = "margin-top: 5px"/>
        <br>

        <label style="color: red"> {{message}} </label>

      </form>
      
    </div>

</template>

<script>
  

  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  export default {

    name: "Login",
    
    setup () {
      return { v$: useVuelidate() }
    },

    data() {
      return {
        email: '',
        password: "",
        message: "",
      };
    },

    validations () {
      return {
          email: { required, email },
          password: {required},
      }
    },


    methods: {
      handleLogin(user) {
        this.$store.dispatch("login", user).then(
          () => {
            this.message = "";
          },
          () => {
            this.message = "Login Failed";
          }
        );
      },
    },
  };
</script>


<style>
    h2 {text-align: center;}

</style>