"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_600,h_450,c_fill,f_auto,q_auto/v1761071337/type_90_qpwdco.avif"
                alt="Sapphire Serenity Slawi"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Serenity Slawi</h2>
              <p className="about-description">
                Berada di Jl. Gajah Mada, Kel. Kalisapu, Kec. Slawi, Kab. Tegal, Sapphire Serenity Slawi menghadirkan perumahan Slawi yang modern, estetik, dan fungsional. Dirancang dengan konsep <em>Calm, Clean, & Classy</em>, hunian ini menyatukan ruang untuk raga dan pikiran dengan akses mudah ke pusat kota, sekolah, area komersial, dan transportasi. Sapphire Serenity Slawi menjadi pilihan ideal bagi keluarga maupun profesional muda yang mencari hunian prestisus yang selaras dengan gaya hidup modern dan praktis di jantung Slawi.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Tegal</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">CCTV Kawasan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Serenity Slawi</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dqobwse9q/image/upload/w_700,h_400,c_fill,f_auto,q_auto:eco/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.07_bvpgud.jpg"
                  alt="Sapphire Residence Sumbang"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Sapphire Serenity Slawi adalah perumahan Slawi premium yang berlokasi strategis di Jl. Gajah Mada, Kalisapu, Kec. Slawi, Kabupaten Tegal. Mengusung konsep Clean, Calm, & Classy, hunian ini memadukan desain modern dengan kenyamanan lingkungan, menghadirkan suasana tenang tanpa mengorbankan kemudahan akses ke pusat kota. Dekat dengan pusat perbelanjaan, fasilitas kesehatan, dan sekolah,
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>4 menit ke fasilitas kesehatan</li>
                  <li>5 menit ke fasilitas pendidikan</li>
                  <li>5 menit ke fasilitas perbelanjaan</li>
                  <li>2 menit ke pusat kota</li>
                  <li>Dikelilingi area hijau dan pemandangan alami di sisi barat kota</li>
                  <li>Lingkungan tenang, bebas kebisingan dan polusi kota, namun tetap dekat pusat aktivitas penduduk</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti, CCTV, dan one gate system untuk keamanan ekstra</li>
                  <li>Ruang terbuka hijau yang luas</li>
                  <li>Area bermain aman dan menyenangkan bagi anak-anak</li>
                  <li>Fasilitas umum seperti area olahraga, masjid, dan jalan lingkungan yang rapi untuk kenyamanan seluruh penghuni</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
