
'use client'

import { useEffect, useRef, useState } from 'react';
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboardUser,
  faArrowRightFromBracket,
  faBook,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

export default function NavbarComponent() {
      const [pageLoaded, setPageLoaded] = useState(false)
  const { theme, toggleTheme, ready } = useTheme()

  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 80)
  }, [])

  if (!ready) {
    return <div className="min-h-screen bg-white dark:bg-gray-950" />
  }
  
type Theme = 'light' | 'dark'

function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      setTheme(saved)
      return
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (!theme) return

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme, ready: theme !== null }
}
    return (
        <>
<nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-24 px-8 lg:px-16 items-center justify-between bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-6 lg:gap-10">
          <a
            href="/signup"
            className="flex items-center gap-2 text-lg font-bold bg-[#31314f] hover:bg-black text-white px-5 py-2.5 rounded-lg transition-colors duration-300"
          >
            انشئ حسابك
            <FontAwesomeIcon icon={faClipboardUser} className="w-5 h-5" />
          </a>

          <a
            href="/signin"
            className="flex items-center gap-2 text-lg font-bold bg-[#31314f] hover:bg-black text-white px-5 py-2.5 rounded-lg transition-colors duration-300"
          >
            تسجيل الدخول
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 h-5" />
          </a>

          <div className="group relative flex items-center w-12 h-12 hover:w-64 bg-[#31314f] dark:bg-[#31314f] rounded-full transition-all duration-500 overflow-hidden shadow-md">
            <div className="flex items-center justify-center w-12 h-12 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox=" -5 0 25 25"
                width="35"
                height="22"
                fill="currentColor"
              >
                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="ابحث من هنا"
              className="bg-transparent outline-none text-white placeholder-white/70 w-full p-5  text-lg"
            />
          </div>
        </div>

        <div className="flex items-center gap-10">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={90}
            height={90}
            className="rounded-full hover:scale-110 transition-transform duration-500"
          />

          <button
            onClick={toggleTheme}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
            aria-label="تبديل الوضع الليلي"
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </button>
        </div>
      </nav>
      {/* navbar default */}

      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 h-20 bg-white dark:bg-black text-white flex items-center justify-between px-5">
        <div className="flex gap-4">
          <a href="signup" className="text-sm bg-[#31314f] text-white px-3 py-1.5 rounded font-medium">
            انشئ حسابك
          </a>
          <a href="signin" className="text-sm bg-[#31314f]  text-white px-3 py-1.5 rounded font-medium">
            الدخول
          </a>
        </div>

        <Image
          src="/logo1.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full hover:scale-110  transition-transform"
        />

        <button
          onClick={toggleTheme}
          className="text-2xl text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
          aria-label="تبديل الوضع الليلي"
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
      </nav>
      {/* navbar alter */}   
      </>
     );
};
