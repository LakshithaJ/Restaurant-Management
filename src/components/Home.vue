<template>
    <Header />
    <h1>Welcome to Home Component {{name.toUpperCase()}}!</h1>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'Home',
    data(){
        return{
        name : ''
        }
    },
    components : {Header},
    mounted(){
        let user = localStorage.getItem('user_info');
        
        if(!user){
            this.$router.push('/signup')
        }else {
            this.name = JSON.parse(user).name;
        }
    }
}
</script>
<style>
</style>