import NotFound from "../404/NotFound"
import Cart from "../Cart/Cart"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Login from "../Login.jsx/Login"
import SignUp from "../SignUp/SignUp"
import OurStore from "../OurStore/OurStore"
import Checkout from "../Checkout/Checkout"
import SingleProduct from "../SingleProduct/SingleProduct"
import Payment from "../Payment/Payment"
// import Header from "../Header/Header"
// import ProductCard from "../OurStore/ProductCard"
import OrderScreen from "../OrderScreen/OrderScreen"
// import ProfileTabs from "../ProfileTabs/ProfileTabs"
import ProfileScreen from "../ProfileTabs/ProfileScreen"
import HomeSecreen from "../HomeSecreen"

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
        path:"/register",
        element:<SignUp/>
    },
    {
        id:6,
        path:"/cart/:id?",
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
    },
    {
        id:10,
        path:"/payment",
        element:<Payment/>
    },
    {
        id:11,
        path:"/search/:keyword",
        element:<OurStore/>
    },
    {
        id:12,
        path:"/order/:id",
        element:<OrderScreen/>
    },
    {
        id:13,
        path:"profile",
        element:<ProfileScreen/>
    },
    {
    id:14,
    path:"/page/:pagenumber",
    element:<HomeSecreen/>
    },
    {
        id:15,
        path:"/search/:keyword",
        element:<HomeSecreen/>
        }
  
]

export default RoutersApi


