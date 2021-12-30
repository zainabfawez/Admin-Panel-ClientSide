<template>

    <h2>Login Page</h2>

    <div style="width:200px; margin:0 auto">
    
      <form @submit.prevent="handleLogin({email, password})">
      
        <span class="p-float-label input_" >
          <InputText id="email" type="email" v-model="email" />
          <label for="email">Email</label>
        </span>
        
        <span class="p-float-label input_"  >
          <InputText id="password" type="password" v-model="password" />
          <label for="password">Password</label>
        </span>

        <Button label="Login" class="p-button-outlined" type="submit"/>
        <br>

        <label> {{message}} </label>

      </form>
      
    </div>

</template>

<script>


export default {
  name: "Login",
  
   data() {
      return {
        email: "",
        password: "",
        message: "",
      };
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

    .input_ {
      display: block;
      margin: 30px 0px !important;
    }
</style>