<template>
  <div >
   
 <router-view  >
    </router-view>

  </div>
</template>

<script>
import listRecipes from './components/listRecipes.vue'
import createRecipe from './components/createRecipe.vue'


export default {
  components: { 
    
    'list-recipes':listRecipes,
    'create-recipe': createRecipe,
  
    
    

   },

  data () {
    return {
      
     
    }
  }
}
</script>

<style>
</style>
