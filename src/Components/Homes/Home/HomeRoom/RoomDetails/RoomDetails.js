import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../../Navbar/Navbar'


import { useForm } from 'react-hook-form';



// import Navigation from '../Shared/Navigation/Navigation';
// import swal from 'sweetalert';
const RoomDetails = () => {
    const [details, setDetails]=useState({})
    const {id}=useParams()
    const { register, handleSubmit,reset } = useForm();
   

    useEffect(()=>{
        fetch(`http://localhost:5000/room/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])


    // form 
    const onSubmit=(data)=>{
        // data.email=user?.email
        data.status="pending"
       
        console.log(data)
        // fetch('https://shielded-beach-03067.herokuapp.com/bike')
          // myorder data form passing database 
          fetch('http://localhost:5000/myOrder',{
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(result=>{
            if(result.insertedId){
                alert("product successfully order")
                
                reset();
            }
            // console.log(result));
          })
        
          
          
          console.log(data)
    }
    
    return (
        <div>
       <Navbar></Navbar>
            <div className='container mt-5'>
                <h1 className='mb-5 foods'>This is Product <span className='pro'>{details.name} </span>Details</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    <div className='col'>
                     
                        <div class="card-body body-designs">
                        <h1 className='mt-5'>Product Name: <span className='pro'>{details?.name}</span></h1>
                        <h1 className='mt-2'>Product Price: <span className='pro'>{details?.price}</span></h1>
                        <p className='mt-2'>Product Description: <span className='pro'>{details?.description}</span></p>
                        </div>
                     
              

                    </div>
                    <div className='col'>
                    <div class="card h-100">
                        <img style={{width:"355px", height:"390px"}} src={details.img} class="card-img-top  mx-auto" alt="..."/>
                        
                        </div>
                    </div>
                </div>
            </div>


            {/* from data  */}
            <div>
                <div className='container mt-5'>
                    <h1 className='foods'>Please <span className='pro'>Fill-up Form</span> and <span className='pro'>Order product</span></h1>
                <div className="submits">
          <form onSubmit={handleSubmit(onSubmit)}>
   <input {...register("name", { required: true})} placeholder="product-name" defaultValue={details.name} />
  
  
   <input
                {...register("price", { required: true })}
                placeholder="price"
                defaultValue={details.price}
                type="number"
                className="p-2 m-2  input-field"
              />
               <input {...register("address", { required: true})} placeholder="Customer-Address"  />
               <input
                {...register("number", { required: true })}
                placeholder="Phone-Number"
                // defaultValue={details.price}
                type="number"
                className="p-2 m-2  input-field"
              />

   <input
            {...register("text", { required: true })}
                placeholder="Image Link"
                defaultValue={details.img}
                className="p-2 m-2  input-field"
              />

     <input
            {...register("date", {required:true})}
              type="date"
                className="p-2 m-2"
              />



   <input className='bg-dark text-white' type="submit" />
 </form>
         
     </div>
                </div>
            </div>
            
        </div>
    );
};

export default RoomDetails;