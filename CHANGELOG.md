# Changelog – LangkahKu Eksperimen A

Semua perubahan penting pada proyek ini dicatat di sini. Nomor prompt mengacu pada [`PROMPT_LOG.md`](PROMPT_LOG.md).

## [1.0.2] – 2026-11-24

### Dokumentasi
- `README.md` sekarang memuat PRD lengkap (bagian 1–9), info proyek, link demo, struktur file, dan status implementasi fitur F1–F7.
- Menambahkan `CHANGELOG.md` ini.
- Tidak ada perubahan kode aplikasi. (Prompt 4)

## [1.0.1] – 2026-11-22

### Diperbaiki
- **Grafik Riwayat 7 Hari tidak tampil** (`app.js`). Batang grafik tidak terlihat; tinggi batang diperbaiki sehingga ketujuh batang muncul sesuai jumlah langkah tiap hari. (Prompt 3)

## [1.0.0] – 2026-11-22

### Ditambahkan
- Rilis awal aplikasi yang dibangun hanya dari `PRD.md`. (Prompt 2)
- `index.html`: tata letak satu halaman dengan Tailwind CSS (CDN).
- `app.js`: data simulasi 7 hari (langkah HP dan jam) serta fitur:
  - F1 Dashboard hari ini: total langkah, progres target, jarak, kalori.
  - F2 Sumber data langkah: angka HP dan jam.
  - F3 Tampilan jam: tiruan layar smartwatch.
  - F4 Riwayat 7 hari: grafik batang.
  - F5 Sinkronisasi: simulasi penambahan langkah + notifikasi.
  - F6 Target langkah: ubah target, disimpan di localStorage.
  - F7 Bagikan: Web Share API atau salin ke clipboard.
- `PRD.md`, `README.md`, dan `PROMPT_LOG.md`. (Prompt 1)
