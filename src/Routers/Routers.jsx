import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Checkout from "../Pages/Checkout/Checkout";
import BookingServices from "../Pages/BookingService/BookingServices";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SingUp></SingUp>
        },
        {
          path: '/checkout/:id',
          element:<Checkout></Checkout>,
          // loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: '/book/:id',
          element:<BookingServices></BookingServices>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
        }
      ]
    },
  ]);
  export default router;