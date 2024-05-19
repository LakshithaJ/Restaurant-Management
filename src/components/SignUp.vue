<template>
    <div class="app-signup">
        <img class="app-logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Sign Up!</h1>
    <div class="app-signup-form-container">
        <input type="text" placeholder="Enter Name">
        <input type="email" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
        <input type="submit" value="Sign Up" >
    </div>
    </div>

</template>

<script>
export default {
    name : "SignUp"
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