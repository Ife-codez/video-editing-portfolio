import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const faqs = [
  {
    q: 'How much do you charge?',
    a: "It depends on the video length and how much editing it needs. Send me a sample of your footage and I'll give you a clear quote.",
  },
  {
    q: 'What software do you use?',
    a: 'I edit in CapCut.',
  },
  {
    q: 'How long does an edit take?',
    a: 'Most edits are ready in 1 to 2 days, depending on how complex the video is.',
  },
  {
    q: 'Do you offer revisions?',
    a: "Yes. Once you've reviewed the edit, send your changes and I'll update it.",
  },
  {
    q: 'What format do you deliver in?',
    a: '1080p or 4K, depending on the platform the video is going on.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-2xl scroll-mt-24 px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Good to know
        </p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Common questions</h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-white/25"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-2xl leading-none text-white/60"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}