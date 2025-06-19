import Project_card from "./Project-Card"

const Projects = () => {
    // Project data configuration
    const projectsData = [
        {
            id: "fccc",
            title: "Fuzzy Cluster Based Classifier Chain",
            vid: "fccc.mp4",
            technologies: ["Python", "Scikit-Learn", "Pandas", "LaTeX"],
            year: "2024-25",
            links: [
                {
                    url: "/fccc.pdf",
                    label: "More",
                },
                {
                    url: "https://github.com/LuisMelladoDiaz/Difuse-Cluster-Chain-for-Multi-Label-Classification",
                    label: "Code",
                    type: "github",
                },
            ],
            description:
                "This work improves the multi-label classification algorithm Classifier Chains with a novel approach: constructing the classifier chain from fuzzy clusters of similar labels. This research gave me the opportunity to participate as a speaker at the second edition of the Logic, Computation, and Artificial Intelligence Conference of the University of Seville.",
            className: "w-full md:w-[400px]",
        },
        {
            id: "portfolio",
            title: "Personal Portfolio Website",
            src: "portfolio.jpg",
            technologies: ["Next.js", "JavaScript", "TailwindCSS", "Figma"],
            year: "2025",
            description:
                "When I started this project, I was faced with a blank page and realized something important: I knew how to code, but I had never actually designed a website from scratch. This became my first real dive into design, learning tools like Figma to create wireframes, mood boards, and layouts. After many design iterations, this is the final result. I hope you like it, and I'm always open to feedback to keep improving the design.",
            className: "w-full md:w-[340px]",
            links: [
                {
                    url: "https://www.aaspinwall.com/",
                    label: "Layout Inspiration",
                },
                {
                    url: "https://www.daspritam.in/",
                    label: "Style Inspiration",
                },
                {
                    url: "https://github.com/LuisMelladoDiaz/Portfolio-Luis-Mellado",
                    label: "Code",
                    type: "github",
                },
            ],
        },
        {
            id: "pawtel",
            title: "Pawtel - Pet Accommodation",
            vid: "pawtel.mp4",
            technologies: ["SQL", "Python", "Django", "TanStack", "Vue.js", "Vite", "TailwindCSS"],
            year: "2025",
            description:
                "A comprehensive pet accommodation booking platform designed to connect pet owners with trusted boarding services. Pawtel serves as the first comparison platform for pet accommodation offers, enabling users to search, compare, and book suitable lodging for their pets. As Technical Lead and Full-Stack Developer, I managed a team of 14 members to create a brand and deliver a Progressive Web Application (PWA) with cross-platform compatibility.",
            className: "w-full md:w-[400px]",
            links: [
                {
                    url: "https://github.com/LuisMelladoDiaz/Pawtel-ComparadorDeHotelesParaMascotas",
                    label: "Code",
                    type: "github",
                },
            ],
        },
    ]

    return (
        <section className="px-4 md:px-18 mb-6 md:mb-10 mt-8 md:mt-15">
            {/* Section Header */}
            <header className="mb-8 md:mb-16">
                <h2 className="text-4xl md:text-8xl font-light leading-none tracking-tight">
                    SELECTED PROJECTS
                </h2>
            </header>

            {/* Projects Grid */}
            <div className="flex flex-col gap-16 md:gap-24">
                {/* FCCC Project - Featured */}
                <div className="flex justify-start">
                    <Project_card
                        className={projectsData[0].className}
                        title={projectsData[0].title}
                        vid={projectsData[0].vid}
                        technologies={projectsData[0].technologies}
                        year={projectsData[0].year}
                        links={projectsData[0].links}
                        desc={projectsData[0].description}
                    />
                </div>

                {/* Portfolio Project - Right Aligned */}
                <div className="flex justify-center md:justify-end">
                    <Project_card
                        className={projectsData[1].className}
                        title={projectsData[1].title}
                        src={projectsData[1].src}
                        technologies={projectsData[1].technologies}
                        year={projectsData[1].year}
                        desc={projectsData[1].description}
                        links={projectsData[1].links}
                    />
                </div>

                {/* Pawtel Project - Left Aligned */}
                <div className="flex justify-start">
                    <Project_card
                        className={projectsData[2].className}
                        title={projectsData[2].title}
                        vid={projectsData[2].vid}
                        technologies={projectsData[2].technologies}
                        year={projectsData[2].year}
                        desc={projectsData[2].description}
                        links={projectsData[2].links
                        }
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
