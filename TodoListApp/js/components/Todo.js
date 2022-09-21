export default {
 template:`
 <li class="flex justify-between items-center" >{{ todo.title}}
 <button  class=" text-red-600" @click="deleteChild(todo.id)" type="button">X</button>

 </li>
 <hr>
 `,
 // 
 props:{
    todo:Object,
    deleteChild:{ 
      type: Function 
   },
 },



}