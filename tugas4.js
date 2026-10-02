// Class dasar buat kendaraan
class Kendaraan {
  constructor(merek, tipe) {
    this.merek = merek;
    this.tipe = tipe;
  }
  
  detail() {
    return `${this.merek} ${this.tipe}`;
  }
}

// Sub-class Mobil
class Mobil extends Kendaraan {
  constructor(merek, tipe, pintu) {
    super(merek, tipe);
    this.pintu = pintu;
  }
  
  detail() {
    return `Mobil ${super.detail()} (${this.pintu} pintu)`;
  }
}

// Sub-class Motor 
class Motor extends Kendaraan {
  constructor(merek, tipe, cc) {
    super(merek, tipe);
    this.cc = cc;
  }
  
  detail() {
    return `Motor ${super.detail()} (${this.cc}cc)`;
  }
}

// 1. Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // defaultnya null krn blm nyewa apa-apa
  }

  // 2. Metode buat nyatet transaksi
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`[LOG] ${this.nama} berhasil nyewa ${kendaraan.detail()}`);
  }
}

// 3. Sistem buat nampilin daftar yang lagi nyewa
class SistemRental {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahData(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilPenyewaAktif() {
    console.log("\n--- Daftar Penyewa Aktif ---");
    
    let adaPenyewa = false;
    
    for (let i = 0; i < this.daftarPelanggan.length; i++) {
      let p = this.daftarPelanggan[i];
      if (p.kendaraanDisewa !== null) {
        console.log(`- ${p.nama} (${p.nomorTelepon}) | Bawa: ${p.kendaraanDisewa.detail()}`);
        adaPenyewa = true;
      }
    }

    if (!adaPenyewa) {
      console.log("Belum ada yang nyewa nih.");
    }
    console.log("----------------------------\n");
  }
}

// --- TEST JALANIN KODE ---

let sistem = new SistemRental();

// Siapin dummy kendaraan
let avanza = new Mobil("Toyota", "Avanza", 4);
let nmax = new Motor("Yamaha", "NMAX", 155); 

// Siapin dummy pelanggan
let bayu = new Pelanggan("Bayu", "0812345");
let dika = new Pelanggan("Dika", "0898765");
let cindy = new Pelanggan("Cindy", "0877777");

sistem.tambahData(bayu);
sistem.tambahData(dika);
sistem.tambahData(cindy);

// Simulasi nyewa 
dika.sewaKendaraan(avanza);
bayu.sewaKendaraan(nmax);

// Cek output daftar penyewanya
sistem.tampilPenyewaAktif();