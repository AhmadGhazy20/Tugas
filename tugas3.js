// 1. Buat array produkToko yang menyimpan daftar produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
  ];
  
  // 2. Buat fungsi tambahProduk(nama, harga, stok)
  function tambahProduk(nama, harga, stok) {
    // Menentukan ID baru (mengambil ID dari produk terakhir dan ditambah 1)
    let idBaru = 1;
    if (produkToko.length > 0) {
      idBaru = produkToko[produkToko.length - 1].id + 1;
    }
  
    // Membuat objek produk baru
    let produkBaru = {
      id: idBaru,
      nama: nama,
      harga: harga,
      stok: stok
    };
  
    // Menambahkan produk ke dalam array
    produkToko.push(produkBaru);
    console.log(`[SUKSES] Produk '${nama}' berhasil ditambahkan dengan ID ${idBaru}.`);
  }
  
  // 3. Buat fungsi hapusProduk(id)
  function hapusProduk(id) {
    // Mencari index produk berdasarkan ID
    let indexProduk = produkToko.findIndex(produk => produk.id === id);
  
    // Jika produk ditemukan (index tidak -1)
    if (indexProduk !== -1) {
      let produkDihapus = produkToko.splice(indexProduk, 1);
      console.log(`[SUKSES] Produk '${produkDihapus[0].nama}' (ID: ${id}) berhasil dihapus.`);
    } else {
      console.log(`[GAGAL] Produk dengan ID ${id} tidak ditemukan.`);
    }
  }
  
  // 4. Buat fungsi tampilkanProduk()
  function tampilkanProduk() {
    console.log("\n=== DAFTAR PRODUK TOKO ===");
    if (produkToko.length === 0) {
      console.log("Produk kosong.");
    } else {
      produkToko.forEach(produk => {
        console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga.toLocaleString("id-ID")} | Stok: ${produk.stok}`);
      });
    }
    console.log("==========================\n");
  }
  
  
  // ==========================================
  // SIMULASI PENGGUNAAN (TESTING)
  // ==========================================
  
  // Menampilkan produk awal
  tampilkanProduk();
  
  // Menambahkan produk baru
  tambahProduk("Monitor", 1500000, 3);
  tambahProduk("Headset", 450000, 15);
  
  // Menampilkan produk setelah ditambah
  tampilkanProduk();
  
  // Menghapus produk dengan ID 2 (Mouse)
  hapusProduk(2);
  
  // Mencoba menghapus ID yang tidak ada
  hapusProduk(99);
  
  // Menampilkan produk akhir
  tampilkanProduk();