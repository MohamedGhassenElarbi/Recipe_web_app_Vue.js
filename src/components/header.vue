<template>
  <div class="container">
    
<ul class="nav nav-pills">
  <router-link to="/" tag='li' active-class="active" exact><a>Home</a></router-link>
  <router-link to="/add" tag='li' active-class="active"><a>Add New Recipe</a></router-link>
  <router-link to="/dashboard" tag='li' active-class="active"><a>Update/Delete Recipes</a></router-link>
</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style>
</style>