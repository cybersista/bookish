import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarAdmins from "./components/admins/Navbar";
import DashboardAdmin from "./pages/admins/Dashboard";
import DetailBuku from "./pages/admins/DetailBuku";
import DetailUser from "./pages/admins/DetailUser";
import UpdateDetailUserForm from "./pages/admins/AkunForm";
import BukuPopuler from "./pages/admins/BukuPopuler";
import BukuRekomendasi from "./pages/admins/BukuRekomendasi";
import KategoriAdmin from "./pages/admins/Kategori";
import RegisterAdminPages from "./pages/admins/Registrasi";
import LoginAdmins from "./pages/admins/Login";

function AppAdmin() {
  return (
    <>
        <Router>
          <NavbarAdmins />
            <Routes>
                <Route path={"admins/dashboard/"} element={<DashboardAdmin />} />
                <Route path={"admins/kategori"} element={<KategoriAdmin />} />
                <Route path={"admins/registrasi"} element={<RegisterAdminPages />} />
                <Route path={"admins/buku-populer"} element={<BukuPopuler />} />
                <Route path={"admins/buku-rekomendasi"} element={<BukuRekomendasi />} />
                <Route path={"admins/detail-buku/:id"} element={<DetailBuku />} />
                <Route path={"admins/detail-user"} element={<DetailUser />} />
                <Route path={"admins/form-akun"} element={<UpdateDetailUserForm />} />
                <Route path={"admins/login"} element={<LoginAdmins />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppAdmin;
