'use client'

import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const handleCTAClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "AddToCart")
    }
  }

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Tinggal Lebih Tenang, Hidup Lebih Berkualitas</h2>
          <p className="cta-description">
            Waktunya pindah ke hunian yang nyaman, aman, dan sesuai gaya Anda. Cek unitnya sekarang juga!
          </p>

          <div className="cta-buttons">
            <Link
              href="https://wa.me/62811261740?text=Halo%20kak,%20saya%20dapat%20informasi%20dari%20Facebook,%20boleh%20minta%20tolong%20informasi%20selengkapnya%20tentang%20perumahan%20Sapphire%20Serenity%20Slawi"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-primary"
              onClick={() => handleCTAClick()}
            >
              <Phone className="cta-button-icon" />
              Hubungi Kami
            </Link>
            <Link
              //border cta
              href="https://wa.me/62811261740?text=Halo%20kak,%20saya%20dapat%20informasi%20dari%20Facebook,%20boleh%20minta%20tolong%20informasi%20selengkapnya%20tentang%20perumahan%20Sapphire%20Serenity%20Slawi"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
              onClick={() => handleCTAClick()}
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
