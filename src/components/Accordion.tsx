'use client'

import { useId, useState } from 'react'
import { FaqItem } from '@/data/faq'

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  // Several accordions render on one page, so panel ids need a per-instance prefix.
  const idPrefix = useId()

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div
            key={item.question}
            className="bg-background-secondary border border-background-tertiary rounded-lg overflow-hidden"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-panel-${index}`}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-background-tertiary/40 transition-colors"
              >
                <span className="font-semibold text-base text-text-primary">{item.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-accent-primary transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div id={`${idPrefix}-panel-${index}`} hidden={!isOpen} className="px-6 pb-5">
              <p className="text-text-secondary text-base">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
