import grid from './components/grid.vue'
import add from './components/add.vue'
import dashboard from './components/dashboard.vue'
import details from './components/details.vue'
import edit from './components/edit.vue'
import home from './components/home.vue'


export const routes=[
    {path:'/add',component:add},
    {path:'/dashboard',component:dashboard},
    {path:'',component:home,children:[
        {path:'',component:grid},
        {path:':id',component:details},
        {path:':id/edit',component:edit},
    ]}
    
];