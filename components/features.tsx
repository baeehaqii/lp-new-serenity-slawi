import { ShieldCheck, Trees, Cctv, CarFront, CircleMinus, IdCard } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Security 24/7",
      description:
        "Keamanan 24 jam dengan sistem CCTV dan petugas keamanan yang siap menjaga kenyamanan Anda.",
    },
    {
      icon: <Trees />,
      title: "Area Hijau",
      description:
        "Area hijau yang luas dan terawat dengan baik, memberikan suasana nyaman dan asri bagi penghuni.",
    },
    {
      icon: <Cctv />,
      title: "CCTV Kawasan",
      description:
        "Sistem CCTV yang terintegrasi untuk memantau keamanan kawasan secara real-time.",
    },
    {
      icon: <CarFront />,
      title: "Akses Mobil Lebar",
      description:
        "Akses jalan yang lebar dan nyaman untuk kendaraan, memastikan mobilitas yang baik di dalam kawasan.",
    },
    {
      icon: <CircleMinus />,
      title: "One Gate System",
      description:
        "Sistem keamanan satu pintu yang memastikan akses terkontrol dan aman ke kawasan.",
    },
    // {
    //   icon: <IdCard />,
    //   title: "Akses Card",
    //   description:
    //     "Sistem akses menggunakan kartu untuk keamanan dan kenyamanan penghuni.",
    // },
  ]

  return (
    <section id="fasilitas" className="features-section">
      <div className="container">
        <h2 className="section-title">Clean, Calm, & Classy</h2>
        <p className="section-subtitle">
          Paduan Hunian Premium Modern dan Kenyamanan Alami di Pusat Slawi
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
