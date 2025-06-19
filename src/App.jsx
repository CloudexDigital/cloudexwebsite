import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavLogo from "./components/navLogo";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <NavLogo />
      <Navbar />

      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>

       <Footer /> 
    </Router>
  );
}

export default App;
