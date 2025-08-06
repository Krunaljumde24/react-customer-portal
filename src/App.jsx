import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
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
