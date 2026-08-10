'use client'

import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const locations = [
    {
        name: 'Billboard Gunung Latimojong',
        type: 'Billboard',
        address: 'Jl. Gunung Latimojong No.137a, Maradekaya, Kec. Makassar, Kota Makassar, Sulawesi Selatan 90145',
        coordinates: [119.4212662, -5.1438959 ] as [number, number],
        streetView: 'https://maps.app.goo.gl/2S2d5kG4eJJYRt1d6',
    },
    {
        name: 'Billboard Jendral Sudirman',
        type: 'Billboard',
        address: 'Jl. Jend. Sudirman No 54, Kota Makassar, Sulawesi Selatan',
        coordinates: [119.4152539, -5.1452318] as [number, number],
        streetView: 'https://maps.app.goo.gl/9YEC8RPhHtmVEAC19',
    },
    {
        name: 'Billboard Letjen Hertasning',
        type: 'Billboard',
        address: 'Jl. Letjen Hertasning, Tidung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222',
        coordinates: [119.4483385, -5.167137] as [number, number],
        streetView: 'https://maps.app.goo.gl/4xbXztyWGxza5W7k8',
    },
    {
        name: 'Billboard Pengayoman',
        type: 'Billboard',
        address: 'Jl. Pengayoman No.1, Kota Makassar, Sulawesi Selatan',
        coordinates: [119.4406657, -5.1582576] as [number, number],
        streetView: 'https://maps.app.goo.gl/FKptNLLEaqDUsK2m9',
    },
    {
        name: 'Billboard Pengayoman (2)',
        type: 'Billboard',
        address: 'Jl. Pengayoman No.8, Masale, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90231',
        coordinates: [119.4394231, -5.1582031] as [number, number],
        streetView: 'https://maps.app.goo.gl/BA5i33t2WD2XN8rL9',
    },
    {
        name: 'Billboard Pettarani',
        type: 'Billboard',
        address: 'Jl. A. P. Pettarani, Kota Makassar, Sulawesi Selatan',
        coordinates: [119.4316533, -5.1736043] as [number, number],
        streetView: 'https://maps.app.goo.gl/KoUnHVKxcPzSuJRr7',
    },
    {
        name: 'Billboard Pare-pare',
        type: 'Billboard',
        address: 'Jl. Mattirotasi No.189, Kota Parepare, Sulawesi Selatan',
        coordinates: [119.6269191, -4.0461065] as [number, number],
        streetView: 'https://maps.app.goo.gl/GKvyRL5aTZAHfhpE7',
    },
];

interface MapSectionProps {
    dark: boolean;
};

export default function MapSection({ dark }: MapSectionProps) {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (map.current) return
        if (!mapContainer.current) return
        
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: dark
                ? 'mapbox://styles/mapbox/dark-v11'
                : 'mapbox://styles/mapbox/light-v11',
            center: [119.4462334745602, -5.157653105923595],
            zoom: 10,
        })

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

        locations.forEach((loc) => {
            const wrapper = document.createElement('div')
            wrapper.style.cssText = 'width: 36px; height: 36px;'
            
            const el = document.createElement('div')
            el.className = 'map-marker'
            el.textContent = 'B'

            wrapper.appendChild(el)

            el.onmouseenter = () => { el.style.transform = 'scale(1.2)' }
            el.onmouseleave = () => { el.style.transform = 'scale(1)' }

            const popup = new mapboxgl.Popup({
                offset: 25,
                closeButton: false,
                maxWidth: '260px',
            }).setHTML(`
                <div style="
                    background: #1a1d26;
                    color: #F5F0F8;
                    padding: 12px 16px;
                    border-radius: 8px;
                    font-family: sans-serif;
                ">
                    <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #F4A017; margin-bttom: 4px;">
                        ${loc.type}
                    </div>
                    <div style="font-size: 13px; font-weight: 700; margin-bottom: 4px;">
                        ${loc.name}
                    </div>
                    <div style="font-size: 11px; color: rgba(245, 240, 232, 0.5);">
                        ${loc.address}
                    </div>
                    <a
                        href="${loc.streetView}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            display: block;
                            background: #F4A017;
                            color: #000;
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: 1.5px;
                            text-transform: uppercase;
                            text-align: center;
                            text-decoration: none;
                            padding: 10px;
                            border-radius: 4px;
                        "
                    >
                        Lihat di Google Maps →
                    </a>
                </div>
            `)

            new mapboxgl.Marker(wrapper)
                .setLngLat(loc.coordinates)
                .setPopup(popup)
                .addTo(map.current!)
        })

        return () => {
            map.current?.remove()
            map.current = null
        }
    }, [])

    useEffect(() => {
        if (!map.current) return
        map.current.setStyle(
            dark
                ? 'mapbox://styles/mapbox/dark-v11'
                : 'mapbox://styles/mapbox/light-v11'
        )
    }, [dark])

    return (
        <section id="lokasi" className="section">
            <div className="section-inner">
                <div className="section-tag">— Titik Lokasi Kami</div>
                <h2 className="section-title">
                    Sebaran <span className="orange">Lokasi</span> Billboard
                </h2>

                <div className="location-cards">
                    {locations.map((loc) => (
                        <a 
                            key={loc.name} 
                            href={loc.streetView}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-card"
                        >
                            <div className="location-type">{loc.type}</div>
                            <div className="location-name">{loc.name}</div>
                            <div className="location-address">{loc.address}</div>
                            <div className="location-cta">Lihat Lokasi →</div>
                        </a>
                    ))}
                </div>

                <div
                    ref={mapContainer}
                    style={{
                        width: '100%',
                        height: '480px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginTop: '32px',
                        border: '1px solid var(--border)',
                    }}
                />
            </div>
        </section>
    )
}