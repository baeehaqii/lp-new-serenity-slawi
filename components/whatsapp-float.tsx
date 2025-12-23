"use client"

import { WhatsAppIcon } from "./icons"

export default function WhatsAppFloat() {
  const handleClick = () => {
    // Track WhatsApp Float button click with Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "AddToCart")
    }

    // Replace with your WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "62811261740" // Example: Indonesian number
    const message = encodeURIComponent("Halo kak, saya dapat informasi dari Facebook, boleh minta tolong informasi selengkapnya tentang perumahan Sapphire Serenity Slawi")
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
