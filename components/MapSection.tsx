'use client'

import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const locations = [
    {
        name: 'Test Location',
        type: 'Billboard',
        address: 'Jl. Jalur Sutera Boulevard No.41, RT.003/RW.006, Panunggangan Tim., Kec. Pinang, Kota Tangerang, Banten 15143',
        coordinates: [106.65971226225288, -6.22027094834841 ] as [number, number],
    },
    {
        name: 'Test',
        type: 'Billboard',
        address: 'Jl. Hang Lekir I No.6, RT.1/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270',
        coordinates: [106.79685119506857, -6.228775857340689] as [number, number],
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
            center: [106.81338288790896, -6.191179579476335],
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