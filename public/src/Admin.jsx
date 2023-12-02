import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarAdmins from "./components/admins/Navbar";
// import Footer from "./components/Footer";
import DashboardAdmin from "./pages/admins/Dashboard";
import KategoriAdmin from "./pages/admins/Kategori";
import RegisterAdminPages from "./pages/admins/Registrasi";
import LoginAdmins from "./pages/admins/Login";
import ShopAdmins from "./pages/admins/riwayatPesanan";

function AppAdmin() {
  return (
    <>
        <Router>
          <NavbarAdmins />
            <Routes>
                <Route path={"admins/dashboard/"} element={<DashboardAdmin />} />
                <Route path={"admins/kategori"} element={<KategoriAdmin />} />
                <Route path={"admins/registrasi"} element={<RegisterAdminPages />} />
                <Route path={"admins/login"} element={<LoginAdmins />} />
                <Route path={"admins/shop"} element={<ShopAdmins />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppAdmin;
