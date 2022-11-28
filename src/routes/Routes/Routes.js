import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layouts/DashBoardLayout";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import AddProduct from "../../pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../../pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../pages/DashBoard/AllSeller/AllSeller";
import DashBoard from "../../pages/DashBoard/DashBoard";
import MyOrder from "../../pages/DashBoard/MyOrder/MyOrder";
import MyProduct from "../../pages/DashBoard/MyProduct/MyProduct";
import Home from "../../pages/HomePage/Home";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
                element:<PrivateRoute><Products></Products></PrivateRoute>,
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
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>
            },
            {
                path:'/dashboard/myOrder',
                element:<BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path:'/dashboard/addProduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/myProduct',
                element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path:'/dashboard/allSeller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path:'/dashboard/allBuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])