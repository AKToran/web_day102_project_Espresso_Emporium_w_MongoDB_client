import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <p>Loading coffees...</p>,
    children: [
      { 
        index: true, 
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home 
      },
      { 
        path: "addCoffee", 
        Component: AddCoffee 
      },
      { 
        path: "updateCoffee", 
        Component: UpdateCoffee 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
