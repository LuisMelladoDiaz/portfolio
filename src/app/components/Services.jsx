export default function TechServices() {
    return (
        <section className="w-full min-h-[350px] max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-stretch bg-neutral-800">
            {/* Columna izquierda */}
            <div className="flex-1 flex flex-col justify-between gap-8 p-6 md:p-10">
                <div>
                    <h2 className="text-white text-lg md:text-xl font-mono tracking-widest uppercase mb-2">Technologies I Use</h2>
                    <p className="text-xs text-gray-300 font-sans uppercase mb-8">These are my go-to tools, but I can easily adapt to your preferred tech stack.</p>
                </div>
                
            </div>
            {/* Columna derecha */}
            <div className="flex-[2] flex flex-col justify-center gap-6 p-6 md:p-10">
                {/* Frontend */}
                <div className="flex items-center gap-6 border-t border-white/40 pt-6">
                    <div className="ml-14 flex-1">
                        <span className="text-white text-2xl md:text-3xl font-light">Frontend</span>
                        <div className="text-white/80 text-lg mt-2 flex flex-wrap gap-4">
                            <span>React</span>
                            <span>Next.js</span>
                            <span>Vue.js</span>
                            <span>Vite</span>
                            <span>TypeScript</span>
                            <span>JavaScript</span>
                            <span>TailwindCSS</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>
                {/* Backend */}
                <div className="flex items-center gap-6 border-t border-white/40 pt-6">
                    <div className="ml-14 flex-1">
                        <span className="text-white text-2xl md:text-3xl font-light">Backend</span>
                        <div className="text-white/80 text-lg mt-2 flex flex-wrap gap-4">
                            <span>MySQL</span>
                            <span>PostgreSQL</span>
                            <span>Python</span>
                            <span>Django</span>
                            <span>Java</span>
                            <span>Spring</span>
                            <span>JavaScript</span>
                            <span>Node.js</span>
                            <span>REST API</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 