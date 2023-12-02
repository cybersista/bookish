import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarUsers from "./components/members/Navbar";
import Footer from "./components/members/Footer";
// import Dashboard from "./pages/Dashboard";
import Register from "./pages/members/Register";
import Login from "./pages/members/login";
import PrivacyPolicy from "./pages/members/PrivacyPolice";
import AboutUs from "./pages/members/AboutUs";
import Shop from "./pages/members/riwayatPesanan";
import ShopDetails from "./pages/members/detailRiwayatPesanan"

function App() {
  return (
    <>
        <Router>
          <NavbarUsers />
            <Routes>
                {/* <Route path={"/dashboard"} element={<Dashboard />} /> */}
                <Route path={"users/registrasi"} element={<Register />} />
                <Route path={"users/login"} element={<Login />} />
                <Route path={"users/privacy-policy"} element={<PrivacyPolicy />} />
                <Route path={"users/about-us"} element={<AboutUs />} />
                <Route path={"users/shop"} element={<Shop />}/>
                <Route path={"users/shop/:id"} element={<ShopDetails />}/>
            </Routes>
          <Footer /> 
        </Router>
    </>
  )
}

export default App;
