<template>

  <div id="list-recipe">
    <recipe-header></recipe-header>
   <div class="col-sm-4">
    <div v-for="recipe in recipes" :key="recipe.id" class="card">
       <!-- <div class="image">
        <img :src="recipe.imageurl" alt="">;
        </div> -->
        <div class="card-inner">
          <div class="header">
        <h2>{{recipe.name}}</h2>
        <p>{{recipe.publishedBy}}</p>
        <div class="content">      
         <recipe ></recipe>
</div>

</div>
</div>
   
  </div>
  
  <a href="/add"><ul >
  <button type="submit" > Create New Recipe</button>
   </ul>
   </a>
   </div>
   
  </div>
</template>

<script>
import recipeHeader from './header.vue'
import Recipe from './recipe.vue'

export default {

  components: {
    'recipe-header': recipeHeader,
    Recipe,
   },

  data () {
    return {
        recipes:[{
            id: '1',
            name: "Pancake",
            publishedBy: "Omotoke",
            categories: [],
            cookTime: "15 minutes",
            ingredients: 'Flour, Egg, Milk, Sugar, etc',
            imageurl: require('../assets/pancake.jpg')
        },
       
            {
                id:'2',
                name:  'Salad',
                publishedBy: 'Omotoke',
                cookTime: '15 minutes',
                ingredients: 'Onions, Cabbage, Carrots, etc',
                imageurl: require('../assets/salad.jpg')
            },

            {
                id:'3',
                name: 'Cake',
                publishedBy: 'Omotoke',
                cookTime: '15 minutes',
                ingredients: 'Flour, Icing, Food Coloring, Sugar, etc',
                imageurl: require('../assets/cake.jpg')
            },

            
        ]
     
    }
  },
  created(){
    this.$http.get('https://recipe-app-bb815-default-rtdb.firebaseio.com//posts.json').then(function(data){
      
      this.recipes = data.body
     
    })
  },
//  created(){
//     this.$http.get('https://recipe-app-bb815-default-rtdb.firebaseio.com/posts/' + this.id + '.json').then(function(data){
//       return data.json()
//       var recipes = []
//     }).then(function(data){
//       for (let key in data){
//         // data[key].id = key
//         recipes.push(data[key])
        
//       }
//       this.recipes = recipes
//     })
//   },



  
}
</script>

<style>
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

body {
  background: #eeeded;
}

.card {
  display: inline-block;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  margin-right: 100px;
  margin-left: 30px;
  margin-top:10px;
  margin-bottom:10px;
  background-color:rgb(241, 236, 236);
}

.card:hover {
  box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.card > .card-inner {
  padding:10px;
}
.card .header h2, h3 {
  margin-bottom: 0px;
  margin-top:0px;
}
.card .header {
  margin-bottom:5px;
}
.card img{
  width:300px;
  height: 300px;
}

ul{
  text-align: right;
  
}
</style>
