import { useState } from 'react';
import BookForm from "../../components/admins/BukuForm";
import UploadImage from '../../components/admins/fileBuku';
import { createBuku } from "../../modules/fetch/admins/buku";
import { createFileBuku } from "../../modules/fetch/admins/fileBuku"; // Import the createFileBuku function

const NewBookPage = () => {
  const [fileData, setFileData] = useState(null);

  const handleCreateBook = async (formData) => {
    try {
      const newBookId = await createBuku(formData);
      console.log('New Book created with ID:', newBookId);
      setFileData({ bookId: newBookId, formData }); // Save formData for later use
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const handleFileSubmit = async () => {
    try {
      // Check if bookId is available before submitting file
      if (fileData && fileData.bookId && fileData.formData) {
        // Pass bookId and formData to createFileBuku function
        await createFileBuku(fileData.bookId, fileData.formData);
        console.log('File submitted for Book ID:', fileData.bookId);
      } else {
        console.error('Book ID or formData is missing');
      }
    } catch (error) {
      console.error('Error submitting file:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-xl">
      <h1 className="text-3xl font-semibold mb-4">Create New Book</h1>

      <BookForm onSubmit={handleCreateBook} />
      <UploadImage onSubmit={handleFileSubmit} />
    </div>
  );
};

export default NewBookPage;

// import BookForm from "../../components/admins/BukuForm";
// import FileUpload from "../../components/admins/fileBuku";

// const NewBookPage = () => {
//   const handleSubmit = (formData) => {
//     // Handle form submission logic here
//     console.log("Form submitted with data:", formData);
//   };

//   return (
//     <div className="container mx-auto p-8 max-w-xl">
//       <h1 className="text-3xl font-semibold mb-4">Create New Book</h1>

//       {/* Pass the handleSubmit function to the onSubmit prop */}
//       <BookForm onSubmit={handleSubmit} />
//       <FileUpload />
//     </div>
//   );
// };

// export default NewBookPage;
