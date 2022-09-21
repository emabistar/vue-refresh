import AssignmentsList from './AssignmentList.js';
import CreateAssignment from './CreateAssignment.js'
export default{
    components:{
        AssignmentsList,
        CreateAssignment
    },
    template:`
    <section class="space-y-6">
    <assignments-list :assignments="inProgressAssignments" title="In Progress"></assignments-list>
    <assignments-list :assignments="completedAssignments" title="Completed"></assignments-list>
    <create-assignment @add="addAsignment"></create-assignment>
   
    </section>

   
    `,
    data(){
        return{
      assignments : [
            {name :'Finish project', complete:false,open:true,id:1},
            {name:'Read chapt 4',complete:false,open:true,id:2},
            {name:'Turn in homework',complete:false,open:true,id:3}
        ],
        newAssignment :'',
        };
    },
    computed:{
        
        completedAssignments (){
            return this.assignments.filter(a=>a.complete  )
        },
        inProgressAssignments (){
            return this.assignments.filter(a=>!a.complete )
        }
    },
    methods:{
       
        addAsignment(newAssignment){
            
            this.assignments.push({
             name:newAssignment,
             completed :false,
             id: this.assignments.length +1
          })
        }
    }
}