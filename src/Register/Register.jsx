import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    const {CreateUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
       const email=  e.target.email.value;
       const password= e.target.password.value;
     
    //    console.log(email,password)
      
    CreateUser(email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });

    }



  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Register here
          </h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
              name="email"
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
              />
            </div>
            
            <div>
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
