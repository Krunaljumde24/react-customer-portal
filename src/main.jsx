import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import CustomerView from "./components/CustomerView";
import { AuthContextProvider } from "./context/AuthContext";
import CustomerSearch from "./components/CustomerSearch";
import AddCustomer from "./components/AddCustomer";
import { AppContextProvider } from "./context/AppContext";
import LoginTest from "./components/LoginTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "customers",
        children: [
          {
            path: "search",
            element: <CustomerSearch />,
          },
          {
            path: "view/:id",
            element: <CustomerView />,
          },
          {
            path: "add",
            element: <AddCustomer />,
          },
          {
            path: "update",
            element: <CustomerSearch />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login-test",
    element: <LoginTest />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
