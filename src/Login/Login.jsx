import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {Signin}=useContext(AuthContext)
    // console.log(Signin)

    const handleLogIn=(e)=>{
        e.preventDefault();
       const email=  e.target.email.value;
       const password= e.target.password.value;
     
       console.log(email,password)
   
       Signin(email,password)
       
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('signinsuccessful',user)
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
            Login
          </h1>
          <form onSubmit={handleLogIn} className="space-y-4">
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
                name='password'
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
            <input type="submit" value="Login" className="btn btn-primary" />
            </div>
            <p> Not registered? <Link className="underline text-blue-700" to={'/register'}>click here</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
