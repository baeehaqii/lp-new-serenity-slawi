"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MoveRightIcon, CameraIcon } from "./icons"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [mouseStart, setMouseStart] = useState(0)
  const [mouseEnd, setMouseEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const heroSlides = [
    {
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_auto:low/v1761071336/Type_85_zmze7h.avif",
      title: "Clean, Calm, & Classy",
      description:
        "Perumahan eksklusif di Slawi yang menghadirkan kenyamanan, gaya hidup modern, dan lokasi strategis di pusat kota.",
    },
    {
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_auto:low/v1761071337/type_90_qpwdco.avif",
      title: "Hunian Modern & Nyaman",
      description: "Desain arsitektur minimalis modern dengan fasilitas lengkap untuk keluarga Indonesia.",
    },
    {
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_auto:low/v1761071664/Gate_lkgdrn.avif",
      title: "Investasi Masa Depan",
      description: "Lokasi strategis dengan akses mudah ke berbagai fasilitas umum dan pusat kota Slawi.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setMouseStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setMouseEnd(e.clientX)
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      if (mouseStart - mouseEnd > 50) {
        // Drag left
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }
      if (mouseStart - mouseEnd < -50) {
        // Drag right
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      }
      setIsDragging(false)
    }
  }

  return (
    <section className="hero-section">
      <div className="container">
        <div
          className="hero-container mt-10"
          onTouchStart={handleTouchStart}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setIsDragging(false)}
        >
          <div className="hero-overlay"></div>

          <div className="hero-slider">
            {heroSlides.map((slide, index) => (
              <div key={index} className={`hero-slide ${index === currentSlide ? "active" : ""}`}>
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={800}
                  height={450}
                  className="hero-image"
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "low"}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            ))}
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
              <p className="hero-description">{heroSlides[currentSlide].description}</p>

              <div className="hero-buttons">
                <Link href="#tentang-kami" className="hero-button hero-button-primary">
                  <span>Selengkapnya</span>
                  <MoveRightIcon className="icon-sm" />
                </Link>
                <Link href="#gallery" className="hero-button hero-button-secondary">
                  <span>Lihat Gallery</span>
                  <CameraIcon className="icon-sm" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-dots mt-36">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="hero-badge hidden md:flex">
            <div className="hero-avatars">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="hero-avatar"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #ffffff",
                    position: "relative",
                    marginRight: "-10px",
                  }}
                >
                  <Image
                    src={
                      i === 2
                        ? "https://res.cloudinary.com/dqobwse9q/image/upload/w_40,h_40,c_fill,f_auto,q_auto:low/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.07_bvpgud.jpg"
                        : i === 3
                          ? "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_40,h_40,c_fill,f_auto,q_auto:low/v1749059575/image_10_mvh73f.png"
                          : i === 4
                            ? "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_40,h_40,c_fill,f_auto,q_auto:low/v1747762124/freepik__the-style-is-candid-image-photography-with-natural__77739_r5rogr.jpg"
                            : "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_40,h_40,c_fill,f_auto,q_auto:low/v1749058806/image_8_meklxg.png"
                    }
                    alt={`Avatar ${i}`}
                    width={40}
                    height={40}
                    className="hero-avatar-image"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="hero-badge-text">
              <span>1000+ Keluarga Sapphire</span>
              <div className="hero-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="hero-star">
                    ★
                  </span>
                ))}
                <span className="hero-rating">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
