'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null)

  // 1. On mount → read from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null

    if (saved) {
      setTheme(saved)
      return
    }

    // system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  // 2. Whenever theme changes → update class & localStorage
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
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme, isLoaded: theme !== null }
}