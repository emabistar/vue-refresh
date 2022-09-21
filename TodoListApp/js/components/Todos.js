import TodoList from './TodoList.js'
export default{
    components:{
       TodoList
    },
    template:`
    <section class="border rounded p-2">
    <h2 class="text-center font-bold">Todo App v2</h2>
     <ul>
     
       <todo-list
        @deletePList="removeTodo"
        :todos="todos">
       
       </todo-list>
       
     </ul>
     <form @submit.prevent="addTodo" >
     <input type="text"  class="mr-2 p-2 border rounded bg-gray-300" v-model="newTodo" placeholder= "New todo"/>
     <button  class="bg-white border rounded p-1"  type="submit" >Add Todo</button>
     </form>
   </section>
    `,
    data(){
       return{
           todos:[
               {title:'Go to gym',id:1},
               {title:'Red Book',id:2},
               {title:'Do Homework',id:3},
               {title:'Do shopping',id:4}
           ],
           newTodo:'',
        
       }
   },
  computed:{
    getTodos(){
        return this.todos.filter(a=>a.title)
    },
    
  },
  methods:{
    addTodo(){
     this.todos.push({
        title:this.newTodo,
        id: this.todos.length +1
     })
     this.newTodo =''  
    },
    removeTodo(event){
      // Event is emited from todoList
      this.todos = this.todos.filter(a=>a.id !== event)
    }
    
  }

}