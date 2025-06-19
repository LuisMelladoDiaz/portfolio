"use client"

import { ExternalLink, Github, Globe, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const Project_card = ({ className, title, src, vid, technologies, year, desc, links, link }) => {
    const videoRef = useRef(null)
    const [isMuted, setIsMuted] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting)

                    if (entry.isIntersecting) {
                        // Video entra en pantalla - reproducir
                        video.play().catch(console.error)
                    } else {
                        // Video sale de pantalla - pausar
                        video.pause()
                    }
                })
            },
            {
                threshold: 0.5, // Se activa cuando el 50% del video es visible
                rootMargin: "0px",
            },
        )

        observer.observe(video)

        return () => {
            observer.disconnect()
        }
    }, [])

    const toggleMute = () => {
        const video = videoRef.current
        if (video) {
            video.muted = !video.muted
            setIsMuted(video.muted)
        }
    }

    // Función para obtener el icono según el tipo de link
    const getLinkIcon = (type) => {
        switch (type) {
            case "github":
                return <Github size={16} />
            case "demo":
            case "live":
                return <Globe size={16} />
            default:
                return <ExternalLink size={16} />
        }
    }

    // Procesar links - mantener compatibilidad con prop 'link' antigua
    const processedLinks = () => {
        if (links && Array.isArray(links)) {
            return links
        } else if (link) {
            // Compatibilidad con la prop 'link' antigua
            return [{ url: link, label: "More", type: "external" }]
        }
        return []
    }

    const finalLinks = processedLinks()

    return (
        <div className={`flex flex-col lg:flex-row gap-6 p-6 rounded-xl w-full`}>
            {/* Sección de Media */}
            <div className="w-full lg:w-1/2">
                <div className="bg-neutral-800 rounded-xl overflow-hidden">
                    <div className="relative w-full h-[250px] lg:h-[300px] overflow-hidden bg-neutral-800 flex items-center justify-center">
                        {/* Mostrar imagen o video según disponibilidad */}
                        {src && !vid ? (
                            <img src={src || "/placeholder.svg"} alt={title || "Proyecto"} className="object-cover w-auto h-auto" />
                        ) : vid ? (
                            <div className="relative w-full h-full">
                                <video
                                    ref={videoRef}
                                    width="100%"
                                    height="100%"
                                    muted={isMuted}
                                    loop
                                    playsInline
                                    preload="metadata"
                                    src={vid}
                                    className="object-cover w-full h-full"
                                />

                                {/* Botón de sonido */}
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-4 right-4 p-3 bg-neutral-800/70 hover:bg-neutral-800/90 rounded-full transition-colors duration-200 backdrop-blur-sm"
                                    aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
                                >
                                    {isMuted ? (
                                        <VolumeX size={20} className="text-white" />
                                    ) : (
                                        <Volume2 size={20} className="text-white" />
                                    )}
                                </button>

                                {/* Indicador de reproducción automática */}
                                {isVisible && (
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/80 rounded-full text-xs text-white font-medium">
                                        Auto
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">Sin media disponible</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sección de Información */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
                {/* Header con título y año */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight flex-1">{title}</h3>
                        {year && (
                            <span className="text-sm text-yellow-400 flex items-center gap-2 flex-shrink-0">
                                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                                {year}
                            </span>
                        )}
                    </div>

                    {/* Tecnologías */}
                    {technologies && technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full border border-neutral-600 text-xs text-white bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Descripción */}
                    {desc && <p className="text-gray-400 text-2xs lg:text-2xs leading-relaxed text-justify">{desc}</p>}
                </div>

                {/* Botones de acción múltiples */}
                {finalLinks.length > 0 && (
                    <div className="pt-2">
                        <div className="flex flex-wrap gap-3">
                            {finalLinks.map((linkItem, index) => (
                                <a
                                    key={index}
                                    href={linkItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-white text-white text-sm font-medium rounded transition hover:bg-white hover:text-black"
                                >
                                    {getLinkIcon(linkItem.type)}
                                    {linkItem.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project_card
