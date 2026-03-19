import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


// 
const Signup = () => {

  // Initialize the hooks ; State Variables (Hooks)-Each state stores input values.

  const [username,setUsername]=useState("");
   // username	    -current value
   // setUsername	-updates the value
   // ""	          -starts empty

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const [phone,setPhone]=useState("");

  // The three states to which the application will move to

  const [loading,setLoading] = useState("");
  const [success,setSuccess] = useState("");
  const [error,setError] = useState("");

 


  // Below is a function that will handle the submit action- This function runs when the form is submitted.

  const handleSubmit = async(e) =>{

    // Below will prevent the site from reloading - Without this, browser reloads page.

   // React forms usually prevent default browser behavior.

    e.preventDefault()

    // Update the loading hook with a message that will be displayed to the user trying to register.Before request starts:

   // User sees loading message.
    setLoading("Please wait to be registered, in a moment...")

    //  try{}- This contains code that may succeed.

    try{
      // create a form-data object that will enable you to capture the form details on the form

      const formdata = new FormData();

      // Insert the four details using key value pairs

      formdata.append("username",username);
      formdata.append("email",email);
      formdata.append("password",password);
      formdata.append("phone",phone);

      // By us e of axios we can access the method post
      const response = await axios.post("https://serena080.alwaysdata.net/api/signup",formdata)

      // Set back the loading back to default

      setLoading("");

      // Just incase everything goes well,update the success hook with a message

      setSuccess(response.data.message)

      console.log("The content of the response is:",response.data.message)

      // Clear your hooks to default
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

     setTimeout(() => {
     setSuccess("");
  }, 5000);


    }

    // catch{}- Runs if request fails.
    catch(error){

      // set the loading bak to default
      setLoading("");

      // Update the error hook with the messsage given back from the response

      setError(error.message)

    }


  }

  // React → API → Server → Response
  // axios.post()

  // Sends POST request.

  // await

  // Waits until server responds.

  // response

  // Stores server reply.

  // Flow

  return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4">
        <h1 className='text-dark'>Sign up</h1>

        <h5 className='text-warning'>{loading}</h5>

        <h3 className='text-success'>{success}</h3>

        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handleSubmit}>


          <input type="text" 
          placeholder='Enter the username'
          className='form-control'
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}
          required/> <br />

          {/* {username} */}

          
          <input type="email" 
          placeholder='Enter the email address'
          className='form-control'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required/> <br />
          {/* {email} */}


          <input type="password" 
          placeholder='Enter the password'
          className='form-control'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required/> <br />
          {/* {password} */}

          

          <input type="tel"
          placeholder='Enter the mobile phone number'
          className='form-control' 
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required/> <br /> <br />

          {/* {phone} */}

          <input type="submit" value="Signup" className='btn btn-success'/> <br /> <br />

          Already have an account?<Link to= {'/signin'}> Signin</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;
