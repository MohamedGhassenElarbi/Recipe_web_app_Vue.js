<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Add a receipe</h1>
                    <hr>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input
                                type="text"
                                id="title"
                                v-model="recipe.name"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input
                                type="text"
                                id="image"
                                v-model="recipe.image"
                                class="form-control">
                    </div>
                    

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="description">Description</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="description"
                            rows="5"
                            v-model="recipe.description"
                            class="form-control"></textarea>
                </div>
            </div>
            
            
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary" v-on:click.prevent="submit()">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <transition name="fade">
        <div class="alert alert-success" role="alert" v-if="recipeCreated==true">Recipe added successfully</div>
        </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
        recipeCreated:false,
      recipe:{
          name:'',
          id:(this.$store.state.recipes.length)+1,
          image:'',
          description:''
      }
    }
  },
  methods:{
      submit:function(){
          
        this.$store.state.recipes.push(this.recipe);
        this.recipeCreated=true;
      }
  }
}
</script>

<style>
.fade-enter{opacity:0;}
.fade-enter-active{transition:opacity 1s;}
.fade-leave-active{transition:opacity 1s;opacity:0;}
</style>