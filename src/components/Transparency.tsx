import { homePageCopy } from '@/data/config'

export default function Transparency() {
  return (
    <section className="section-padding bg-background-primary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">{homePageCopy.transparency.headline}</h2>
            <p className="text-lg text-text-secondary">{homePageCopy.transparency.body}</p>
          </div>

          {/* Checkmark Items */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {homePageCopy.transparency.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="text-accent-primary text-xl flex-shrink-0 mt-1">✓</div>
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>

          {/* Footer message */}
          <div className="bg-background-secondary border border-background-tertiary rounded-lg p-8 text-center">
            <p className="text-text-secondary">
              <span className="text-accent-light font-semibold">No guaranteed earnings.</span> No hidden promises. Just clearly defined opportunities and clearly communicated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
