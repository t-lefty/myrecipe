<template>
  <div id="add-recipe">
      <recipe-header></recipe-header>
      <h2>Create a New Recipe</h2>
      <form v-if="!submitted">
            <label for="">Recipe Name</label>
          <input type="text" v-model.lazy= "recipe.name" required>
          <label for="">Published By:</label>
          <textarea v-model.lazy="recipe.publishedBy"></textarea>
             <label for="">Cook Time</label>
             <textarea v-model.lazy="recipe.cookTime"></textarea>
             <label for="">Ingredients</label>
          <textarea v-model.lazy="recipe.ingredients"></textarea>
            <div id="checkboxes">
              <label for="">Meal Category:</label>
              <select v-model="recipe.author">
                  <option v-for="author in authors" :key="" >{{author}}</option>
              </select>
              <label for="">Meal</label>
              <input type="checkbox" value="meal" v-model="recipe.categories">
              <label for="">Dessert</label>
              <input type="checkbox" value="dessert" v-model="recipe.categories">
             </div>
          <button v-on:click.prevent="post">Add recipe</button>
      </form>
      <div v-if=submitted>
          <h3>Thank you for adding a new Recipe</h3>
      </div>

      <div id="preview"></div>
      <h3>Preview Recipe</h3>
      <p>{{recipe.imageurl}}</p>
          <p>Recipe Name : {{recipe.name}}</p>
          <p>Published By: {{recipe.publishedBy}} </p>
          <p>Cook Time: {{recipe.cookTime}}</p>
          <p>Ingredients: {{recipe.ingredients}}</p>
          <p>Meal Category:{{recipe.author}}</p>
          <ul>
              <li v-for="category in recipe.categories" :key="recipe.id">{{category}}</li>
          </ul>
            <a href="/"><ul >
                <button type="submit" > List Recipes</button>
                </ul>
                </a>
  </div>
  
</template>

<script>
import recipeHeader from './header.vue'


export default {
    components:{
        'recipe-header': recipeHeader,
        

    },
  data () {
    return {
        recipe:{
        id: [],
        imgUrl: {},
        name: "",
        publishedBy: "",
        categories: [],
        author: ""
        },
        authors: ['Meal', 'Dessert'],
        submitted:false
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://recipe-app-bb815-default-rtdb.firebaseio.com/posts.json',this.recipe).then(function(data){
              console.log(data);
              this.submitted = true;

          });

      }

  }
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

#add-recipe *{
    box-sizing: border-box;
}
#add-recipe{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
ul{
    text-align: right;
}
</style>
