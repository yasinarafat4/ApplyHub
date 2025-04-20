import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Spinner from "./components/Spinner";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  // Set loading spinner
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
