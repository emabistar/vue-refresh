export default{
  template:`
  <form @submit.prevent="add" >
  <input type="text" v-model="newAssignment" class="mr-2" border rounded placeholder= "New item"/>
  <button  class="bg-white border rounded p-1"  type="submit" >Add</button>
  </form>
    `,
//  props:{
//     assignments:Array
//  },
 data(){
    return{
        newAssignment :''
    }
 },
 methods:{
    add(){
     this.$emit('add', this.newAssignment );
       // alert('i am adding')
        /* this.assignments.push({
         name: this.newAssignment,
         complete:false,
         id: this.assignments.length +1
        });
        this.newAssignment = ''  */
        this.newAssignment = ''
     }
 }
}
