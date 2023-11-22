import React from "react";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as loginAction } from "./pages/Login";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <Error />,
      },

      {
        path: "/orders",
        element: <Orders />,
        errorElement: <Error />,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <Error />,
      },

      {
        path: "/singleProduct/:id",
        element: <SingleProduct />,
        errorElement: <Error />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
