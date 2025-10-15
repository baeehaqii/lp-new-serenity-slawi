"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Concept {
  id: number
  title: string
  subtitle: string
  image: string
  alt: string
}

export default function Concepts() {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null)

  const concepts: Concept[] = [
    {
      id: 1,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Orientasi Bangunan",
      image: "/konsep-orientasi-bangunan.png",
      alt: "Konsep Desain Responsif Iklim - Orientasi Bangunan",
    },
    {
      id: 2,
      title: "Konsep Ventilasi Udara",
      subtitle: "Cross Ventilation",
      image: "/konsep-ventilasi-udara.png",
      alt: "Konsep Ventilasi Udara",
    },
    {
      id: 3,
      title: "Konsep Pencahayaan Alami",
      subtitle: "Natural Lighting",
      image: "/konsep-pencahayaan-alami.png",
      alt: "Konsep Pencahayaan Alami",
    },
    {
      id: 4,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Sistem Pelindung Matahari",
      image: "/konsep-sistem-pelindung-matahari.png",
      alt: "Konsep Sistem Pelindung Matahari",
    },
    {
      id: 5,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Bentuk Atap",
      image: "/konsep-bentuk-atap.png",
      alt: "Konsep Bentuk Atap",
    },
    {
      id: 6,
      title: "Konsep Fasad",
      subtitle: "Material Bangunan",
      image: "/konsep-fasad-material.png",
      alt: "Konsep Fasad - Material Bangunan",
    },
    {
      id: 7,
      title: "Konsep Fasad",
      subtitle: "Gaya Arsitektur Minimalis Modern",
      image: "/konsep-fasad-gaya.png",
      alt: "Konsep Fasad - Gaya Arsitektur",
    },
    {
      id: 8,
      title: "Konsep Ruang Terbuka",
      subtitle: "Open Plan",
      image: "/konsep-ruang-terbuka.png",
      alt: "Konsep Ruang Terbuka",
    },
  ]

  const openModal = (concept: Concept) => {
    setSelectedConcept(concept)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedConcept(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="konsep" className="concepts-section">
      <div className="container">
        <h2 className="section-title">Konsep Desain Sapphire Serenity</h2>
        <p className="section-subtitle">
          Rumah yang dirancang dengan konsep responsif iklim tropis, memadukan estetika modern dengan kenyamanan
          maksimal
        </p>

        <div className="concepts-grid">
          {concepts.map((concept) => (
            <div key={concept.id} className="concept-card" onClick={() => openModal(concept)}>
              <div className="concept-image-wrapper">
                <Image
                  src={concept.image || "/placeholder.svg"}
                  alt={concept.alt}
                  width={400}
                  height={300}
                  className="concept-image"
                />
                <div className="concept-overlay">
                  <div className="concept-overlay-content">
                    <h3 className="concept-overlay-title">{concept.title}</h3>
                    <p className="concept-overlay-subtitle">{concept.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedConcept && (
        <div className="concept-modal-overlay" onClick={closeModal}>
          <div className="concept-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="concept-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="concept-modal-content">
              <Image
                src={selectedConcept.image || "/placeholder.svg"}
                alt={selectedConcept.alt}
                width={1200}
                height={900}
                className="concept-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
