// import { useNavigate } from 'react-router-dom';
// import BookForm from '../../components/admins/BukuForm';

// const UpdateBuku = () => {
//   // const { id } = useParams();
//   const navigate = useNavigate();

//   const handleSubmitSuccess = () => {
//     // Redirect to the dashboard after a successful update
//     navigate('/admins/dashboard');
//   };

//   return (
//     <div className="min-h-screen bg-white py-4">
//       <div className="m-4">
//         <h2 className="m-4 text-2xl font-bold mb-4">Update Buku</h2>
//         {/* Pass handleSubmitSuccess as onSubmit */}
//         <BookForm onSubmit={handleSubmitSuccess} />
//       </div>
//     </div>
//   );
// };

// export default UpdateBuku;


import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../../components/admins/BukuForm';
import { updateBuku } from '../../modules/fetch/admins/buku';
import FileUpload from '../../components/admins/fileBuku'; 

const UpdateBuku = () => {
  const { id } = useParams(); // Get the 'id' value from the URL parameter
  const navigate = useNavigate();

  const handleSubmitSuccess = (formData) => {
    // Include 'id' in the update call
    updateBuku(id, formData)
      .then(() => {
        // Redirect to the dashboard after a successful update
        navigate('/admins/dashboard');
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="m-4">
        <h2 className="m-4 text-2xl font-bold mb-4">Update Buku</h2>
        {/* Pass 'id' and handleSubmitSuccess as props */}
        <BookForm initialData={{ id }} onSubmit={handleSubmitSuccess} />
        
        {/* Include the FileUpload component */}
        <FileUpload />
      </div>
    </div>
  );
};

export default UpdateBuku;