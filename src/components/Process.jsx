import { motion } from 'motion/react'

const steps = [
  {
    title: 'Send your footage',
    body: 'Drop your raw footage in a Drive folder. Add notes if you have a story in mind.',
  },
  {
    title: 'I edit',
    body: 'I handle the cuts, captions, pacing, and hooks, so you can get back to creating.',
  },
  {
    title: 'You review',
    body: 'Watch the edit and request revisions until it feels right.',
  },
]

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto mb-14 max-w-xl text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          How it works
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Simple process</h2>
        <p className="mt-5 text-base text-white/60 sm:text-lg">
          You send the clips. I handle the rest.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-colors hover:border-white/25"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 font-serif text-lg">
              {i + 1}
            </span>
            <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}