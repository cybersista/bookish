import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Kategori from "./pages/Kategori";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolice";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
        <Router>
          <Navbar />
            <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/kategori"} element={<Kategori />} />
                <Route path={"/registrasi"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
                <Route path={"/about-us"} element={<AboutUs />} />
            </Routes>
          <Footer /> 
        </Router>
    </>
  )
}

export default App;
