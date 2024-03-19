import Home from "./pages/admin_home/Home";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Users from "./pages/admin_users/Users";
import Products from "./pages/admin_products/Products";
import Navbar from "./components/admin-navbar/Admin_Navbar";
import Footer from "./components/admin-footer/Admin_Footer";
import Menu from "./components/Admin-menu/Admin_Menu";
import Login from "./pages/admin_login/Login";
import "./styles/global.scss"
import User from "./pages/admin_user/User";
import Product from "./pages/admin_product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>  
          </div>
        </div>
        <Footer />

      </div>
    )

  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path:"/users/:id",
          element: <User />
        },
        {
          path:"/products/:id",
          element: <Product />
        },
      ]
    },
    {
      path:"/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
