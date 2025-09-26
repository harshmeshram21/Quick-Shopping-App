import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Loading from "./components/Loading";
import Contact from "./components/Contact";
import Login from "./pages/Login";
import PublicLayout from "./layouts/PublicLayout";
import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./components/Cart"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { 
//         path: "/", 
//         element: <Login /> 
//       },
//       {
//         path: "/home",
//         element: (
//           <Suspense fallback={<Loading />}>
//             <Home />
//           </Suspense>
//         ),
//       },
//       { path: "/cart", element: <Cart /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ]);


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />, //  Login-only layout (no header/footer)
    errorElement: <NotFound />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    path: "/",
    element: <Layout />, //  Main layout with NavBar + Footer
    children: [
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
  {
    path: "*", 
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
 <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
