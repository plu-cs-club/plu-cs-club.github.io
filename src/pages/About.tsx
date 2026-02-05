export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <h1
          className="text-3xl md:text-4xl font-bold text-matrix glow-text mb-8 animate-fade-in-up"
        >
          {'>'} about_us
        </h1>

        {/* Content sections */}
        <div className="space-y-6">
          <section
            className="animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            <h2 className="text-xl text-[var(--matrix-green)] mb-2 font-semibold">
              // Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We are a community of passionate programmers, developers, and tech
              enthusiasts at Pacific Lutheran University. Whether you're just
              starting your coding journey or you're a seasoned developer, you
              belong here.
            </p>
          </section>

          <section
            className="animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h2 className="text-xl text-[var(--matrix-green)] mb-2 font-semibold">
              // What We Do
            </h2>
            <p className="text-gray-300 leading-relaxed">
              From hackathons to workshops, from side projects to career prep,
              we create opportunities for members to learn, build, and grow
              together. We believe in learning by doing and supporting each
              other along the way.
            </p>
          </section>

          <section
            className="animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <h2 className="text-xl text-[var(--matrix-green)] mb-2 font-semibold">
              // Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To foster a welcoming environment where students can explore
              computer science beyond the classroom, collaborate on meaningful
              projects, and prepare for careers in technology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
