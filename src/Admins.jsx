import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarAdmins from "./components/admins/Navbar";
import DashboardAdmin from "./pages/admins/Dashboard";
import DetailBuku from "./pages/admins/DetailBuku";
import DetailUser from "./pages/admins/DetailUser";
import CreateBuku from "./pages/admins/CreateBook";
import UpdateBuku from "./pages/admins/UpdateBuku";
// import DeleteBuku from "./pages/admins/DeleteBuku";
import UpdateDetailUserForm from "./pages/admins/AkunForm";
import BukuPopuler from "./pages/admins/BukuPopuler";
import BukuRekomendasi from "./pages/admins/BukuRekomendasi";
import KategoriAdmin from "./pages/admins/Kategori";
import NewCategoryPage from "./pages/admins/CreateKategori";
import RegisterAdminPages from "./pages/admins/Registrasi";
import LoginAdmins from "./pages/admins/Login";
import PenulisPage from "./pages/admins/Penulis";
// import PenulisDelete from "./pages/admins/DeletePenulis";
// import PenulisAddEdit from "./pages/admins/PenulisAddEdit";
// import PenulisList from "./pages/admins/PenulisList";
import BukuPage from "./pages/admins/BukuPage";
import PenerbitPage from "./pages/admins/Penerbit";
// import PenerbitDelete from "./pages/admins//DeletePenerbit";
// import PenerbitAddEdit from "./pages/admins/PenerbitAddEdit";
// import PenerbitList from "./pages/admins/PenerbitList";
import AdminGudangPage from "./pages/admins/Gudang";
// import ShopAdmins from "./pages/admins/riwayatPesanan";
// import DetailShopAdmins from "./pages/admins/detailRiwayatPEsanan"

function AppAdmin() {
  return (
    <>
        <Router>
          <NavbarAdmins />
            <Routes>
                <Route path={"admins/dashboard/"} element={<DashboardAdmin />} />
                <Route path={"admins/kategori"} element={<KategoriAdmin />} />
                <Route path={"admins/registrasi"} element={<RegisterAdminPages />} />
                <Route path={"admins/create-buku"} element={<CreateBuku />} />
                <Route path={"admins/update-buku/:id"} element={<UpdateBuku />} />
                {/* <Route path={"admins/delete-buku/:id"} element={<DeleteBuku />} /> */}
                <Route path={"admins/create-kategori"} element={<NewCategoryPage />} />
                <Route path={"admins/buku-populer"} element={<BukuPopuler />} />
                <Route path={"admins/buku-rekomendasi"} element={<BukuRekomendasi />} />
                <Route path={"admins/detail-buku/:id"} element={<DetailBuku />} />
                <Route path={"admins/detail-user"} element={<DetailUser />} />
                <Route path={"admins/form-akun"} element={<UpdateDetailUserForm />} />
                <Route path={"admins/login"} element={<LoginAdmins />} />
                <Route path={"admins/penulis"} element={<PenulisPage />} />
                {/* <Route path={"admins/add-edit-penulis"} element={<PenulisAddEdit />} />
                <Route path={"admins/delete-penulis"} element={<PenulisDelete />} />
                <Route path={"admins/list-penulis"} element={<PenulisList />} /> */}
                <Route path={"admins/buku-page"} element={<BukuPage />} />
                <Route path={"admins/penerbit"} element={<PenerbitPage />} />
                {/* <Route path={"admins/add-edit-penerbit"} element={<PenerbitAddEdit />} />
                <Route path={"admins/delete-penerbit"} element={<PenerbitDelete />} />
                <Route path={"admins/list-penerbit"} element={<PenerbitList />} /> */}
                <Route path={"admins/gudang"} element={<AdminGudangPage />} />
                {/* <Route path={"admins/shop"} element={<ShopAdmins />} />
                <Route path={"admins/shop/:id"} element={<DetailShopAdmins />} /> */}
            </Routes>
        </Router>
    </>
  )
}

export default AppAdmin;
