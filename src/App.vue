<template>
  <div class="container">
    <div class="row">
      <app-header></app-header>
      <hr>
      <transition name="slide" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>
import header from './components/header';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'app-header':header
  }
}
</script>

<style>
.slide-enter-active{animation:slide-in 200ms ease-out forwards;}
.slide-leave-active{animation:slide-out 200ms ease-out forwards;}
@keyframes slide-in {
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  } 
}
@keyframes slide-out {
  from{
    transform: translateY(0);
    opacity: 1;
  }
  to{
    transform: translateY(-30px);
    opacity: 0;

  } 
}
</style>
