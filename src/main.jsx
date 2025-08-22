import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
// import Cart from "./components/Cart";
import App from "./App";
import Layout from "./layouts/Layout";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./components/Cart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <Login /> 
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
 <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
