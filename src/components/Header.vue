<template>
    <ul class="app-nav-container">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/addRestaurant">Add Restaurant</router-link></li>
        <li><router-link to="/updateRestaurant">Update Restaurant</router-link></li>
        <li><router-link to="" v-on:click="onLogout" >Logout</router-link></li>
    </ul>
</template>
<script>
export default {
    name: 'Header',
    methods :{
        onLogout(){
            localStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>
<style>
.app-nav-container{
    list-style: none;
    display: flex;
    justify-content: end;
    align-items: end;
    background: #7bc4c4;
    margin: 0;
    padding: 25px 15px;

    a{
        text-decoration: none;
        color: #fff;
        padding: 5px;
    }

    li {
        margin: 0 5px;
    }
    a:hover{
        background-color: #fff;
        color: #7bc4c4;
        border-radius: 5px;
    }
}
@media screen and (max-width: 600px) {
    .app-nav-container {
        flex-direction: column;

        li {
            margin: 3px 0;
        }
    }
}
</style>