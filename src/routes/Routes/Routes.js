import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/HomePage/Home";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/category/:id',
                element:<Products></Products>,
                loader:({params}) =>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login> ,
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp> ,
            },
            
        ]
    }
])