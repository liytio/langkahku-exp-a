# PRD – LangkahKu

**Product Requirements Document**
Versi 1.0 · 22 November 2026 · Penyusun: Ragil Tri Prasytio (202310370311369)
Mata kuliah Rekayasa Interaksi – Eksperimen A (Baseline: PRD Only)

---

## 1. Ringkasan Produk

LangkahKu adalah aplikasi web pendamping untuk pengguna smartwatch yang memantau aktivitas harian, khususnya jumlah langkah. Aplikasi menampilkan data langkah yang direkam oleh dua perangkat, yaitu smartwatch dan HP, dalam satu tampilan.

## 2. Latar Belakang Masalah

Pengguna smartwatch sering melepas jamnya (saat mandi, wudu, tidur, atau mengisi daya), tetapi tetap membawa HP. Selama jam dilepas, langkah tetap terekam oleh sensor HP. Akibatnya, angka langkah di jam dan di aplikasi pendamping bisa berbeda, dan pengguna bingung angka mana yang benar.

Hasil riset pengguna (8 responden):

- Angka di jam lebih rendah daripada aplikasi pada 5 dari 6 hari pengamatan (selisih 134–2.360 langkah/hari).
- Hanya 2 dari 8 responden yang tahu bahwa langkah dihitung dari gabungan jam dan HP.
- Rata-rata skor kepercayaan terhadap data langkah: 2,8 dari 5.

## 3. Tujuan Produk

1. Menampilkan total langkah harian pengguna secara jelas.
2. Menampilkan data langkah dari HP dan jam.
3. Membantu pengguna memantau target langkah harian.
4. Meningkatkan kepercayaan pengguna terhadap data aktivitas.

## 4. Target Pengguna

Mahasiswa usia 18–24 tahun yang memakai smartwatch dan HP Android, sering melepas jam tetapi selalu membawa HP, dan lebih sering melihat progres di jam daripada membuka aplikasi.

## 5. Fitur Utama

| ID | Fitur | Deskripsi |
|----|-------|-----------|
| F1 | Dashboard hari ini | Menampilkan total langkah hari ini, target, persentase progres, jarak (km), dan kalori. |
| F2 | Sumber data langkah | Menampilkan jumlah langkah yang direkam oleh HP dan oleh jam. |
| F3 | Tampilan jam | Menampilkan angka yang terlihat di layar smartwatch. |
| F4 | Riwayat 7 hari | Menampilkan grafik atau daftar langkah selama 7 hari terakhir. |
| F5 | Sinkronisasi | Tombol untuk menyinkronkan data dari perangkat. |
| F6 | Target langkah | Pengguna dapat mengubah target langkah harian. |
| F7 | Bagikan | Pengguna dapat membagikan ringkasan langkah hari ini. |

## 6. User Stories

- Sebagai pengguna, saya ingin melihat total langkah hari ini agar tahu progres saya.
- Sebagai pengguna, saya ingin melihat langkah dari HP dan jam agar tahu asal data saya.
- Sebagai pengguna, saya ingin melihat riwayat 7 hari agar dapat memantau kebiasaan saya.
- Sebagai pengguna, saya ingin menyinkronkan data agar angkanya terbaru.
- Sebagai pengguna, saya ingin mengatur target langkah sesuai kemampuan saya.
- Sebagai pengguna, saya ingin membagikan ringkasan langkah ke teman atau media sosial.

## 7. Ruang Lingkup

**Termasuk:**
- Aplikasi web satu halaman yang berjalan di browser HP dan laptop.
- Data langkah berupa data simulasi (tidak terhubung ke perangkat asli).

**Tidak termasuk:**
- Integrasi dengan API HUAWEI Health atau perangkat asli.
- Login dan akun pengguna.
- Data kesehatan selain langkah (detak jantung, tidur, dll).

## 8. Kebutuhan Teknis

- HTML, Tailwind CSS (CDN), dan JavaScript tanpa framework dan tanpa proses build.
- Dapat dibuka langsung di browser atau di-hosting di GitHub Pages.
- Target pengguna disimpan di browser (localStorage).

## 9. Ukuran Keberhasilan

- Pengguna dapat menyebutkan total langkah hari ini dalam waktu kurang dari 5 detik.
- Pengguna dapat menyebutkan sumber data langkah (HP atau jam).
- Skor kepercayaan pengguna terhadap data meningkat dari 2,8 menjadi ≥ 4 dari 5.
