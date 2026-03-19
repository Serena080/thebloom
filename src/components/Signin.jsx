import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing / storing the user



  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");

  // 4. Declare three additional hooks to manage the state of your application: a) loading state b) success state c) Error state.

  const [loading,setLoading]= useState("");
  const [success,setSuccess]= useState("");
  const [error,setError]= useState("");

  // Below we have the use navigate hook to redirect to anothe page a fter a successful log in

  const navigate= useNavigate()

  // 5. Come up with the function that will handle submit action.

  const handleSubmit = async (e) =>{

    // 6. On the handle submit function, first prevent the site from reloading.

    e.preventDefault()

    //7. update the loading hook with a message
    setLoading("Please wait as we sign you in...")

    // 8.Create a try and catch block

    try {

      // 9.Create a formData object that will hold the email and the password

      const formdata = new FormData()

      // 10. Insert/append the email and the password on the formData created.

      formdata.append("email",email);
      formdata.append("password",password);

      // 11. Interact with axios module that will help you connect to the https protocal as you pass in your URL and the data.

      const response = await axios.post("https://serena080.alwaysdata.net/api/signin",formdata)

      // 12.set the loading hook back to default

      

      setLoading("");

      // 13. We notice that when a person enters the correct credential i.e email and the password, the details of the user who is trying to login are given back as part of the response from the API. Based on this we can make some decisions by use of the if statement.

      // Check whether the user exists as part of your response from the API
       if (response.data.user){

        // if the user is there , definetly the details entered during the sign in are correct
        // setSuccess("Log in successfull")


        // Store user details in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // If it is successful leta person be directed to another page

        navigate("/")


       }

       else{
        // User is not found, that means the credentials in the form are incorrect
        setError("Log in failed, please try again...")
       }

      
    } 
    catch (error) {

      // Set loading back to default
      setLoading("");

      // Update the error hook with an error message

      setError("Oops!Something went wrong.Please try again...")
      
    }
  }
  

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">

        <h1 className='text-dark'>Sign In</h1>
        <h5 className='text-info'>{loading}</h5>
        <h4 className='text-success'>{success}</h4>
        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handleSubmit}>

          <input type="email"
          placeholder='Enter the email address'
          className='form-control' 
          required
          value={email}
          onChange={(e) =>setEmail(e.target.value)}/> <br /> <br />

          {/* {email} */}

        


          <input type="password"
          placeholder='Enter the password here'
          className='form-control' 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br /> <br />

          {/* {password} */}
           

          <input type="submit" 
          value="Signin"
          className='btn btn-success'/> <br /> <br />



          You don't have an account?<Link to= {'/signup'}> Register</Link>






        </form>
      </div>
    </div>
  )
}

export default Signin;
