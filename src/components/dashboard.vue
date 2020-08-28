<template>
  <div>
      <h1>My Recipes</h1>
      <table class="table table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    
      <transition-group name="slide" tag="tbody">
      <tr v-for ="recipe in $store.state.recipes" :key="recipe.name">
        <td>{{recipe.name}}</td>
        <td><button type="button" class="btn btn-warning" v-on:click="update(recipe.id)">Update</button></td>
        <td><button type="button" class="btn btn-danger" v-on:click="deleteRecipe(recipe.id)">Delete</button></td>
      </tr>
      </transition-group>
    
  </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    update:function(value){
      this.$router.push('/'+value+'/edit');
    },
    deleteRecipe:function(value){
      for(var i=0;i<this.$store.state.recipes.length;i++){
        if (this.$store.state.recipes[i].id==value){
          this.$store.state.recipes.splice(i,1);
        }
      }
    }
  },
}
</script>

<style>
.slide-leave-active {
animation: slide-out 1s ease-out forwards;
transition: opacity 1s;
opacity: 0;
position: absolute;
}

.slide-move {
transition: transform 1s;
}
@keyframes slide-out {
from {
transform: translateY(0);
}
to {
transform: translateY(20px);
}
}
</style>