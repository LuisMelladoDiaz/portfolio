import React from 'react'

const footer = () => {
    return (
        <footer id="contact"
            className="flex justify-center gap-12 sm:gap-24 md:gap-40 lg:gap-52 xl:gap-96 mt-10 w-full py-8 text-xs text-white bg-black font-sans font-semibold uppercase">
            <a href="https://github.com/LuisMelladoDiaz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Github
            </a>
            <a href="https://www.linkedin.com/in/mellado-diaz-luis/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Linkedin
            </a>
            <a href="mailto:melladodiazluis@gmail.com" className="hover:underline">
                Email
            </a>
        </footer>

    )
}

export default footer