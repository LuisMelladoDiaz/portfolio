"use client"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <main className="min-h-screen bg-neutral-800 text-white flex flex-col font-sans">
            {/* HERO*/}
            <section className="md:flex-1 flex flex-col justify-between p-6 md:p-16 gap-4 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-light leading-tight md:leading-none tracking-tight">
                        I AM
                        <br /> LUIS MELLADO
                    </h1>
                </motion.div>
            </section>

            {/* SUBTITLE */}
            <section className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-4 p-6 md:p-16 bg-neutral-800 mt-20 md:mt-0">
                <motion.div
                    className="max-w-xs text-xs tracking-widest text-gray-300"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <span className="uppercase">
                        I design and develop digital experiences for people and help them grow their business.
                        <br />
                    </span>
                    <motion.a
                        href="/CV_LuisMelladoDiaz_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 md:mt-6 px-4 md:px-6 py-2 border border-white text-white text-sm font-medium rounded transition hover:bg-white hover:text-black"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CV
                    </motion.a>
                </motion.div>

                <motion.div
                    className="flex items-center justify-end md:justify-end md:mt-0 mt-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <span className="text-3xl sm:text-4xl md:text-8xl font-light tracking-tight text-right">
                        FULL-STACK
                        <br /> DEV
                    </span>
                </motion.div>
            </section>
        </main>
    )
}

export default Hero
