'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark(!dark)} />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  )
}