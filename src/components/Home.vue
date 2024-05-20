<template>
    <h1>Welcome to Home Component!</h1>
</template>
<script>
export default {
    name: 'Home',
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