import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("Menampilkan 10 data awal:");
  index();

  console.log("Menambahkan 2 data baru:");
  // Menambah minimal 2 data pada proses push
  store({ nama: 'Kevin', umur: 22, alamat: 'Jl. Baru 1', email: 'kevin@test.com' });
  store({ nama: 'Lia', umur: 21, alamat: 'Jl. Baru 2', email: 'lia@test.com' });
  
  console.log("\nMenampilkan data setelah ditambah:");
  index();

  console.log("Menghapus 1 data (misal data terakhir di index 11):");
  // Hapus data si 'Lia' yang ada di index ke-11
  destroy(11);

  console.log("\nMenampilkan data setelah dihapus:");
  index();
};

main();