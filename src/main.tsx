import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// layouts
import MainLayout from './layouts/MainLayout/MainLayout';
// pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "products:pre",
        element: <Products />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
