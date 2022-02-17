
import { useForm } from "react-hook-form";

import axios from 'axios';

const AddRoom = () => {
    const { register, handleSubmit ,reset} = useForm();
    
    const onSubmit= (data) =>{
        // console.log(data)
      
        axios.post('http://localhost:5000/room',data)
      .then(res=>{
          console.log(res)
           if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
        //  e.preventDefault()
    }
    return (
        <div className="container mt-5">
       <h1 className="foods">Add New Food</h1>
<div className="submits ">
           
          
        <form onSubmit={handleSubmit(onSubmit)}>
 <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
 <textarea {...register("description")} placeholder="description"/>
 <input type="number" {...register("price")} placeholder="price" />
 <input {...register("img")} placeholder="img url"/>
 <input type="submit" />
</form>
       
   </div>

        </div>
       
    );
};

export default AddRoom;