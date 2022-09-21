import TodoApp from './todo.js'
export default{
components:{
 TodoApp
},
template:` 
<todo-app    v-for="todo in todos"
:key="todo.id"
:todo="todo"
:deleteChild="deleteParent"
>
 </todo-app> 
 
 `,
 emits :{
  deletePList: null,
},
props:{
    todos:Array,
    
},
methods: {
  deleteParent(event) {
      //alert(event)
      this.$emit('deletePList', event)
    
    }
}


}