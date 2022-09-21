export default{
        props:{
          
          type:{
            type:String,
            default:'primary'
          },
          name:{
            type:String,
            required :true
          } 
         
        },
        template:`<button 
        :class="{
          'border rounded py-2 px-5 disabled:cursor-not-allowed' :true,
          'bg-green-300  hover:bg-gray-500':type ==='primary',
          'bg-red-300  hover:bg-blue-500':type ==='muted',
           'is-loading':processing     
      
         }"
        
         :disabled="processing"
         >
          {{ name }}
           <slot/> 
            </button>`
         ,
          data(){
           return{ 
               processing:false
           }
          
        }
    
}