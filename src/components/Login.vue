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
import axios from 'axios';
export default{
    name: "Login",
    data(){
        return {
            userEmail: "",
            userPassword: "",
            getURL: 'http://localhost:3000/users'
        }
    },
    methods :{
        async onLogin(){
            let res = await axios.get(this.getURL + `?email=${this.userEmail}&password=${this.userPassword}`);
            if(res.status === 200 && res.data.length){
                localStorage.setItem('user_info', JSON.stringify(res.data[0]));
                this.$router.push('/');
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user_info');
        if(user){
            this.$router.push('/')
        }
    }

}
</script>
<style>
</style>