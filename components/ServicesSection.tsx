const services = [
  {
    number: "01",
    title: "Billboard",
    description: 
      "Iklan outdoor berukuran besar di lokasi strategis dengan visibilitas tinggi untuk menjangkau audiens maksimal.",
  },
  {
    number: "02",
    title: "Neon Box",
    description: 
      "Signage box bercahay yang tampil mencolok siang dan malam, cocok untuk branding toko, restoran, dan gedung komersial.",
  },
  {
    number: "03",
    title: "Signage",
    description: 
      "Tanda pengenal bisnis yang profesional dan tahan lama - dari huruf timbul hingga plat nama untuk berbagai kebutuhan identitas visual.",
  },
  {
    number: "04",
    title: "Fasad",
    description: 
      "Tampak depan toko dan gedung yang dirancang kuat dan menarik sebagai wajah bisnis kamu di mata pelanggan.",
  },
  {
    number: "05",
    title: "Spanduk",
    description: 
      "Media promosi fleksibel untuk event, promo, dan kampanye - cetak cepat dengan kualitas warna tajam dan tahan cuaca.",
  },
];

export default function ServicesSection() {
    return (
        <section id="layanan" className="section">
            <div className="section-inner">
                <div className="section-tag">— Layanan Kami</div>
                <h2 className="section-title">
                    Solusi Iklan <span className="orange">Lengkap</span>
                </h2>
                <div className="services-grid">
                    {services.map((s) => (
                        <div key={s.number} className="service-card">
                            <div className="service-number">{s.number}</div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-desc">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}