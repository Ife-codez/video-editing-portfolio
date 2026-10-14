import { motion } from 'motion/react'

const EMAIL = 'helloifyy@gmail.com'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[60vh] scroll-mt-24 items-center justify-center overflow-x-clip px-6 py-16 sm:py-20"
    >
      {/* soft glow, same idea as the hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="text-4xl font-medium leading-tight sm:text-6xl sm:leading-[1.1]">
          Ready to make your next video{' '}
          <span className="font-serif italic">unskippable</span>?
        </h2>

        <div className="mt-10 flex max-w-full items-center gap-4 rounded-full border border-white/10 bg-white/5 p-1.5 pl-6 backdrop-blur-md">
          <span className="truncate text-sm text-white/70">{EMAIL}</span>
          <a
            href={`mailto:${EMAIL}?subject=Video editing inquiry`}
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90"
          >
            Email me
          </a>
        </div>
        <p className="mt-16 text-xs text-white/30">
          © {new Date().getFullYear()} Ifyy
        </p>
      </motion.div>
    </section>
  )
}