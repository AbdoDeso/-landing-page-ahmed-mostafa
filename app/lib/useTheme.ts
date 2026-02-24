'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')   // ← changed

  // 1. On mount → only try to restore saved preference (if any)
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) {
      setTheme(saved)
    }
    // If no saved value → keep using the initial 'dark'
  }, [])

  // 2. Whenever theme changes → update DOM + save
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme, isLoaded: true } // no longer need null check
}