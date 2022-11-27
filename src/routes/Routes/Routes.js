import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layouts/DashBoardLayout";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import DashBoard from "../../pages/DashBoard/DashBoard";
import MyOrder from "../../pages/DashBoard/MyOrder/MyOrder";
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
    },
    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>
            },
            {
                path:'/dashboard/myOrder',
                element:<MyOrder></MyOrder>
            }
        ]
    }
])