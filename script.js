function showSection(id) {
  // Sembunyikan semua section
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  // Tampilkan section yang dipilih
  document.getElementById(id).classList.add('active');
  // Highlight tombol aktif
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.nav-btn[onclick*="' + id + '"]').classList.add('active');
}
// Tampilkan home saat pertama kali
document.addEventListener('DOMContentLoaded', () => showSection('home'));