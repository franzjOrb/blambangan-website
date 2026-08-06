'use client'

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
    dark: boolean;
    onToggle: () => void
}

export default function Navbar({ dark, onToggle }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)

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

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <a href="#layanan" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Layanan</a>
                    <a href="#portfolio" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Portfolio</a>
                    <a href="#tentang" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Tentang</a>
                    <a href="#kontak" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Kontak</a>
                </div>
            )}
        </nav>
    )
}