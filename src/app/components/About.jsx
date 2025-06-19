const frontend = [
    "React", "Next.js", "Vue.js", "Vite", "TypeScript", "JavaScript", "TailwindCSS", "HTML", "CSS"
];
const backend = [
    "MySQL", "PostgreSQL", "Python", "Django", "Java", "Spring", "JavaScript", "Node.js", "REST API"
];

const About = () => {
    return (
        <div className="px-4 md:px-18 mb-6 md:mb-10 mt-8 md:mt-15">
            <div className="w-full flex items-center justify-start mb-6 md:mb-10">
                <span className="text-4xl md:text-8xl font-light leading-none tracking-tight">
                    SKILLS</span>
            </div>
            
            {/* Main content section */}
            <section className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-6">
                {/* Left column - Image */}
                <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                    <div className="w-48 h-48 md:w-64 md:h-[200] rounded-xl overflow-hidden bg-black">
                        <img
                            src="/placeholder8.jpg"
                            alt="Luis Mellado portrait"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Right column: skills */}
                <div className="flex-1 w-full flex flex-col gap-6 md:gap-4">
                    <h3 className="text-xl md:text-xl font-bold text-white font-sans">TECHNOLOGIES I USE</h3>
                    <div className="mb-4">
                        <span className="font-semibold text-white font-sans text-lg">Frontend</span>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2 text-gray-300 text-base font-sans">
                            {frontend.map((tech, i) => (
                                <span key={i} className="inline-flex items-center">
                                    {tech}
                                    {i < frontend.length - 1 && <span className="mx-2 opacity-50">•</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className="font-semibold text-white font-sans text-lg">Backend</span>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2 text-gray-300 text-base font-sans">
                            {backend.map((tech, i) => (
                                <span key={i} className="inline-flex items-center">
                                    {tech}
                                    {i < backend.length - 1 && <span className="mx-2 opacity-50">•</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What I am up to section */}
            <div className="w-full max-w-4xl mx-auto mt-10 md:mt-8">
                <h3 className="text-xl md:text-xl font-bold text-white font-sans mb-3">WHAT I AM UP TO</h3>
                <p className="text-base md:text-lg text-gray-300 font-sans leading-relaxed">
                    I've been playing with computers since I was a kid, and that curiosity eventually led me to become a software engineer specialized in full-stack web development and project management. Lately, I've been diving deeper into artificial intelligence, actively contributing to research initiatives, while also expanding my skills in web design and cloud technologies.
                </p>
            </div>
        </div>
    );
}

export default About;