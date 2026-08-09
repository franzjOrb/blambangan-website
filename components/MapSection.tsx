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
    },
    {
        name: 'Billboard Jendral Sudirman',
        type: 'Billboard',
        address: 'Jl. Jend. Sudirman No 54, Kota Makassar, Sulawesi Selatan',
        coordinates: [119.4152539, -5.1452318] as [number, number],
    },
    {
        name: 'Billboard Letjen Hertasning',
        type: 'Billboard',
        address: 'Jl. Letjen Hertasning, Tidung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222',
        coordinates: [119.4483385, -5.167137] as [number, number],
    },
    {
        name: 'Billboard Pengayoman',
        type: 'Billboard',
        address: 'Jl. Pengayoman No.1, Kota Makassar, Sulawesi Selatan',
        coordinates: [119.4406657, -5.1582576] as [number, number],
    },
    {
        name: 'Billboard Pengayoman',
        type: 'Billboard',
        address: 'Jl. Pengayoman No.8, Masale, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90231',
        coordinates: [119.4394231, -5.1582031] as [number, number],
    },
    {
        name: 'Billboard Pettarani',
        type: 'Billboard',
        address: 'Jl. A. P. Pettarani, Kota Makassar, Sulawesi Selatan',
        coordinates: [119.4316533, -5.1736043] as [number, number],
    },
    {
        name: 'Billboard Pare-pare',
        type: 'Billboard',
        address: 'Jl. Mattirotasi No.189, Kota Parepare, Sulawesi Selatan',
        coordinates: [119.6269191, -4.0461065] as [number, number],
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
            zoom: 12,
        })

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

        locations.forEach((loc) => {
            const el = document.createElement('div')
            el.style.cssText = `
                width: 36px;
                height: 36px;
                background: #F4A017;
                border: 2px solid #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 900;
                font-size: 14px;
                color: #000;
                cursor: pointerl
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);    
            `
            el.innerHTML = 'B'

            const popup = new mapboxgl.Popup({
                offset: 25,
                closeButton: false,
                maxWidth: '220px',
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
                </div>
            `)

            new mapboxgl.Marker(el)
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
                        <div key={loc.name} className="location-card">
                            <div className="location-type">{loc.type}</div>
                            <div className="location-name">{loc.name}</div>
                            <div className="location-address">{loc.address}</div>
                        </div>
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