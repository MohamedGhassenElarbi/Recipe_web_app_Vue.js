<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Edit recipe :{{titre}}</h1>
                    <hr>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input
                                type="text"
                                id="title"
                                v-model="myrecipe.name"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input
                                type="text"
                                id="image"
                                v-model="myrecipe.image"
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
                            v-model="myrecipe.description"
                            class="form-control"></textarea>
                </div>
            </div>
            
            
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            v-on:click.prevent="submit">Submit!
                    </button>
                </div>
            </div>
        </form>
        <transition name="fade">
        <div class="alert alert-warning" role="alert" v-if="recipeUpdated==true">Recipe Updated Successully</div>
        </transition>
        <hr>
    </div>
</template>

<script>
export default {
  data () {
    return {
      recipeUpdated:false,
      id: this.$route.params.id,
      myrecipe:{
        name:"",
        id:"",
        image:"",
        description:""
      }
    }
  },
  computed:{
    titre:function(){
      for(var i=0;i<this.$store.state.recipes.length;i++){
        if (this.$store.state.recipes[i].id==this.id){
          this.myrecipe.id=this.$store.state.recipes[i].id;
          this.myrecipe.name=this.$store.state.recipes[i].name;
          this.myrecipe.image=this.$store.state.recipes[i].image;
          this.myrecipe.description=this.$store.state.recipes[i].description;
          
        }
      }
      return this.myrecipe.name;
    }},
    methods:{
      submit:function(){
          
        for(var i=0;i<this.$store.state.recipes.length;i++){
        if (this.$store.state.recipes[i].id==this.id){
          this.$store.state.recipes.splice(i,1,this.myrecipe);
        }
      }
        this.recipeUpdated=true;
      }
  }
}
</script>

<style>
.fade-enter{opacity:0;}
.fade-enter-active{transition:opacity 1s;}
.fade-leave-active{transition:opacity 1s;opacity:0;}
</style>