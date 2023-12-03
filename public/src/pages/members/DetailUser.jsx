import { useState, useEffect } from "react";
import { getAllDetailUsers } from "../../modules/fetch/members/detailUser";
import { Link } from "react-router-dom";

const DetailUser = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (userId) {
          try {
            const userDetailsResponse = await getAllDetailUsers(userId);
            const userDetailsData = userDetailsResponse.data;

            console.log("userDetailsResponse:", userDetailsResponse);
            console.log("userDetailsData:", userDetailsData);

            setUserDetails(userDetailsData);
          } catch (error) {
            if (error.response && error.response.status === 404) {
              console.warn("User details not found");
            } else {
              console.error("Error fetching user details:", error.message);
              setError("");
            }
          }
        } else {
          console.error("User ID is undefined or null");
          setError("");
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        setError("");
      }
    };

    fetchUserDetails();
  }, []);

  const isProfileTabActive = activeTab === "profile";

  return (
    <div className="min-h-screen bg-[#FDF9EC] p-10 md:flex">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
          <a
            href="#"
            className={`inline-flex items-center px-2 py-2 text-black hover:bg-[#677C52] bg-[#A4B890] rounded-lg active w-full dark:bg-blue-600 ${
              isProfileTabActive ? "active" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Akun Saya
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`inline-flex items-center px-2 py-2 text-black hover:bg-[#677C52] bg-[#A4B890] rounded-lg active w-full dark:bg-blue-600${
              activeTab === "orders" ? "active" : ""
            }`}
            onClick={() => setActiveTab("orders")}
          >
            Pesanan Saya
          </a>
        </li>
      </ul>
      <div
        className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full"
        style={{ maxHeight: "40vh", overflowY: "auto" }}
      >
        {error && <p className="text-red-500">{error}</p>}
        {isProfileTabActive && (
          <>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
              Akun Saya
            </h3>
            <div className="text-black">
              <p className="mb-2">
                Nama: {userDetails?.[0]?.nama || "Belum Lengkap"}
              </p>
              <p className="mb-2">
                Kode Pos: {userDetails?.[0]?.kodePos || "Belum Lengkap"}
              </p>
              <p className="mb-2">
                No. Telp: {userDetails?.[0]?.telepon || "Belum Lengkap"}
              </p>
              <p className="mb-2">
                Alamat: {userDetails?.[0]?.alamat || "Belum Lengkap"}
              </p>
            </div>
            <div className="flex flex-row justify-center space-x-4 m-5">
              <div className="">
                <button className="bg-[#677C52] text-white p-2 rounded hover:bg-[#A4B890]">
                  <Link to="/users/form-akun">Update Data Akun</Link>
                </button>
              </div>
            </div>
          </>
        )}
        {activeTab === "orders" && (
          <>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Pesanan Saya
            </h3>
            {/* Display order information here */}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailUser;
