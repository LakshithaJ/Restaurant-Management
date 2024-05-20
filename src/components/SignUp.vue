<template>
    <div class="app-signup">
        <img class="app-logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Sign Up!</h1>
    <div class="app-signup-form-container">
        <input type="text" v-model="userName" placeholder="Enter Name">
        <input type="email" v-model="userEmail" placeholder="Enter Email">
        <input type="password" v-model="userPassword" placeholder="Enter Password">
        <input type="submit" v-on:click="onSignUp" value="Sign Up" >
    </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name : "SignUp",
    data(){
        return {
            userName: "",
            userEmail: "",
            userPassword: "",
            postURL: "http://localhost:3000/users"
        }
    },
    methods:{
        async onSignUp(){
            let res = await axios.post(this.postURL, {
                name : this.userName,
                email: this.userEmail,
                password: this.userPassword
            });

            if(res.status === 201){
                localStorage.setItem('user_info', JSON.stringify(res.data));
                this.$router.push('/');
            }
        }
    }
}
</script>
<style>
.app-logo{
    height: 10rem;
    width: 10rem;
    object-fit: contain;
    border-radius: 50%;
}
.app-signup{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.app-signup-form-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        border: 1px solid rgb(117, 111, 111);
        padding: 12px 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        font-size: 1rem;
    }
    input[type="submit"]{
        width: 10rem;
        background: #7bc4c4;
        font-weight: 400;
        color: #fff;
        border: none;
        cursor: pointer;
    }
}
</style>