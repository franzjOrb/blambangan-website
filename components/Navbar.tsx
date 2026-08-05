'use client'

interface NavbarProps {
    dark: boolean;
    onToggle: () => void
}

export default function Navbar({ dark, onToggle }: NavbarProps) {
    return (
        <nav className="navbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px'}}>
                <img
                    src="/assets/icon.jpeg"
                    alt="logo"
                    style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
                <div>
                    <div className="navbar-logo-text-primary">CV. Blambangan</div>
                    <div className="navbar-logo-text-secondary">Advertising</div>
                </div>
            </div>

            <div className="navbar-links">
                <a href="#layanan" className="navbar-link">Layanan</a>
                <a href="#portfolio" className="navbar-link">Portfolio</a>
                <a href="#tentang" className="navbar-link">Tentang</a>
                <a href="#kontak" className="navbar-link">Kontak</a>
            </div>

            <button className="theme-toggle" onClick={onToggle}>
                <span>{dark ? '☀️' : '🌙'}</span>
                <span>{dark ? 'Light' : 'Dark'}</span>
            </button>
        </nav>
    )
}