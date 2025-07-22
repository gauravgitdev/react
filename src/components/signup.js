import { useState } from "react";
import {z} from "zod";


const Signup = () => {

    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const [error, setError] = useState({});
// Zod schema for form validation
const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});
const changeHandle=(e)=> {
    const name = e.target.name;
    const value = e.target.value;
    
    setFormData({...formData, [name]:value });
}

const Submithandler = (e) => {
    e.preventDefault();
     const result = formSchema.safeParse(formData);
    if (!result.success) {  
       const errorfield =  result.error.formErrors.fieldErrors;
        setError(errorfield);
        console.log("Validation Errors = ", errorfield);
    // If validation passes, you can proceed with form submission
        return; // Stop if validation fails
    }
    // If validation passes, you can proceed with form submission thus api call
   
    
    
    console.log("UserName = ", formData.username);
    console.log("Email = ", formData.email);    
    console.log("Password = ", formData.password);
  
    // Here you can add the logic to send formData to your backend or API
}


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={Submithandler} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input onChange={changeHandle} value = {formData.username} type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input  onChange={changeHandle} value = {formData.email} type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input value = {formData.password} onChange={changeHandle} type="password" id="password" name="password" required />
         {/* { above value in html element is provided to bind it with the formadata variable} */}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;