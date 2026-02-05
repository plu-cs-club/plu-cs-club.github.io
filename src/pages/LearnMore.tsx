export default function LearnMore() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="max-w-2xl w-full">
                {/* Header */}
                <h1
                    className="text-3xl md:text-4xl font-bold text-matrix glow-text mb-8 animate-fade-in-up"
                >
                    {'>'} learn_more
                </h1>

                {/* Content sections */}
                <div className="space-y-6">
                    <section
                        className="animate-fade-in-up"
                        style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                    >
                        <h2 className="text-xl text-[var(--matrix-green)] mb-2 font-semibold">
              // Join Us (Discord)
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Join us on Discord to connect with like-minded individuals and
                            discuss all things tech. <a href="https://discord.gg/bxMuhpD9dH">Join our Discord</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
