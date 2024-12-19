import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../Components/Search/Search";
import CategoryList from "../Pages/Admin/CategoryList";
import LoginPage from "../Pages/Accounts/LoginPage";
import RegisterPage from "../Pages/Accounts/RegisterPage";
import ProductUpdate from "../Pages/Admin/Products/ProductUpdate";
import ProductList from "../Pages/Admin/Products/ProducList";
import ProductAdd from "../Pages/Admin/Products/ProductAdd";
import UserList from "../Pages/Admin/UserList";
import ChangePassword from "../Pages/Accounts/ChagePassword";
import AllOrders from "../Pages/Admin/AllOrders";
import Finance from "../Pages/Admin/Finance";
import Admin from "../Pages/Admin/Admin";
import Winter2024 from "../Components/InformationWeb/winter2024";
import ForgotPassword from "../Pages/Accounts/ForgotPassword";
import ResetPassword from "../Pages/Accounts/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "admin", 
          element: (
            // <ProtectedRoute>
            //   <Admin />
            // </ProtectedRoute> 
            <Admin></Admin>
          ),
      children: [
        { index: true, element: <Finance /> },
        { path: "productlist", element: <ProductList /> },
        { path : "orders", element: <AllOrders/>},
        { path: "category", element: <CategoryList/>},
        { path: "user", element: <UserList/> },
        { path:"finance", element: <Finance/>},
        { path: "product/update/:id", element: <ProductUpdate/>},
        { path: "product/add", element: <ProductAdd/>},
       ],
      },
     
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path:"change-password", element: <ChangePassword/>},
      { path:"forgot-password", element: <ForgotPassword/>},
      { path:"reset-password", element: <ResetPassword/>},
      {path:"gioi-thieu", element:<Winter2024/>},
      {path:"tuyen-dung", element:<Winter2024/>},
      {path:"tin-tuc", element:<Winter2024/>},
      {path:"he-thong-cua-hang", element:<Winter2024/>},
    {
        path: "search",
        element: (
            <SearchPage />
        ),
      }, 

      
    ],
  },

]);