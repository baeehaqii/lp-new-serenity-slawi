import Image from "next/image"

export default function SitePlan() {
  return (
    <section id="siteplan" className="siteplan-section">
      <div className="siteplan-background">
        <Image src="/rumah-hero.jpeg" alt="Background" fill className="siteplan-bg-image" priority={false} />
        <div className="siteplan-overlay" />
      </div>

      <div className="container">
        <div className="siteplan-content">
          <h2 className="section-title text-primary">Site Plan</h2>
          <p className="siteplan-description">
            Tata letak perumahan Sapphire Serenity Slawi yang strategis dan terencana dengan baik
          </p>

          <div className="siteplan-image-wrapper">
            <Image
              src="/siteplan.png"
              alt="Site Plan Sapphire Serenity Slawi"
              width={1200}
              height={800}
              className="siteplan-image"
              priority
            />
          </div>

          <div className="siteplan-legend">
            <div className="legend-item">
              <div className="legend-color legend-sold" />
              <span>Unit Terjual</span>
            </div>
            <div className="legend-item">
              <div className="legend-color legend-available" />
              <span>Unit Tersedia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
