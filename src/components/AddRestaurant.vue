<template>
    <Header />
    <h1>Welcome to Add Restaurant Component!</h1>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'AddRestaurant',
    components : {Header},
    mounted(){
        let user = localStorage.getItem('user_info');
        if(!user){
            this.$router.push('/signup')
        }
    }
}
</script>
<style>
</style>