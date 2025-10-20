import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "3 menit ke SD N Kalisapu 1",
        "5 menit ke SMP N 1 Slawi",
        "4 menit ke SMA N 1 Slawi",
        "3 menit ke SMA N 2 Slawi",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: ["4 menit ke RSUD dr. Soesilo", "7 menit ke RSU Adella", "11 menit ke RS Hawari Essa"],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "1 menit ke Alun-alun Hanggawana Slawi",
        "5 menit ke Stasiun Slawi",
        "7 menit ke Terminal Dukuh Slawi",
        "7 menit ke Polsek Slawi",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: ["5 menit ke Mutiara Cahaya Mall", "7 menit ke Toserba Yogya Slawi"],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Aksesibilitas yang Memudahkan</h2>
        <h3 className="accessibility-subtitle">Segala Aktivitas</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
