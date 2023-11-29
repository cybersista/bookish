import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Perubahan di sini
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
        <Router>
          <Navbar />
            <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />
            </Routes>
          <Footer /> 
        </Router>
    </>
  )
}

export default App;
