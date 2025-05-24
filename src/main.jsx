import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

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
        path: "updateCoffee/:id",
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee 
      },
      {
        path: "signin",
        Component: SignIn
      },
      {
        path: "signup",
        Component: SignUp
      },
      {
        path:"users",
        loader: ()=> fetch('http://localhost:3000/users'),
        Component: Users
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
