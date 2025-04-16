import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { SingleProduct } from "./pages/SingleProduct";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Shop />,
        path: "/shop",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
      {
        element: <Checkout />,
        path: "/checkout",
      },
      {
        element: <SingleProduct />,
        path: "/detail/:id",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
]);

export { router };
