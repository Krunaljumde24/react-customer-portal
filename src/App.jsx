import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import MessageDialog from "./components/MessageDialog";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { validateSession } = useAuth();

  useEffect(() => {
    validateSession();
  }, []);
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
