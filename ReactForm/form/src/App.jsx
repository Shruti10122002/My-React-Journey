
import './App.css'
import { useForm } from "react-hook-form";



function App() {

  const { register,
     handleSubmit,
      watch, 
      formState: { errors } 
    } = useForm();

 function onSubmit(data){
  console.log("Submitting the form",data);
 }
 

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First Name:</label>
      <input 
      className={errors.firstName ? 'input-error' : ""}
      {...register("firstName",
        {
          required:true,
          minLength:{value:3,message: 'Min len atleast 3'},
          })}/>
          {errors.firstName &&<p className='error-msg'>{errors.firstName.message}</p>}
    </div>
    <br/>

    <div>
      <label >Middle Name:</label>
      <input 
      className={errors.firstName ? 'input-error' : ""} 
      
      {...register("middleName")}/>
    </div>
    <br/>

    <div>
      <label>last Name:</label>
      <input 
      className={errors.firstName ? 'input-error' : ""}
      {...register("lastName",{
        pattern:{
          value: /^[A-Za-z]$/i,
          message:"Last Name is not as per rule"
        }
      })}/>
      {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
    </div> 
    <br/>
    <input type='submit' />

   </form>
    
       
  )
}

export default App
