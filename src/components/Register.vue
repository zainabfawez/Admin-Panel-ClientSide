<template>

    <h2 style = "margin-top: 20px; margin-bottom: 30px" >Register Page</h2>

    <div style="width:200px; margin:0 auto">

      <form @submit.prevent="handleRegistration({first_name, last_name, email, password})">

        <span class="p-float-label" style= "margin-top:10px"  >
          <InputText id="first-name" type="text" v-model="first_name" />
          <label for="first-name">First Name</label>
        </span>

        <!-- <template
          v-for="error of v$.first_name.$errors"
          :key="error.$uid"
        >
        <p  style = "color:red; font-size: 10px">{{ error.$message }}</p>
        </template> -->
        
        <span class="p-float-label" style= "margin-top: 10px"  >
          <InputText id="last-name" type="text" v-model="last_name" />
          <label for="last-name">Last Name</label>
        </span>
         
        <!-- <template
          v-for="error of v$.last_name.$errors"
          :key="error.$uid"
        >
        <p  style = "color:red; font-size: 10px">{{ error.$message }}</p>
        </template> -->

        <span class="p-float-label" style= "margin-top: 10px"  >
          <InputText id="email" type="email" v-model="email" />
          <label for="email">Email</label>
        </span>
  
        <!-- <template
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
        <p  style = "color:red; font-size: 10px">{{ error.$message }}</p>
        </template> -->
        
        <span class="p-float-label " style= "margin-top :10px" >
          <InputText id="password" type="password" v-model="password" />
          <label for="password">Password</label>
        </span>
<!-- 
        <template
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
        <p  style = "color:red; font-size: 10px">{{ error.$message }}</p>
        </template> -->

        <Button label="Register" class="p-button-outlined" type= "submit" style= "margin-top:10px"  />

        <label> {{message}} </label>
 
      </form>

    </div>

</template>

<script>

  // import useVuelidate from '@vuelidate/core'
  // import { required, email } from '@vuelidate/validators'


  export default {

    name: 'Register',

    // setup () {
    //   return { v$: useVuelidate() }
    // },

    data() {
        return {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          message: "",
        };
    },

    // validations () {
    //   return {
    //       email: { required, email },
    //       password: {required},
    //       first_name: {required},
    //       last_name: {required},
    //   }
    // },

    methods: {
      handleRegistration(user) {
        this.$store.dispatch("register", user).then(
          () => {
            this.message = "Registration Success! Back to login please ";
          },
          () => {
            this.message = "Registration Failed";
          }
        );
      },
  },
  }
</script>

<style>
    h2 {text-align: center;}

    
</style>