"use client"

import { useState, useRef, useEffect } from "react"
import { CheckCircle } from "lucide-react"
import "@/styles/payment-schemes-documents.css"

interface PaymentScheme {
    id: number
    title: string
    subtitle?: string
    items: string[]
}

interface Document {
    id: number
    title: string
    completed: boolean
}

export default function PaymentSchemesDocuments() {
    const [activeTab, setActiveTab] = useState<"payment-schemes" | "documents">("payment-schemes")
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    const paymentSchemes: PaymentScheme[] = [
        {
            id: 1,
            title: "Pembelian dengan KPR Bank",
            items: [
                "Calon konsumen melakukan pembayaran Booking Fee",
                "Calon konsumen menyiapkan berkas mandatory berupa KTP untuk dilakukan proses SLIK",
                "Jika hasil SLIK dinyatakan bersih dan atau bisa dilanjut proses KPR, maka calon konsumen meleangkapi dokumen KPR yang dipersyaratkan.",
                "Melakukan pembayaran Uang Muka maksimal 7 Hari setelah Booking Fee",
                "Setelah dokumen lengkap, berkas KPR akan diserahkan ke perbankan.",
                "Estimasi persetujuan kredit adalah 7 Hari untuk Fix Income, dan 21 Hari untuk Wiraswasta setelah berkas dinyatakan lengkap.",
                "Setelah turun persetujuan kredit (SPPPK), calon konsumen melakukan pembayaran Biaya Proses KPR sebelum dilakukan Akad Kredit dengan pihak perbankan dan notaris.",
            ],
        },
        {
            id: 2,
            title: "Pembelian dengan Cash Keras",
            items: [
                "Calon konsumen melakukan pembayaran Booking Fee",
                "Maksimal 7 Hari setelah pembayaran Booking Fee, calon konsumen melakukan pembayaran Uang Muka sebesar 95% dari harga rumah.",
                "Pelunasan atau sisa pembayaran 5% dilakukan setelah rumah jadi.",
                "Setelah pembayaran 100% dilakukan Akad Jual Beli (AJB) dihadapan notaris.",
            ],
        },
        {
            id: 3,
            title: "Pembelian dengan Cash by Progres Pembangunan",
            items: [
                "Calon konsumen melakukan pembayaran Booking Fee",
                "Maksimal 7 Hari setelah pembayaran Booking Fee, calon konsumen melakukan pembayaran Uang Muka sebesar 50% dari harga rumah.",
                "Pembayaran selanjutnya sebesar 45% dilakukan setelah progres bangunan mencapai Atap.",
                "Pelunasan atau sisa pembayaran 5% dilakukan setelah rumah jadi.",
                "Setelah pembayaran 100% dilakukan Akad Jual Beli (AJB) dihadapan notaris.",
            ],
        },
        {
            id: 4,
            title: "Pembelian dengan Cash Termin/Cicil ke Developer",
            subtitle: "Selama 8 Bulan",
            items: [
                "Calon konsumen melakukan pembayaran Booking Fee",
                "Maksimal 7 Hari setelah pembayaran Booking Fee, calon konsumen melakukan pembayaran Uang Muka sebesar 50% dari harga rumah.",
                "Sisa 50% pembayaran dilakukan setiap bulan selama 8 bulan.",
                "Setelah pembayaran 100% dilakukan Akad Jual Beli (AJB) dihadapan notaris.",
            ],
        },
    ]

    const documents: Document[] = [
        {
            id: 1,
            title: "Sertifikat Hak Milik (SHM)",
            completed: true,
        },
        {
            id: 2,
            title: "Persetujuan Bangunan Gedung (PBG)",
            completed: true,
        },
        {
            id: 3,
            title: "Surat Pemberitahuan Pajak Terutang (SPPT)",
            completed: true,
        },
        {
            id: 4,
            title: "Akta Jual Beli (AJB)",
            completed: true,
        },
    ]

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section
            id="skema-pembelian"
            className={`payment-schemes-section ${isVisible ? "animate-fade-in-up" : "animate-hidden"}`}
            ref={sectionRef}
        >
            <div className="container">
                <h2 className="section-title">Skema Pembelian & Dokumen</h2>
                <p className="section-subtitle">
                    Berbagai pilihan skema pembayaran yang fleksibel untuk kemudahan Anda
                </p>

                {/* Tab Navigation */}
                <div className="payment-tabs">
                    <button
                        className={`payment-tab ${activeTab === "payment-schemes" ? "active" : ""}`}
                        onClick={() => setActiveTab("payment-schemes")}
                    >
                        Skema Pembelian
                    </button>
                    <button
                        className={`payment-tab ${activeTab === "documents" ? "active" : ""}`}
                        onClick={() => setActiveTab("documents")}
                    >
                        Dokumen Serah Terima
                    </button>
                </div>

                {/* Payment Schemes Tab Content */}
                {activeTab === "payment-schemes" && (
                    <div className="tab-content payment-schemes-content">
                        <div className="payment-schemes-list">
                            {paymentSchemes.map((scheme, index) => (
                                <div
                                    key={scheme.id}
                                    className={`payment-scheme-card ${isVisible ? "animate-fade-in-up-card" : "animate-hidden-card"}`}
                                    style={{
                                        animationDelay: isVisible ? `${index * 0.15}s` : "0s",
                                    }}
                                >
                                    <div className="payment-scheme-header">
                                        <h4 className="payment-scheme-title">{scheme.title}</h4>
                                        {scheme.subtitle && <span className="payment-scheme-subtitle">{scheme.subtitle}</span>}
                                    </div>
                                    <ul className="payment-scheme-items">
                                        {scheme.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="payment-scheme-item">
                                                <span className="payment-scheme-bullet">•</span>
                                                <span className="payment-scheme-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Documents Tab Content */}
                {activeTab === "documents" && (
                    <div className="tab-content documents-content">
                        <div className="documents-grid">
                            {documents.map((doc, index) => (
                                <div
                                    key={doc.id}
                                    className={`document-card ${isVisible ? "animate-fade-in-up-card" : "animate-hidden-card"}`}
                                    style={{
                                        animationDelay: isVisible ? `${index * 0.1}s` : "0s",
                                    }}
                                >
                                    <div className="document-icon-wrapper">
                                        {doc.completed && <CheckCircle size={40} className="document-check" strokeWidth={1.5} />}
                                    </div>
                                    <div className="document-text-wrapper">
                                        <h4 className="document-title">{doc.title}</h4>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
