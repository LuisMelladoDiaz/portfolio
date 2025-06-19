const education = [
    {
        title: "Software Engineering (BSc)",
        institution: "ETSII, University of Seville",
        year: "Sep 2021 – May 2025",
        description: "Fully English-taught program. GPA: 8.95/10. Honors in Physical Foundations of Computing, Computer Logic, Computer Networks, and Applied Statistics."
    },
    {
        title: "MSc in Computer Science & Artificial Intelligence ",
        institution: "University of Seville",
        year: "2025 – 2026 (planned)",
        description: "Planned postgraduate studies focused on advanced AI and data science."
    }
];

const experience = [
    {
        role: "CTO",
        company: "Conest StartUp",
        year: "Mar 2025 – May 2025",
        description: "Led tech stack selection (Next.js, Supabase, Stripe) for rapid MVP. Integrated Stripe, OpenAI, and Resend APIs. Set up Vercel CI/CD with custom domain."
    },
    {
        role: "Intern Software Engineer",
        company: "NTTData",
        year: "Sep 2024 – Mar 2025",
        description: "Automated Oracle ERP tasks with Python. Developed SQL BI Publisher reports. Resolved 100+ monthly HR cases."
    },
    {
        role: "Waiter",
        company: "Hnos Castro",
        year: "Jun 2021 – Sep 2024",
        description: "High-pressure service (200+ daily customers). Prototyped digital inventory system, reducing waste and order time."
    }
    
];

export default function Career() {
    return (
        <section className="px-4 md:px-18 mb-6 md:mb-10 mt-8 md:mt-15">
            <div className="flex items-center justify-start mb-8 md:mb-10">
                <span className="text-4xl md:text-8xl font-light leading-none tracking-tight">
                    MY CAREER</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-4xl mx-auto">
                {/* Educación */}
                <div className="flex-1">
                    <h3 className="text-xl text-white/80 font-mono mb-6 uppercase tracking-widest">Education</h3>
                    <ol className="relative border-l-2 border-neutral-700 ml-2">
                        {education.map((item, idx) => (
                            <li key={idx} className="mb-8 md:mb-10 ml-6">
                                <span className="absolute -left-3 top-1 w-5 h-5 bg-neutral-900 border-2 border-[#eab308] rounded-full"></span>
                                <div className="text-lg text-white font-semibold">{item.title}</div>
                                <div className="text-white/70 text-base">{item.institution}</div>
                                <div className="text-xs text-[#eab308] font-mono mb-2">{item.year}</div>
                                <div className="text-white/60 text-sm leading-relaxed">{item.description}</div>
                            </li>
                        ))}
                    </ol>
                </div>
                {/* Experiencia */}
                <div className="flex-1">
                    <h3 className="text-xl text-white/80 font-mono mb-6 uppercase tracking-widest">Work Experience</h3>
                    <ol className="relative border-l-2 border-neutral-700 ml-2">
                        {experience.map((item, idx) => (
                            <li key={idx} className="mb-8 md:mb-10 ml-6">
                                <span className="absolute -left-3 top-1 w-5 h-5 bg-neutral-900 border-2 border-[#38bdf8] rounded-full"></span>
                                <div className="text-lg text-white font-semibold">{item.role}</div>
                                <div className="text-white/70 text-base">{item.company}</div>
                                <div className="text-xs text-[#38bdf8] font-mono mb-2">{item.year}</div>
                                <div className="text-white/60 text-sm leading-relaxed">{item.description}</div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
} 