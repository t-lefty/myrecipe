// <template>
//     <div id="single-recipe">
//         <h1>{{recipe.name}}</h1>
//         <article>{{recipe.publishedBy}}</article>
//         <p>Author: {{recipe.category}}</p>
//         <p>{{recipe.cookTime}}</p>
//         <p>{{recipe.ingredients}}</p>
//         <ul>
//             <li v-for="catgory in recipe.categories">{{category}}</li>
//         </ul>
//     </div>
// </template>

// <script>

// export default {
//     data() {
//         return{
//             id: this.$route.params.id,
//             recipe: {}
//         }
//     },
//     created(){
//         this.$http.get('https://recipe-app-bb815-default-rtdb.firebaseio.com/posts/' + this.id + '.json').then(function(data){
//             return data.json();
//             this.recipe = data.body;
//         }).then(function(data){
//             this.recipe = data;
//         })
//     }
// }
// </script>

// <style>
// #single-recipe{
//     max-width: 960px;
//     margin: 0 auto;
// }
// </style>
