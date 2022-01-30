<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Recipe App</router-link></li>
            
            
        </ul>
    </nav>
</template>

<script>

export default ({
})
</script>

<style scoped>

ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: rgb(124, 93, 6);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: rgb(100, 99, 4);
    color: rgb(196, 177, 14);
}
.router-link-active{
    background: rgba(238, 210, 54, 0.692);
    color: rgb(255, 249, 249);
}
</style>
