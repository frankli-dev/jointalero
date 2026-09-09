import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main>
      <Navigation />

      <section className="section-padding bg-gradient-to-br from-background-primary via-background-secondary to-background-primary">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-6xl font-bold text-accent-primary/30 mb-6">404</div>
            <h1 className="mb-6">Page not found</h1>
            <p className="text-lg text-text-secondary mb-10">
              The page you are looking for does not exist or may have moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
              <Link href="/opportunities" className="btn-secondary">
                Browse opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
