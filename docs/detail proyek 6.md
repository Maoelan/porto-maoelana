Berikut adalah beberapa pilihan kalimat dan kerangka showcase yang dirancang khusus untuk membuat proyek ini terlihat sangat profesional, high-impact, dan menunjukkan tingkat keahlian teknis Anda yang tinggi (Senior-Level). Anda bisa menyesuaikannya untuk LinkedIn, CV, atau Website Portofolio.

💼 Opsi 1: Untuk LinkedIn Post (Gaya Story-telling & Solutif)
Gunakan ini untuk menarik perhatian HRD atau sesama developer di LinkedIn.

🚀 Say Goodbye to Manual Data Entry! I just built an AI-Powered WhatsApp to ZKTeco Bridge.

Di fasilitas kesehatan/perkantoran yang sibuk, merekap izin, sakit, dan cuti pegawai dari grup WhatsApp ke sistem absensi sering kali memakan waktu dan rentan human error. Untuk menyelesaikan masalah ini, saya mengembangkan Automated Leave Sync: sebuah sistem cerdas yang menjembatani WhatsApp langsung ke dalam database ZKTeco secara real-time.

Bagaimana cara kerjanya? Pegawai cukup mengirim pesan natural seperti biasa di WA (misal: "Pak, saya izin sakit hari ini"). Di belakang layar, sistem yang saya bangun akan: 1️⃣ Membaca & Memfilter pesan menggunakan Node.js & Baileys library. 2️⃣ Memahami Konteks menggunakan Google Gemini AI (LLM) untuk mengekstrak nama, jenis cuti, dan durasi tanpa perlu format pesan baku. 3️⃣ Fuzzy Matching untuk mengenali identitas pegawai dari Excel, meskipun mereka menggunakan nama samaran atau WhatsApp Business. 4️⃣ Injeksi Langsung ke dalam database MS Access ZKTeco menggunakan Python (pyodbc).

✨ Coolest Feature: Jika pegawai salah ketik dan melakukan "Tarik Pesan / Delete for Everyone" di WhatsApp, sistem akan mendeteksinya dan otomatis menghapus record yang salah tersebut di database ZKTeco!

Full stack automation powered by Node.js, Python, PM2, and Generative AI. Repositori bersifat Internal (Private).

#Automation #AI #Nodejs #Python #ZKTeco #HRTech #SoftwareEngineering

📄 Opsi 2: Untuk Resume / CV (Gaya Impact-Driven & Teknis)
Gunakan poin-poin ini di bawah deskripsi pengalaman kerja atau daftar proyek.

AI-Powered Attendance Automation (WhatsApp to ZKTeco Sync) Node.js, Python, Google Gemini AI, MS Access, PM2, pyodbc

Merancang dan mendevelop layanan latar belakang (background service) yang mengotomatisasi pencatatan izin dan cuti pegawai dari WhatsApp langsung ke database absensi ZKTeco, menghilangkan 100% kebutuhan entri data manual.
Mengintegrasikan LLM (Google Gemini 1.5 Flash) untuk memproses pesan WhatsApp tak terstruktur (NLP), memungkinkan sistem mengekstrak entitas (Nama, Tipe Izin, Tanggal) dari bahasa manusia biasa tanpa format baku.
Membangun algoritma Fuzzy Matching untuk mencocokkan identitas profil WhatsApp (termasuk Linked Devices / LID) dengan database pegawai internal di Excel.
Mengimplementasikan arsitektur Event-Driven ganda; mampu mendeteksi event "Tarik Pesan" (Revoke) di WhatsApp untuk memicu pembatalan (SQL Delete) data absen secara real-time di database Access demi menjaga integritas data.
🌐 Opsi 3: Untuk Website Portofolio Pribadi (Gaya Deskriptif)
Jika Anda punya website portofolio, ini adalah deskripsi singkatnya.

Project Title: Automated Leave Sync: AI WhatsApp Bot for ZKTeco Role: Full-Stack Automation Engineer Tech Stack: Node.js, Baileys (WA Socket), Python, Pandas, Gemini AI, MS Access, PM2.

The Challenge: Tim HR sering kali harus merekap ratusan pesan izin/sakit dari grup WhatsApp secara manual ke dalam sistem mesin absensi (ZKTeco). Format pesan yang berbeda-beda dari setiap pegawai membuat proses otomasi konvensional berbasis RegEx (teks baku) sering gagal.

The Solution: Saya menciptakan sistem hybrid yang menggabungkan kecepatan Node.js untuk menangani koneksi WebSocket WhatsApp secara real-time, dan ketangguhan Python untuk pengolahan database (ODBC). Untuk memecahkan masalah format pesan yang tidak beraturan, saya mengimplementasikan Generative AI (Google Gemini) sebagai "otak" penganalisis teks. Sistem ini bahkan memiliki fitur state-management lokal yang melacak ID Pesan WhatsApp; sehingga jika sebuah pesan ditarik kembali (Revoke) oleh pengirimnya, bot akan melakukan pembatalan otomatis di dalam database mesin absen.

The Impact: Sistem ini berjalan senyap 24/7 di latar belakang Windows (PM2), mengubah pesan teks biasa menjadi data SQL yang terstruktur sempurna, menghemat puluhan jam kerja rekapitulasi HR setiap bulannya dengan tingkat akurasi 100%.

Tips Tambahan: Jika Anda mem- posting di LinkedIn, sertakan Screenshot Terminal yang menampilkan log "Pesan Ditarik -> Data Dihapus", atau sebuah video berdurasi 15 detik yang menunjukkan pesan dikirim di WA lalu muncul otomatis di layar ZKTeco. Itu akan membuat recruiter dan engineer lain sangat terkesan! 🔥

2:32 PM
