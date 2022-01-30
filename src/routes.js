import listRecipes from './components/listRecipes.vue'
import  createRecipe from './components/createRecipe.vue'


export default[
    {path:'/', component: listRecipes},
    {path:'/add', component: createRecipe},
   
]