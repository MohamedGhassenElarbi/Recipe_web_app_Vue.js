import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{
        recipes:[
            {name:"recette Pancakes",
            id:1,
            image:"https://upload.wikimedia.org/wikipedia/commons/2/2d/OriginalPancakes.jpg",
            description:" description du recette pancakes"
            },
            {name:"recette Crêpe",
            id:2,
            image:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Palatschinke.jpg",
            description:" description du recette Crêpe"
            },
            {name:"recette Tarte",
            id:3,
            image:"https://www.hervecuisine.com/wp-content/uploads/2016/06/recette-tarte-aux-fraises-facile-1024x683.jpg.webp",
            description:" description du recette Tarte"
            },
            {name:"recette Gâteau",
            id:4,
            image:"https://img.mesrecettesfaciles.fr/wp-content/uploads/2019/03/ga%CC%82teauauchocolataumiel-1000x500.jpg",
            description:" description du recette Gâteau"
            }
          ]
    }
});