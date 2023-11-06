import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Product from "../Product/Product";
import DashbordLayout from "../Pages/DashbordLayout/DashbordLayout";
import DashbordCart from "../Pages/DashbordCart/DashbordCart";
import DashBordProfile from "../Pages/DashBordProfile/DashBordProfile";
import EditProfile from "../Pages/EditProfile/EditProfile";


const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/products/:id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/dashbord',
                element: <DashbordLayout></DashbordLayout>,
                children: [
                    {
                        path: '/dashbordCrt',
                        element: <DashbordCart></DashbordCart>,
                    },
                    {
                        path:'/dashbord/dashbordProfile',
                        element:<DashBordProfile></DashBordProfile>,
                    },
                    {
                        path:'/dashbord/editProfile',
                        element:<EditProfile></EditProfile>
                    }
                ]
            }
        ]
    },

]);

export default myCreateRouter;