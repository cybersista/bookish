import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PenulisForm from '../../components/admins/PenulisForm';
import { getAllPenulis, createPenulis, updatePenulis, deletePenulis } from '../../modules/fetch/admins/penulis';

const AdminPenulisPage = () => {
  const [penulisList, setPenulisList] = useState([]);
  const [selectedPenulis, setSelectedPenulis] = useState(null);
  const [isCreateMode, setCreateMode] = useState(true);

  useEffect(() => {
    fetchAllPenulis();
  }, []);

  const fetchAllPenulis = async () => {
    try {
      const allPenulis = await getAllPenulis();
      setPenulisList(allPenulis);
    } catch (error) {
      console.error('Error fetching penulis list:', error.message);
    }
  };

  const handleCreatePenulis = async (formData) => {
    try {
      await createPenulis(formData.nama);
      fetchAllPenulis();
      setSelectedPenulis(null);
      setCreateMode(true);
    } catch (error) {
      console.error('Error creating penulis:', error.message);
    }
  };

  const handleUpdatePenulis = async (formData) => {
    try {
      if (selectedPenulis) {
        await updatePenulis(selectedPenulis.id, formData.nama);
        fetchAllPenulis();
        setSelectedPenulis(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error('Error updating penulis:', error.message);
    }
  };

  const handleDeletePenulis = async (penulisId) => {
    try {
      if (window.confirm('Are you sure you want to delete this penulis?')) {
        await deletePenulis(penulisId);
        fetchAllPenulis();
        setSelectedPenulis(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error('Error deleting penulis:', error.message);
    }
  };

  const handleEditPenulis = (penulis) => {
    setSelectedPenulis(penulis);
    setCreateMode(false);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mb-4">
        <Link to="/admins/dashboard" className="text-blue-500">
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-3xl font-semibold mb-4">Manage Penulis</h1>
      <div className="max-w-md">
        <PenulisForm
          onSubmit={isCreateMode ? handleCreatePenulis : handleUpdatePenulis}
          initialData={selectedPenulis}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Penulis:</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {penulisList.map((penulis, index) => (
              <tr key={penulis.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{penulis.nama}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditPenulis(penulis)}
                    className="ml-2 bg-blue-500 text-white p-2 ml-auto "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePenulis(penulis.id)}
                    className="ml-2 bg-red-500 text-white p-2 ml-auto"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPenulisPage;
