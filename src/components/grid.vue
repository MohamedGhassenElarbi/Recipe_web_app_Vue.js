<template>
  <div class="row">
      
      
         <div class="col-md-4" v-for ="recipe in $store.state.recipes" :key="recipe.name" style="height: 380px;">
            <div class="thumbnail" >
                <img :src="recipe.image" alt="">
                <div class="caption">
                    <h3>{{recipe.name}}</h3>
                    <p><a class="btn btn-primary" role="button" v-on:click="access(recipe.id)">Consulter</a></p>
                    
                </div>
            </div>
        </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    access: function(value){
      this.$router.push('/'+value);
    }
  },
}
</script>

<style>
</style>