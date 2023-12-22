import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryForm from "../../components/admins/KategoriForm";
import {
  getAllKategoris,
  createKategoris,
  updateKategoris,
  deleteKategoris,
} from "../../modules/fetch/admins/kategori";

const AdminKategoriPage = () => {
  const [kategoris, setKategoris] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCreateMode, setCreateMode] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch all categories when the component mounts
    fetchAllKategoris();
  }, []);

  const fetchAllKategoris = async () => {
    try {
      const allKategoris = await getAllKategoris();
      setKategoris(allKategoris);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  const handleCreateCategory = async (formData) => {
    try {
      await createKategoris(formData);
      // Refresh the category list after creating a new category
      fetchAllKategoris();
      // Reset the form
      setSelectedCategory(null);
      setCreateMode(true);
    } catch (error) {
      console.error("Error creating category:", error.message);
    }
  };

  const handleUpdateCategory = async (formData) => {
    try {
      if (selectedCategory) {
        await updateKategoris(selectedCategory.id, formData);
        // Refresh the category list after updating a category
        fetchAllKategoris();
        // Reset the form and exit update mode
        setSelectedCategory(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error("Error updating category:", error.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      if (window.confirm("Are you sure you want to delete this category?")) {
        await deleteKategoris(categoryId);
        // Refresh the category list after deleting a category
        fetchAllKategoris();
        // Reset the form and exit update mode
        setSelectedCategory(null);
        setCreateMode(true);
      }
    } catch (error) {
      console.error("Error deleting category:", error.message);
    }
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setCreateMode(false);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mb-4">
        <Link to="/admins/dashboard" className="text-blue-500">
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-3xl font-semibold mb-4">Manage Categories</h1>
      <div className="max-w-md">
        <CategoryForm
          onSubmit={isCreateMode ? handleCreateCategory : handleUpdateCategory}
          initialData={selectedCategory}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Categories:</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Deskripsi</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {kategoris.map((category, index) => (
              <tr key={category.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{category.nama}</td>
                <td className="border p-2">{category.deskripsi}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditCategory(category)}
                    className="ml-2 bg-blue-500 text-white p-2 ml-auto "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
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

export default AdminKategoriPage;