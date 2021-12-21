<template>

    <h2>Login Page</h2>

    <div style="width:200px; margin:0 auto">

      <span class="p-float-label input_" >
        <InputText id="email" type="email" v-model="email" />
        <label for="email">Email</label>
      </span>
      
      <span class="p-float-label input_"  >
        <InputText id="password" type="password" v-model="password" />
        <label for="password">Password</label>
      </span>

      
      <Button label="Login" class="p-button-outlined" />

    </div>

</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
        email: "",
        password: "",
      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h2 {text-align: center;}

    .input_ {
      
      display: block;
      margin: 10px 0px !important;
    }
</style>