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
import ResumeBuilder from "../Layout/Components/ResumeBuilder/ResumeBuilder";
import ErrorPage from "../Layout/Components/ErrorPage/ErrorPage";
import HelpCenter from "../Layout/Components/HelpCenter/HelpCenter";
import AboutUs from "../Layout/Components/AboutUs/AboutUs";
import JobPost from "../Layout/Components/Job/JobPost";
import Alljobs from "../Layout/Components/AllJobs/Alljobs";
import JobDetails from "../Layout/Components/AllJobs/JobDetails";
import JobApplication from "../Layout/Components/AllJobs/JobApplication";
import Notifications from "../Layout/Components/Notifications/Notifications";
import LatestJobs from "../Layout/Components/AllJobs/LatestJobs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: "/resumeBuilder",
          element: <PrivateRoute> <ResumeBuilder></ResumeBuilder> </PrivateRoute>
        },
        {
          path: "/jobPost",
          element: <PrivateRoute><JobPost></JobPost></PrivateRoute>
        },
        {
          path: "/allJobs",
          element: <Alljobs></Alljobs>
        },
        {
          path: "/JobDetails/:id",
          element: <PrivateRoute> <JobDetails></JobDetails> </PrivateRoute>
        },
        {
          path: "/latestJobs",
          element: <LatestJobs></LatestJobs>
        },
        {
          path: "/notification",
          element: <PrivateRoute> <Notifications></Notifications> </PrivateRoute>
        },
        {
          path: "/jobApplication/:id",
          element: <PrivateRoute> <JobApplication></JobApplication> </PrivateRoute>
        },

        {
          path: "/help",
          element: <HelpCenter></HelpCenter>
        },
        {
          path:"/aboutUs",
          element: <AboutUs></AboutUs>
        }
      ]
    },
  ]);

  export default router;