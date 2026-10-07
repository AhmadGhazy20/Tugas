import users from "./data.mjs";

const index = () => {
  console.log("=== Data Users ===");
  // Menampilkan data menggunakan map()
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
  console.log("==================\n");
};

const store = (user) => {
  // Menambahkan data menggunakan push()
  users.push(user);
  console.log(`[SUKSES] Data ${user.nama} berhasil ditambahkan!`);
};

const destroy = (indexData) => {
  // Menghapus data berdasarkan index menggunakan splice()
  let removed = users.splice(indexData, 1);
  console.log(`[SUKSES] Data ${removed[0].nama} berhasil dihapus!`);
};

export { index, store, destroy };