import NotFound from "../404/NotFound"
import Cart from "../Cart/Cart"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Login from "../Login.jsx/Login"
import Product from "../Product/Product"
import SignUp from "../SignUp/SignUp"


const RoutersApi = [
    {
        id:1,
        path:"/",
        element:<Home/>
    },
    // {
    //     id:2,
    //     path:"/store",
    //     element:<Store/>
    // },
    {
        id:3,
        path:"/contact",
        element:<Contact/>
    },
    {
        id:4,
        path:"/login",
        element:<Login/>
    },
    {
        id:5,
        path:"/signUp",
        element:<SignUp/>
    },
    {
        id:6,
        path:"/cart",
        element:<Cart/>
    },
    {
        id:7,
        path:"/*",
        element:<NotFound/>
    },
    {
        id:8,
        path:"/product",
        element:<Product/>
    },
]

export default RoutersApi


