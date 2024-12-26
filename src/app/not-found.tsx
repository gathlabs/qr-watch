import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            404
          </h1>
          <h2 className="text-4xl font-bold text-white mt-8 mb-4 font-playfair">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-montserrat">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-gold-500 to-gold-300 text-black px-8 py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-200 transition-all duration-300 font-montserrat"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
