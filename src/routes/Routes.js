import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/404Page";
import AdminDash from "../components/SideBar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminDash />,
  },
  {
    path: "/admin",
    element: <AdminDash/>,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },

]);

export default router;