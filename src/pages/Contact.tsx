export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="max-w-2xl w-full">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-matrix glow-text mb-8 animate-fade-in-up">
                    {'>'} contact
                </h1>

                {/* Contact info */}
                <div className="space-y-6">
                    <div
                        className="animate-fade-in-up p-6 border border-[var(--matrix-green)]/30 rounded-lg bg-black/30"
                        style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                    >
                        <h2 className="text-xl text-[var(--matrix-green)] mb-4 font-semibold">
              // Get In Touch
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-[var(--matrix-green)]">email:</span>
                                <a
                                    href="mailto:csclub@plu.edu"
                                    className="text-gray-300 hover:text-[var(--matrix-green)] transition-colors"
                                >
                                    csclub@plu.edu
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-[var(--matrix-green)]">discord:</span>
                                <a
                                    href="https://discord.gg/placeholder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[var(--matrix-green)] transition-colors"
                                >
                                    PLU CS Club Server
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-[var(--matrix-green)]">github:</span>
                                <a
                                    href="https://github.com/plu-cs-club"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[var(--matrix-green)] transition-colors"
                                >
                                    @plu-cs-club
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-[var(--matrix-green)]">location:</span>
                                <span className="text-gray-300">
                                    Morken Center, Pacific Lutheran University
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="animate-fade-in-up p-6 border border-[var(--matrix-green)]/30 rounded-lg bg-black/30"
                        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
                    >
                        <h2 className="text-xl text-[var(--matrix-green)] mb-4 font-semibold">
              // Meetings
                        </h2>
                        <p className="text-gray-300">
                            We meet every <span className="text-[var(--matrix-green)]">Thursday</span> at{' '}
                            <span className="text-[var(--matrix-green)]">5:00 PM</span> in the Morken Center.
                            All skill levels welcome!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
