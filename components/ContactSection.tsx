export default function ContactSection() {
    return (
        <section id="kontak" className="section">
            <div className="contact-inner">
                <div>
                    <div className="section-tag">Mulai Sekarang</div>
                    <h2 className="contact-title">
                        Siap Pasang<br />
                        Iklan <span className="orange">Bersama</span><br />
                        Kami?
                    </h2>
                </div>
                <div className="contact-form">
                    <input className="form-input" type="text" placeholder="Nama Anda" />
                    <input className="form-input" type="email" placeholder="Email Anda" />
                    <input className="form-input" type="text" placeholder="Jenis iklan yang dibutuhkan" />
                    <button className="btn-submit">Kirim Pesan</button>
                </div>
            </div>
        </section>
    )
}