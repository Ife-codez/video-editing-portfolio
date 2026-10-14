import { motion } from 'motion/react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* soft glow so the nav blur has something to show */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        {/* availability pill */}
        <motion.div
          variants={item}
          className="mb-8 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Available for work
        </motion.div>

        {/* headline */}
        <motion.h1
          variants={item}
          className="text-4xl font-medium leading-tight sm:text-6xl sm:leading-[1.1]"
        >
          Talking head videos that{' '}
          <span className="font-serif italic">increase</span> retention
        </motion.h1>

        {/* intro */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          I'm Ifyy. I edit talking head videos for coaches, creators, and
          brands. Tight cuts, clean captions, and hooks that keep people
          watching.
        </motion.p>

        {/* buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90 sm:px-7"
          >
            See my edits
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/10 sm:px-7"
          >
            Work with me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}