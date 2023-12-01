import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarUsers from "./components/members/Navbar";
import Footer from "./components/members/Footer";
import Dashboard from "./pages/members/Dashboard";
import Kategori from "./pages/members/Kategori";
import Register from "./pages/members/Register";
import Login from "./pages/members/Login";
import PrivacyPolicy from "./pages/members/PrivacyPolice";
import AboutUs from "./pages/members/AboutUs";

function AppUsers() {
  return (
    <>
        <Router>
          <NavbarUsers />
          {/* <Footer />  */}
            <Routes>
                <Route path={"users/dashboard"} element={<Dashboard />} />
                <Route path={"users/kategori"} element={<Kategori />} />
                <Route path={"users/registrasi"} element={<Register />} />
                <Route path={"users/login"} element={<Login />} />
                <Route path={"users/privacy-policy"} element={<PrivacyPolicy />} />
                <Route path={"users/about-us"} element={<AboutUs />} />
            </Routes>
          <Footer /> 
        </Router>
    </>
  )
}

export default AppUsers;