<template>
    <Header />
    <h1>Welcome to Update Restaurant Component!</h1>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'UpdateRestaurant',
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