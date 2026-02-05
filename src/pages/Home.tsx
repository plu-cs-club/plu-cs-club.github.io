export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Logo with glow effect */}
      <div className="animate-fade-in-up animate-pulse-glow animate-float">
        <img
          src="/logo.png"
          alt="PLU CS Club Logo"
          className="w-64 h-64 md:w-100 md:h-100 object-contain rounded-lg"
        />
      </div>

      {/* Title */}
      <h1
        className="text-3xl md:text-5xl font-bold text-matrix glow-text text-center mb-4 animate-fade-in-up"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        PLU CS CLUB
      </h1>

      {/* Tagline */}
      <p
        className="text-gray-400 text-lg md:text-xl text-center max-w-md mb-8 animate-fade-in-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        Building the future, one line of code at a time.
      </p>

      {/* CTA */}
      <div
        className="animate-fade-in-up"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        <a
          href="#learn-more"
          className="inline-block px-6 py-3 border border-[var(--matrix-green)] text-[var(--matrix-green)] rounded hover:bg-[var(--matrix-green)] hover:text-black transition-all duration-300 hover:shadow-[var(--matrix-glow)]"
        >
          {'>'} Enter_
        </a>
      </div>
    </div>
  );
}
