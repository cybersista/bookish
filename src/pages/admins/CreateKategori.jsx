// import { useState } from 'react';
import CategoryForm from '../../components/admins/KategoriForm';
import { createKategoris } from '../../modules/fetch/admins/kategori';

const NewCategoryPage = () => {
  const handleCreateCategory = async (formData) => {
    try {
      await createKategoris(formData);
      console.log('New Category created successfully!');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-xl">
      <h1 className="text-3xl font-semibold mb-4">Create New Category</h1>
      <CategoryForm onSubmit={handleCreateCategory} />
    </div>
  );
};

export default NewCategoryPage;
