"use client"

import { useState } from "react"
import Image from "next/image"
import { XIcon, ZoomInIcon, ZoomOutIcon } from "./icons"

export default function Gallery() {
  // State untuk lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")
  const [currentMediaType, setCurrentMediaType] = useState<"image" | "video">("image")
  const [zoomLevel, setZoomLevel] = useState(1)

  // Data gambar-gambar yang ada di gallery
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637086/TYPE_85_2_asjyzz.png",
      alt: "Modern luxury home exterior",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637084/TYPE_85_1_i718cl.png",
      alt: "Modern luxury home pool",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.06_o6oiez.jpg",
      alt: "Modern luxury home pool",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.07_bvpgud.jpg",
      alt: "Modern luxury home pool",
      type: "image",
    },
    {
      src: "10zWEJ93C2Oc_KzKDKrg0-bXEkNjRZSDh",
      alt: "Modern luxury home interior 1",
      type: "video",
      thumbnail:
        "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_auto/v1748012017/Screenshot_23-5-2025_214540_firefly.adobe.com_dabujd.jpg",
    },
    {
      src: "1iXL8OsjvnX-sWxxdEmSqeNFygqfQIyL8",
      alt: "Modern luxury home interior 1",
      type: "video",
      thumbnail: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_auto/v1747845530/sumbang-1_ix19g2.jpg",
    },
  ]

  // Function untuk membuka lightbox
  // Define interface for gallery images
  interface GalleryImage {
    src: string
    alt: string
    type: "image" | "video"
    thumbnail?: string
  }

  const openLightbox = (imageSrc: string, mediaType: "image" | "video"): void => {
    setCurrentImage(imageSrc)
    setCurrentMediaType(mediaType)
    setLightboxOpen(true)
    setZoomLevel(1)
    document.body.style.overflow = "hidden"
  }

  // Function untuk menutup lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
    setZoomLevel(1)
    document.body.style.overflow = "auto"
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1))
  }

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">Gallery Sapphire Serenity Slawi</h2>
        <p className="section-subtitle">
          Temukan keindahan dan kenyamanan rumah impian Anda di Sapphire Serenity Slawi. Setiap sudut dirancang dengan
          perhatian terhadap detail, menciptakan ruang yang sempurna untuk hidup dan bersantai.
        </p>

        <div className="gallery-grid">
          <div className="gallery-grid-item" onClick={() => openLightbox(galleryImages[0].src, "image")}>
            <Image
              src={galleryImages[0].src || "/placeholder.svg"}
              alt={galleryImages[0].alt}
              width={600}
              height={600}
              className="gallery-image"
            />
          </div>

          <div className="gallery-rows">
            <div className="gallery-grid-item" onClick={() => openLightbox(galleryImages[1].src, "image")}>
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                width={600}
                height={300}
                className="gallery-image"
              />
            </div>

            <div className="gallery-columns">
              <div className="gallery-grid-item" onClick={() => openLightbox(galleryImages[2].src, "image")}>
                <Image
                  src={galleryImages[2].src || "/placeholder.svg"}
                  alt={galleryImages[2].alt}
                  width={300}
                  height={300}
                  className="gallery-image"
                />
              </div>

              <div className="gallery-grid-item" onClick={() => openLightbox(galleryImages[3].src, "image")}>
                <Image
                  src={galleryImages[3].src || "/placeholder.svg"}
                  alt={galleryImages[3].alt}
                  width={300}
                  height={300}
                  className="gallery-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="gallery-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              <XIcon size={24} />
            </button>
            {currentMediaType === "image" && (
              <div className="gallery-zoom-controls">
                <button className="gallery-zoom-button" onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                  <ZoomInIcon size={20} />
                </button>
                <button className="gallery-zoom-button" onClick={handleZoomOut} disabled={zoomLevel <= 1}>
                  <ZoomOutIcon size={20} />
                </button>
              </div>
            )}
            <div className="gallery-lightbox-content">
              {currentMediaType === "video" ? (
                <iframe
                  src={`https://drive.google.com/file/d/${currentImage}/preview`}
                  width="100%"
                  height="500px"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="gallery-lightbox-image-wrapper">
                  <Image
                    src={currentImage || "/placeholder.svg"}
                    alt="Gallery image"
                    width={1200}
                    height={800}
                    className="gallery-lightbox-image"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
