"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BedDoubleIcon, BathIcon, LandPlotIcon, BadgeCheckIcon, XIcon, ZoomInIcon, ZoomOutIcon } from "./icons"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Properties() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [activeType, setActiveType] = useState("tipe-rumah")
  const [isSiteplanModalOpen, setIsSiteplanModalOpen] = useState(false)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [siteplanZoom, setSiteplanZoom] = useState(1)
  const [locationZoom, setLocationZoom] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [touchStart, setTouchStart] = useState<{ [key: number]: number }>({})
  const [isDragging, setIsDragging] = useState<{ [key: number]: boolean }>({})
  const [dragStart, setDragStart] = useState<{ [key: number]: number }>({})

  const propertyTypes: PropertyType[] = [
    { id: "tipe-rumah", label: "Tipe Rumah", active: true },
    { id: "siteplan", label: "Siteplan", active: false },
    { id: "spesifikasi", label: "Spesifikasi", active: false },
    { id: "lokasi", label: "Lokasi", active: false },
  ]

  const properties = [
    {
      id: 1,
      images: [
        "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637084/TYPE_85_1_i718cl.png",
        "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637086/TYPE_85_2_asjyzz.png",
      ],
      floorPlan: "/denah-type-75.png",
      name: "Tipe 75",
      price: "7XX.XX.XXX",
      bedrooms: 2,
      bathrooms: 2,
      area: "79",
      description:
        "Tipe 75/79 dengan 2 lantai adalah pilihan ideal untuk pasangan muda yang menginginkan rumah mewah di kawasan eksklusif. Dengan desain yang efisien, rumah ini menawarkan kenyamanan dengan harga terjangkau.",
      certificate: "SHM",
    },
    {
      id: 2,
      images: [
        "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637086/TYPE_85_2_asjyzz.png",
        "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637084/TYPE_85_1_i718cl.png",
      ],
      floorPlan: "/denah-type-85.png",
      name: "Tipe 85",
      price: "8XX.XXX.XXX",
      bedrooms: 3,
      bathrooms: 3,
      area: "85",
      description:
        "Tipe 85/85 dengan 2 lantai menawarkan ruang yang lebih luas dengan tambahan kamar tidur, cocok untuk keluarga dengan anak. Desain modern dan berada di kawasan eksklusif.",
      certificate: "SHM",
    },
    {
      id: 3,
      images: [
        "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637083/TYPE_90_1_bjkfpc.png",
        "https://res.cloudinary.com/dqobwse9q/image/upload/v1754637084/TYPE_85_1_i718cl.png",
      ],
      floorPlan: "/denah-type-90.png",
      name: "Tipe 90",
      price: "9XX.XXX.XXX",
      bedrooms: 4,
      bathrooms: 3,
      area: "90",
      description:
        "Tipe 90/90 dengan 2 Lantai adalah pilihan premium dengan ruang lebih luas dan 4 kamar tidur. Ideal untuk keluarga yang membutuhkan ruang ekstra dan kenyamanan maksimal.",
      certificate: "SHM",
    },
  ]

  const siteplan = {
    id: "siteplan-1",
    image: "https://res.cloudinary.com/dqobwse9q/image/upload/v1755444815/siteplane_serenity_slawi_kvzyhe.png",
    name: "Siteplan Sapphire Serenity Slawi",
    description:
      "Masterplan perumahan Sapphire Serenity Slawi yang menampilkan layout, jalan, ruang terbuka hijau, dan fasilitas umum.",
  }

  const specifications = {
    pondasi: "batu belah dan footplat",
    dinding: "bata merah, portland semen/setara, roaster 10 x 20 cm",
    lantai: "granit tile 60 x 60 cm (interior), keramik 40 x 40 cm (carport)",
    atap: "atap baja ringan, reng galvalum, genteng beton",
    kamarMandi: "Closet duduk, jet washer, instalasi water filter, kitchen sink",
    kusenPintu: "Kusen Alumunium, pintu Multiplek+HPL",
    jendela: "kaca",
    plafon: "rangka Hollow, gypsum, shadowline",
    air: "PDAM",
    listrik: "Jaringan listrik tanam (underground)",
    elektrikal: "LED, lampu outbow, saklar Schneider",
    mezanin: "double hollow, lantai SPC (type 55)",
    fiturRumah: "kanopi rangka hollow, cover wood plank, smart door lock",
  }

  const location = {
    image: "/denah-lokasi.png",
    name: "Denah Lokasi Sapphire Serenity Slawi",
    description: "Lokasi strategis di pusat kota Slawi dengan akses mudah ke berbagai fasilitas umum.",
  }

  interface Property {
    id: number
    images: string[]
    floorPlan: string
    name: string
    price: string
    bedrooms: number
    bathrooms: number
    area: string
    description: string
    certificate: string
  }

  const handleTouchStart = (propertyId: number, e: React.TouchEvent) => {
    setTouchStart((prev) => ({ ...prev, [propertyId]: e.targetTouches[0].clientX }))
  }

  const handleTouchEnd = (propertyId: number, e: React.TouchEvent, totalImages: number) => {
    const start = touchStart[propertyId]
    const end = e.changedTouches[0].clientX

    if (!start) return

    const distance = start - end
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swipe left - next image
        setCurrentImageIndex((prev) => ({
          ...prev,
          [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages,
        }))
      } else {
        // Swipe right - previous image
        setCurrentImageIndex((prev) => ({
          ...prev,
          [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages,
        }))
      }
    }

    setTouchStart((prev) => ({ ...prev, [propertyId]: 0 }))
  }

  const handleMouseDown = (propertyId: number, e: React.MouseEvent) => {
    setIsDragging((prev) => ({ ...prev, [propertyId]: true }))
    setDragStart((prev) => ({ ...prev, [propertyId]: e.clientX }))
  }

  const handleMouseMove = (propertyId: number, e: React.MouseEvent) => {
    if (!isDragging[propertyId]) return
    e.preventDefault()
  }

  const handleMouseUp = (propertyId: number, e: React.MouseEvent, totalImages: number) => {
    if (!isDragging[propertyId]) return

    const start = dragStart[propertyId]
    const end = e.clientX

    if (!start) {
      setIsDragging((prev) => ({ ...prev, [propertyId]: false }))
      return
    }

    const distance = start - end
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Drag left - next image
        setCurrentImageIndex((prev) => ({
          ...prev,
          [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages,
        }))
      } else {
        // Drag right - previous image
        setCurrentImageIndex((prev) => ({
          ...prev,
          [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages,
        }))
      }
    }

    setIsDragging((prev) => ({ ...prev, [propertyId]: false }))
    setDragStart((prev) => ({ ...prev, [propertyId]: 0 }))
  }

  const handleMouseLeave = (propertyId: number) => {
    setIsDragging((prev) => ({ ...prev, [propertyId]: false }))
    setDragStart((prev) => ({ ...prev, [propertyId]: 0 }))
  }

  const goToImage = (propertyId: number, index: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [propertyId]: index,
    }))
  }

  const openModal = (property: Property): void => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedProperty(null)
    }, 300)
  }

  const openSiteplanModal = () => {
    setIsSiteplanModalOpen(true)
    setSiteplanZoom(1)
    document.body.style.overflow = "hidden"
  }

  const closeSiteplanModal = () => {
    setIsSiteplanModalOpen(false)
    setSiteplanZoom(1)
    document.body.style.overflow = "auto"
  }

  const openLocationModal = () => {
    setIsLocationModalOpen(true)
    setLocationZoom(1)
    document.body.style.overflow = "hidden"
  }

  const closeLocationModal = () => {
    setIsLocationModalOpen(false)
    setLocationZoom(1)
    document.body.style.overflow = "auto"
  }

  const handleSiteplanZoomIn = () => {
    setSiteplanZoom((prev) => Math.min(prev + 0.5, 3))
  }

  const handleSiteplanZoomOut = () => {
    setSiteplanZoom((prev) => Math.max(prev - 0.5, 1))
  }

  const handleLocationZoomIn = () => {
    setLocationZoom((prev) => Math.min(prev + 0.5, 3))
  }

  const handleLocationZoomOut = () => {
    setLocationZoom((prev) => Math.max(prev - 0.5, 1))
  }

  type PropertyTypeId = "tipe-rumah" | "siteplan" | "spesifikasi" | "lokasi"

  interface PropertyType {
    id: PropertyTypeId
    label: string
    active: boolean
  }

  const handleTypeChange = (typeId: PropertyTypeId): void => {
    setActiveType(typeId)
  }

  return (
    <section id="tipe-rumah" className="section">
      <div className="container">
        <h2 className="section-title">Siteplan & Tipe Rumah</h2>
        <p className="section-subtitle">
          Temukan rumah impian Anda di Sapphire Serenity Slawi. Kami menawarkan berbagai tipe rumah yang dirancang untuk
          memenuhi kebutuhan dan gaya hidup Anda.
        </p>

        <div className="property-type-container">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`property-type-button ${activeType === type.id ? "property-type-button-active" : "property-type-button-inactive"
                }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {activeType === "tipe-rumah" ? (
          <div className="property-grid">
            {properties.map((property) => {
              const currentIndex = currentImageIndex[property.id] || 0
              return (
                <div key={property.id} className="property-card">
                  <div
                    className="property-image-container property-slider"
                    onTouchStart={(e) => handleTouchStart(property.id, e)}
                    onTouchEnd={(e) => handleTouchEnd(property.id, e, property.images.length)}
                    onMouseDown={(e) => handleMouseDown(property.id, e)}
                    onMouseMove={(e) => handleMouseMove(property.id, e)}
                    onMouseUp={(e) => handleMouseUp(property.id, e, property.images.length)}
                    onMouseLeave={() => handleMouseLeave(property.id)}
                    style={{ cursor: isDragging[property.id] ? "grabbing" : "grab" }}
                  >
                    <Image
                      src={property.images[currentIndex] || "/placeholder.svg"}
                      alt={`${property.name} - Image ${currentIndex + 1}`}
                      fill
                      className="property-image"
                      draggable={false}
                    />

                    {property.images.length > 1 && (
                      <>
                        <button
                          className="property-slider-arrow property-slider-arrow-prev"
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [property.id]: ((prev[property.id] || 0) - 1 + property.images.length) % property.images.length,
                            }))
                          }}
                          title="Previous image"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          className="property-slider-arrow property-slider-arrow-next"
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [property.id]: ((prev[property.id] || 0) + 1) % property.images.length,
                            }))
                          }}
                          title="Next image"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}

                    {property.images.length > 1 && (
                      <div className="property-slider-dots">
                        {property.images.map((_, index) => (
                          <button
                            key={index}
                            className={`property-slider-dot ${currentIndex === index ? "active" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              goToImage(property.id, index)
                            }}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="property-content">
                    <div className="property-header">
                      <h3 className="property-name">{property.name}</h3>
                      <button onClick={() => openModal(property)} className="property-detail-button">
                        Lihat Detail
                      </button>
                    </div>

                    <div className="property-features">
                      <div className="property-feature">
                        <BedDoubleIcon className="property-feature-icon" />
                        <span>{property.bedrooms} Kamar</span>
                      </div>
                      <div className="property-feature">
                        <BathIcon className="property-feature-icon" />
                        <span>{property.bathrooms} Kamar Mandi</span>
                      </div>
                      <div className="property-feature">
                        <LandPlotIcon className="property-feature-icon" />
                        <span>{property.area} m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : activeType === "siteplan" ? (
          <div className="siteplan-container">
            <div className="siteplan-image-container" onClick={openSiteplanModal} style={{ cursor: "pointer" }}>
              <Image
                src={siteplan.image || "/placeholder.svg"}
                alt={siteplan.name}
                width={1200}
                height={800}
                className="siteplan-image"
              />
            </div>
            <div className="siteplan-content">
              <h3 className="siteplan-title">{siteplan.name}</h3>
              <p>{siteplan.description}</p>
            </div>
          </div>
        ) : activeType === "spesifikasi" ? (
          <div className="specifications-container">
            <div className="specifications-image">
              <Image
                src="https://res.cloudinary.com/dqobwse9q/image/upload/v1754637084/TYPE_85_1_i718cl.png"
                alt="Spesifikasi Rumah"
                width={600}
                height={800}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="specifications-content">
              <h3 className="specifications-title">Spesifikasi Rumah</h3>
              <div className="specifications-list">
                <div className="specification-item">
                  <span className="specification-label">Pondasi:</span>
                  <span className="specification-value">{specifications.pondasi}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Dinding:</span>
                  <span className="specification-value">{specifications.dinding}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Lantai:</span>
                  <span className="specification-value">{specifications.lantai}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Atap:</span>
                  <span className="specification-value">{specifications.atap}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Kamar Mandi/WC:</span>
                  <span className="specification-value">{specifications.kamarMandi}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Kusen & Pintu:</span>
                  <span className="specification-value">{specifications.kusenPintu}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Jendela:</span>
                  <span className="specification-value">{specifications.jendela}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Plafon:</span>
                  <span className="specification-value">{specifications.plafon}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Air:</span>
                  <span className="specification-value">{specifications.air}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Listrik:</span>
                  <span className="specification-value">{specifications.listrik}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Elektrikal:</span>
                  <span className="specification-value">{specifications.elektrikal}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Mezanin (type 55):</span>
                  <span className="specification-value">{specifications.mezanin}</span>
                </div>
                <div className="specification-item">
                  <span className="specification-label">Fitur Rumah:</span>
                  <span className="specification-value">{specifications.fiturRumah}</span>
                </div>
              </div>
            </div>
          </div>
        ) : activeType === "lokasi" ? (
          <div className="location-container">
            <div className="location-image-wrapper" onClick={openLocationModal}>
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.name}
                width={1200}
                height={800}
                className="location-image"
              />
            </div>
            <div className="location-content">
              <h3 className="location-title">{location.name}</h3>
              <p>{location.description}</p>
              <div className="location-button-container">
                <Link
                  href="https://share.google.com/uaDWGKyhm06qnypUx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-gmaps-button"
                >
                  <svg className="location-gmaps-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                  Lihat Lokasi di Google Maps
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {isModalOpen && selectedProperty && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <XIcon />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">{selectedProperty.name}</h2>
              <div className="modal-image">
                <Image
                  src={selectedProperty.floorPlan || "/placeholder.svg"}
                  alt={`Denah ${selectedProperty.name}`}
                  width={1200}
                  height={800}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                />
              </div>
              <div className="modal-description">
                <p>{selectedProperty.description}</p>

                <h3 className="modal-subtitle">Spesifikasi</h3>
                <div className="modal-property-features">
                  <div className="modal-property-feature">
                    <BedDoubleIcon className="modal-feature-icon" />
                    <div>
                      <div className="modal-feature-label">Kamar Tidur</div>
                      <div className="modal-feature-value">{selectedProperty.bedrooms}</div>
                    </div>
                  </div>
                  <div className="modal-property-feature">
                    <BathIcon className="modal-feature-icon" />
                    <div>
                      <div className="modal-feature-label">Kamar Mandi</div>
                      <div className="modal-feature-value">{selectedProperty.bathrooms}</div>
                    </div>
                  </div>
                  <div className="modal-property-feature">
                    <LandPlotIcon className="modal-feature-icon" />
                    <div>
                      <div className="modal-feature-label">Luas Tanah</div>
                      <div className="modal-feature-value">{selectedProperty.area} m²</div>
                    </div>
                  </div>
                  <div className="modal-property-feature">
                    <BadgeCheckIcon className="modal-feature-icon" />
                    <div>
                      <div className="modal-feature-label">Sertifikat</div>
                      <div className="modal-feature-value">{selectedProperty.certificate}</div>
                    </div>
                  </div>
                </div>

                <h3 className="modal-subtitle">Harga</h3>
                <div className="modal-price">Rp {selectedProperty.price}</div>

                <div className="modal-cta">
                  <Link
                    href="https://wa.me/62811261740?text=Halo,%20saya%20tertarik%20dengan%20properti%20Sapphire%20Serenity%20Slawi"
                    className="modal-cta-button"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSiteplanModalOpen && (
        <div className="concept-modal-overlay" onClick={closeSiteplanModal}>
          <div className="concept-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="concept-modal-close" onClick={closeSiteplanModal}>
              <XIcon size={24} />
            </button>
            <div className="gallery-zoom-controls">
              <button className="gallery-zoom-button" onClick={handleSiteplanZoomIn} disabled={siteplanZoom >= 3}>
                <ZoomInIcon size={20} />
              </button>
              <button className="gallery-zoom-button" onClick={handleSiteplanZoomOut} disabled={siteplanZoom <= 1}>
                <ZoomOutIcon size={20} />
              </button>
            </div>
            <div className="concept-modal-content">
              <div className="gallery-lightbox-image-wrapper">
                <Image
                  src={siteplan.image || "/placeholder.svg"}
                  alt={siteplan.name}
                  width={1800}
                  height={1200}
                  className="concept-modal-image"
                  style={{ transform: `scale(${siteplanZoom})` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isLocationModalOpen && (
        <div className="concept-modal-overlay" onClick={closeLocationModal}>
          <div className="concept-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="concept-modal-close" onClick={closeLocationModal}>
              <XIcon size={24} />
            </button>
            <div className="gallery-zoom-controls">
              <button className="gallery-zoom-button" onClick={handleLocationZoomIn} disabled={locationZoom >= 3}>
                <ZoomInIcon size={20} />
              </button>
              <button className="gallery-zoom-button" onClick={handleLocationZoomOut} disabled={locationZoom <= 1}>
                <ZoomOutIcon size={20} />
              </button>
            </div>
            <div className="concept-modal-content">
              <div className="gallery-lightbox-image-wrapper">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  width={1800}
                  height={1200}
                  className="concept-modal-image"
                  style={{ transform: `scale(${locationZoom})` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
