import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  // Highlight the link of whichever section is in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 shadow-lg shadow-black/30 backdrop-blur-xl">
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="relative rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            {active === id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative">{label}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  )
}