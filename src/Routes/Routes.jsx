import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Components/Home/Home";
import Contact from "../Layout/Components/Contact/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
          path: "Home",
          element:<Home></Home>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        }
      ]
    },
  ]);

  export default router;