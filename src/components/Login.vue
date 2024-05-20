<template>
    <div class="app-signup">
        <img class="app-logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Log in</h1>
    <div class="app-signup-form-container">
        <input type="email" v-model="userEmail" placeholder="Enter Email">
        <input type="password" v-model="userPassword" placeholder="Enter Password">
        <input type="submit" v-on:click="onLogin" value="Login" >
        <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
    </div>

</template>
<script>
export default{
    name: "Login"
}
</script>
<style>
</style>