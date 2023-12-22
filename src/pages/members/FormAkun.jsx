import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDetailUsers, createDetailUser, updateDetailUser } from "../../modules/fetch/members/detailUser";

const UpdateDetailUserForm = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    id: "",
    userId: "",
    nama: "",
    alamat: "",
    kodePos: "",
    telepon: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const detailUsers = await getAllDetailUsers();

        if (detailUsers && detailUsers.data && detailUsers.data.length > 0) {
          const userToUpdate = detailUsers.data[0];
          setUserDetails(userToUpdate);
        } else {
          // If no user details found, set initial state for creation
          setUserDetails({
            userId: "setUserIdHere", // Set a default user ID or fetch from authentication context
            nama: "",
            alamat: "",
            kodePos: "",
            telepon: "",
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateUser = async () => {
    try {
      console.log("User details before update:", userDetails);

      // Check if user details exist before attempting the update
      if (!userDetails || !userDetails.userId) {
        console.warn("User details not found");
        return; // Exit the function if user details are not found
      }

      if (userDetails.id) {
        // If user details exist, update them
        const updatedUser = await updateDetailUser(userDetails.userId, userDetails);
        console.log("User details updated:", updatedUser);
      } else {
        // If user details don't exist, create them
        const createdUser = await createDetailUser(userDetails);
        console.log("User details created:", createdUser);
      }

      navigate("/users/detail-user");
    } catch (error) {
      console.error("Error updating/creating user details:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9EC] p-6">
      <div className="max-w-md mt-4 mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Update Detail User</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Nama:
            </label>
            <input
              type="text"
              name="nama"
              value={userDetails.nama}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Alamat:
            </label>
            <input
              type="text"
              name="alamat"
              value={userDetails.alamat}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Kode Pos:
            </label>
            <input
              type="text"
              name="kodePos"
              value={userDetails.kodePos}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              No. Telp:
            </label>
            <input
              type="text"
              name="telepon"
              value={userDetails.telepon}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="button"
            onClick={handleUpdateUser}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetailUserForm;
