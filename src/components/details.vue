<template>
  <div>
      <h1>details</h1>
      <hr>
      <div class="col-sm-12">
            <div class="thumbnail" >
              <h3>{{name}}</h3>
                <img v-bind:src="myrecipe.image" alt="">
                <div class="caption">
                    
                    <p style="white-space:pre;">{{myrecipe.description}}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      myrecipe:{
        name:"",
        id:"",
        image:"",
        description:"default"
      }
    }
  },
  computed:{
    name:function(){
      for(var i=0;i<this.$store.state.recipes.length;i++){
        if (this.$store.state.recipes[i].id==this.id){
          this.myrecipe.id=this.$store.state.recipes[i].id;
          this.myrecipe.name=this.$store.state.recipes[i].name;
          this.myrecipe.image=this.$store.state.recipes[i].image;
          this.myrecipe.description=this.$store.state.recipes[i].description;
          
        }
      }
      return this.myrecipe.name;
    }
  }
}
</script>

<style>
</style>