<template>
    <div id="recipes"> 
      <ul >
        <li v-for="recipe in recipes" v-on:click="recipe.show = !recipe.show"  :key="recipe.id">
            <p><b>Published By:</b>{{recipe.publishedBy}}</p>
            <p v-show="recipe.show"><b>Cook Time:</b> {{recipe.cookTime}}</p>
            <p v-show="recipe.show"><b>Ingredients:</b>{{recipe.ingredients}}</p>
            <p v-show="recipe.show"><b>Category:</b>{{recipe.author}}</p>
        </li>
        
       </ul>
    </div>
</template>
<script>

export default {
        data(){
        return{
          recipes:[{
            id: '1',
            name: "Pancake",
            publishedBy: "Omotoke",
            categories: [],
            cookTime: "15 minutes",
            ingredients: 'Flour, Egg, Milk, Sugar, etc',
           
            show:false
        },
       
            // {
            //     id:'2',
            //     name:  'Salad',
            //     publishedBy: 'Omotoke',
            //     cookTime: '15 minutes',
            //     ingredients: 'Onions, Cabbage, Carrots, etc',
               
            //     show:false
            // },

            // {
            //     id:'3',
            //     name: 'Cake',
            //     publishedBy: 'Omotoke',
            //     cookTime: '15 minutes',
            //     ingredients: 'Flour, Icing, Food Coloring, Sugar, etc',
                
            //     show:false
            // },

            
        ]
       }
   }
    
}
</script>

<style scoped>
button{
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #998309;
    border-color: #998a06;
}
button:hover {
    color: #fff;
    background-color: #b3a705;
     border-color: #fdd90d;
}
li{
list-style: none ;
}
</style>
