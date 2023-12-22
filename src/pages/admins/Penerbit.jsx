import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PenerbitForm from '../../components/admins/PenerbitForm';
import { getAllPenerbit, createPenerbit, updatePenerbit, deletePenerbit } from '../../modules/fetch/admins/penerbit';

const PenerbitPage = () => {
  const [penerbitList, setPenerbitList] = useState([]);
  const [selectedPenerbit, setSelectedPenerbit] = useState(null);
  const [isCreateMode, setCreateMode] = useState(true);

  useEffect(() => {
    fetchAllPenerbit();
  }, []);

  const fetchAllPenerbit = async () => {
    try {
      const allPenerbit = await getAllPenerbit();
      setPenerbitList(allPenerbit);
    } catch (error) {
      console.error('Error fetching penerbit list:', error.message);
    }
  };

  const handleCreatePenerbit = async (formData) => {
    try {
      await createPenerbit(formData.nama);
      fetchAllPenerbit();
      setSelectedPenerbit(null);
      setCreateMode(true);
    } catch (error) {
      console.error('Error creating penerbit:', error.message);
    }
  };

  const handleUpdatePenerbit = async (formData) => {
    try {
      if (selectedPenerbit) {
        await updatePenerbit(selectedPenerbit.id, formData.nama);
        fetchAllPenerbit();
        setSelectedPenerbit(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error('Error updating penerbit:', error.message);
    }
  };

  const handleDeletePenerbit = async (penerbitId) => {
    try {
      if (window.confirm('Are you sure you want to delete this penerbit?')) {
        await deletePenerbit(penerbitId);
        fetchAllPenerbit();
        setSelectedPenerbit(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error('Error deleting penerbit:', error.message);
    }
  };

  const handleEditPenerbit = (penerbit) => {
    setSelectedPenerbit(penerbit);
    setCreateMode(false);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mb-4">
        <Link to="/admins/dashboard" className="text-blue-500">
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-3xl font-semibold mb-4">Manage Penerbit</h1>
      <div className="max-w-md">
        <PenerbitForm
          onSubmit={isCreateMode ? handleCreatePenerbit : handleUpdatePenerbit}
          initialData={selectedPenerbit}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Penerbit:</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {penerbitList.map((penerbit, index) => (
              <tr key={penerbit.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{penerbit.nama}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditPenerbit(penerbit)}
                    className="ml-2 bg-blue-500 text-white p-2 ml-auto "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePenerbit(penerbit.id)}
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

export default PenerbitPage;
