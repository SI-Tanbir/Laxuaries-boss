
import { createBrowserRouter } from "react-router";


import App from "../App";
import Login from "../Login/Login";
import Register from "../Register/Register";


    let router = createBrowserRouter([
        

        {
            path:'/',
            element:<App></App>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }

        

      ]);





export default router;