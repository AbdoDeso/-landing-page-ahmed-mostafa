// components/ScrollReveal.tsx
'use client'

import { useEffect, useRef, ReactNode } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  delay = '0s',
}: {
  children: ReactNode
  className?: string
  delay?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target) // run once
        }
      },
      { threshold: 0.1 } // trigger when 10% visible
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        opacity-0 translate-y-12 transition-all duration-800 ease-out transform-gpu
        in-view:opacity-100 in-view:translate-y-0
        ${className}
      `}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  )
}