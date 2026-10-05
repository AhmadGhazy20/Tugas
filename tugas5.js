// **Data Produk** (Minimal 5 data awal)
let produklist = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 4, nama: "Smartwatch", harga: 2000000 },
    { id: 5, nama: "Headphone Wireless", harga: 1500000 },
    { id: 6, nama: "Keyboard Mechanical", harga: 800000 }
  ];
  
  // **Event Listener**
  // Objek sederhana untuk mensimulasikan penanganan event ketika ada perubahan data
  const eventHandler = {
    onDataChange: function(action, detail) {
      if (action === "tambah") {
        console.log(`\n[EVENT] 🟢 Produk baru ditambahkan: ${detail}`);
      } else if (action === "hapus") {
        console.log(`\n[EVENT] 🔴 Produk dengan ID [${detail}] berhasil dihapus`);
      }
    }
  };
  
  // **Menambahkan Produk dengan Spread Operator**
  function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    
    // Spread Operator (...) digunakan untuk menggabungkan array produk lama dengan produk baru
    produklist = [...produklist, produkBaru];
    
    // Memanggil event listener
    eventHandler.onDataChange("tambah", nama);
  }
  
  // **Menghapus Produk dengan Rest Parameter**
  // Rest parameter (...ids) memungkinkan fungsi menerima satu atau banyak ID sekaligus dalam bentuk array
  function hapusProduk(...ids) {
    // Filter akan mengembalikan produk yang ID-nya TIDAK termasuk dalam array ids yang dihapus
    produklist = produklist.filter(produk => !ids.includes(produk.id));
    
    // Memanggil event listener
    eventHandler.onDataChange("hapus", ids.join(", "));
  }
  
  // **Menampilkan Produk dengan Destructuring**
  function tampilkanProduk() {
    console.log("\n=== DAFTAR PRODUK ===");
    produklist.forEach(produk => {
      // Destructuring objek untuk mengekstrak id, nama, dan harga secara langsung
      const { id, nama, harga } = produk;
      console.log(`ID: ${id} | ${nama} - Rp${harga.toLocaleString('id-ID')}`);
    });
    console.log("=====================");
  }
  
  // ==========================================
  // **Eksekusi Kode (Sesuai contoh pada soal)**
  // ==========================================
  
  // 1. Tampilkan produk awal
  tampilkanProduk();
  
  // 2. Contoh penambahan data
  tambahProduk(3, "Tablet", 7000000);
  tampilkanProduk();
  
  // 3. Contoh penghapusan data
  hapusProduk(2);
  tampilkanProduk();