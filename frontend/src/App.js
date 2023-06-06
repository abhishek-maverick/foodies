import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
// upon On Deman Loading => upon Render => suspend Loading

/*********
    Header
        -Logo
        -Nav Items
        -Cart
    Body
         - Search Bar
         - RestaurantList
           -Restaurant Card(many cards)
             -Image
             -Name
             -Rating
             -Cusines
    Footer
        -links
        -CopyRight
*********/

// according to react convention name of a component should start with a capital letter
// functional component is a normal function

/*
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * On Demand Looading
 * Dynamic Import
 */

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      ,
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // => parentPath/{path}, don't have to give slash over here otherwise will be conisdered as localhost:1234/profile
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/**
 *  AppLayout
 *  (state = user)
 *     - <Body user = {user} />
 *     - <RestaurantContainer user =>
 *           - RestaurantCard user = {user}
 *                - <h4> {user} </h4>
 *
 *     PROP DRILLING
 */
