"use client"

import { WhatsAppIcon } from "./icons"

export default function WhatsAppFloat() {
  const handleClick = () => {
    // Replace with your WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "62811261740" // Example: Indonesian number
    const message = encodeURIComponent("Halo, saya tertarik dengan Sapphire Serenity Slawi")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}
