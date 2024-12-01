// Handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const employeeId = document.getElementById('employeeId').value;
    const password = document.getElementById('password').value;
  
    // Simulasi login sederhana (seharusnya menggunakan autentikasi backend)
    if (employeeId === '123' && password === 'password123') {
      document.getElementById('welcomeMessage').textContent = `Selamat datang, Karyawan ${employeeId}`;
      document.querySelector('.login-form').style.display = 'none';
      document.getElementById('attendanceSection').style.display = 'block';
    } else {
      alert('ID Karyawan atau Password salah!');
    }
  });
  
  // Handle attendance marking
  document.getElementById('markAttendance').addEventListener('click', function() {
    alert('Absensi berhasil dicatat!');
    // Anda bisa menambahkan logika untuk mencatat absensi di database atau melalui API
  });
  