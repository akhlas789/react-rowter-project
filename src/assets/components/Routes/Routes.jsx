import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Product from "../Product/Product";


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
                loader:()=> fetch('https://dummyjson.com/products')
            },
            {
                path:'/products/:id',
                element:<Product></Product>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path:'/dashbord',
                element:<Dashbord></Dashbord>
            }
        ]
    },

]);

export default myCreateRouter;