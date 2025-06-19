import "./styles/App.css";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavLogo from "./components/navLogo";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import ThankYou from "./components/thankYou";

// Custom wrapper to use location inside Router
const AppLayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/thankYou";

  return (
    <>
      {!hideLayout && <NavLogo />}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankYou" element={<ThankYou />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
