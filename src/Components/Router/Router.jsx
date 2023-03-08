import NotFound from "../404/NotFound"
import Cart from "../Cart/Cart"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Login from "../Login.jsx/Login"
import SignUp from "../SignUp/SignUp"
import OurStore from "../OurStore/OurStore"
import Checkout from "../Checkout/Checkout"
import SingleProduct from "../SingleProduct/SingleProduct"

const RoutersApi = [
    {
        id:1,
        path:"/",
        element:<Home/>
    },
    {
        id:2,
        path:"/OurStore",
        element:<OurStore/>
    },
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
        path:"/checkout",
        element:<Checkout/>
    },
    {
        id:9,
        path:"/products/:id",
        element:<SingleProduct/>
    }
  
]

export default RoutersApi


