document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const memberList = document.getElementById('memberList');
  
    // Fungsi untuk mendaftarkan member
    const registerMember = async (formData) => {
      try {
        const response = await fetch('/user/members/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        });
  
        return response.json();
      } catch (error) {
        console.error(error);
      }
    };
  
    // Fungsi untuk mengambil dan menampilkan daftar members
    const fetchMembers = async () => {
      try {
        const response = await fetch('/user/members');
        const members = await response.json();
  
        // Bersihkan daftar sebelum menambahkan yang baru
        memberList.innerHTML = '';
  
        // Tambahkan setiap member ke daftar
        members.forEach((member) => {
          const listItem = document.createElement('li');
          listItem.textContent = `ID: ${member.id}, Nama: ${member.nama}, Alamat: ${member.alamat}, Kode Pos: ${member.kodePos}, Telepon: ${member.telepon}`;
          memberList.appendChild(listItem);
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    // Event listener untuk form registrasi
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(registrationForm);
      const response = await registerMember(formData);
  
      if (response.status === 201) {
        alert('Registrasi berhasil!');
        registrationForm.reset();
        fetchMembers();
      } else {
        alert('Registrasi gagal!');
      }
    });
  
    // Panggil fungsi untuk mengambil dan menampilkan daftar members saat halaman dimuat
    fetchMembers();
  
    console.log('sukses');
  });
  