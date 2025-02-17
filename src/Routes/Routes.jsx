import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Components/Home/Home";
import Contact from "../Layout/Components/Contact/Contact";
import SignUp from "../Layout/AuthForm/SignUp/SignUp";
import TermsConditions from "../Layout/Components/TermsConditions/TermsConditions";
import Login from "../Layout/AuthForm/Login/Login";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Layout/Components/UpdateProfile/UpdateProfile";
import Profile from "../Layout/Components/Profile/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/SignUp",
          element: <SignUp></SignUp>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/terms",
          element: <TermsConditions></TermsConditions>
        },
        {
          path: "/profile",
          element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
        },
        {
          path:"/updateProfile",
          element: <PrivateRoute> <UpdateProfile></UpdateProfile> </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;