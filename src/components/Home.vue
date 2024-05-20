<template>
    <Header />
    <h1>Welcome to Home Component {{name.toUpperCase()}}!</h1>
    <table border="1" class="app-table">
  <thead>
    <tr>
      <th>Restaurant ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="restaurant in restaurants" :key="restaurant.id">
       <td>{{ restaurant.id }}</td> 
       <td>{{ restaurant.name }}</td>  
       <td>{{ restaurant.address }}</td> 
       <td>{{ restaurant.phone }}</td>  
    </tr>
   </tbody>
</table>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'Home',
    data(){
        return{
        name : '',
        restaurants : [],
        getRestaurantsUrl : 'http://localhost:3000/restaurants'
        }
    },
    components : {Header},
    async mounted(){
        let user = localStorage.getItem('user_info');
        if(!user){
            this.$router.push('/signup')
        }else {
            this.name = JSON.parse(user).name;
            let res = await axios.get(this.getRestaurantsUrl);
            this.restaurants = res.data;
        }
    }
}
</script>
<style>
.app-table{
    width: 75%;

    td, th {
        padding: 10px;
    }
}
</style>