const stats = [
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "500+", label: "Project Selesai" },
    { number: "200+", label: "Klien Puas" },
    { number: "5", label: "Jenis Layanan" },
]

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-tag">Makassar - Sulawesi Selatan</div>
            <h1 className="hero-title">
                Hadir di <span className="orange">Setiap</span>
                <br />
                Sudut, Terlihat
                <br />
                di <span className="red">Setiap Mata</span>
            </h1>
            <p className="hero-desc">
                CV. Blambangan Advertising menghadirkan solusi periklanan luar dan
                dalam ruangan yang strategis dan berdampak dari Billboard hingga
                Neon Box di seluruh Makassar dan sekitarnya.
            </p>
            <div className="hero-actions">
                <a href="#layanan" className="btn-primary">Lihat Layanan</a>
                <a href="#portfolio" className="btn-ghost">Portfolio Kami →</a>
            </div>

            <div className="stats-grid">
                {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}