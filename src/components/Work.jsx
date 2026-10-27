import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Rename the titles to whatever you want shown on the cards
const edits = [
  { title: 'Algorithm hack reel', youtubeId: 'bb2gFyHkNxo' },
  { title: 'capcut coach reel', youtubeId: 'Qau1ucZ2RCc' },
  { title: 'Finance/AI coach reel', youtubeId: '_h3FtrvQfww' },
  { title: 'Before Vs After of a product coach', youtubeId: '7h6GGuK6Hbk' },
]

function Thumbnail({ id, title }) {
  const [src, setSrc] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`)
  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setSrc(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  )
}

function VideoModal({ edit, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl leading-none text-white backdrop-blur-md transition hover:bg-white/20"
      >
        ×
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="aspect-[9/16] w-[min(90vw,calc(85vh*9/16))] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/60"
      >
        <iframe
          src={`https://www.youtube.com/embed/${edit.youtubeId}?autoplay=1&rel=0&playsinline=1`}
          title={edit.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </motion.div>
    </motion.div>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Selected work
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Recent edits</h2>
      </motion.div>

      <div className="flex flex-wrap justify-start gap-4 md:justify-center md:gap-6">
        {edits.map((edit, i) => (
          <motion.button
            key={edit.youtubeId}
            onClick={() => setActive(edit)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            className="group shrink-0 grow-0 basis-[calc(50%_-_0.5rem)] cursor-pointer text-left md:basis-[calc(33.333%_-_1rem)] lg:basis-[calc(25%_-_1.125rem)]"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-500 group-hover:-translate-y-1 group-hover:border-white/25">
              <Thumbnail id={edit.youtubeId} title={edit.title} />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <h3 className="mt-3 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
              {edit.title}
            </h3>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && <VideoModal edit={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}