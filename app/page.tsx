'use client'

import NavbarComponent from '../components/LandingPage/navbar';
import HerosectionComponent from '@/components/LandingPage/hero-section';
import SecondSection from '@/components/LandingPage/2ndSection';
import ThirdSection from '@/components/LandingPage/3rdSection';
import FourthSection from '@/components/LandingPage/4thSection';
import Footer from '@/components/LandingPage/footer';
export default function Home() {

  return (
    <main className="min-h-screen bg-white dark:bg-[#101828] text-[#2a2c52] dark:text-gray-200 transition-colors duration-300">
      <NavbarComponent />
      <HerosectionComponent />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </main>
  )
}