<template>
    <ul class="app-nav-container">
        <li><a href="">Home</a></li>
        <li><a href="">Add Restaurant</a></li>
        <li><a href="">Update Restaurant</a></li>
        <li><a href="">Logout</a></li>
    </ul>
</template>
<script>
export default {
    name: 'Header',
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