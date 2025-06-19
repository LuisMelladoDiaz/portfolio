"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

const Contact = () => {
    const [copiedItem, setCopiedItem] = useState<string | null>(null)

    const email = "melladodiazluis@gmail.com"
    const phone = "+34 684 26 62 32"

    const copyToClipboard = async (text: string, type: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedItem(type)
            setTimeout(() => setCopiedItem(null), 2000)
        } catch (err) {
            console.error("Failed to copy: ", err)
        }
    }

    return (
        <div className="px-4 md:px-18 mb-6 md:mb-10 mt-8 md:mt-15">
            <div className="flex items-center justify-center mb-8 md:mb-10">
                <span className="text-4xl md:text-8xl font-light leading-none tracking-tight text-center">
                    LETS <br /> WORK TOGETHER
                </span>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="text-sm md:text-md text-gray-400 mb-8 text-center">
                    <span className="uppercase">
                        I am always open to discussing new projects, creative ideas or opportunities to be part of your vision. The
                        easiest way to find me is a phone call or to leave an email.
                    </span>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
                    {/* Email */}
                    <button
                        onClick={() => copyToClipboard(email, "email")}
                        className="group flex items-center gap-3 px-4 md:px-6 py-3 text-gray-400 hover:text-white w-full md:w-auto justify-center"
                    >
                        <span>{email}</span>
                        {copiedItem === "email" ? (
                            <Check className="w-4 h-4 text-white" />
                        ) : (
                            <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                        )}
                    </button>

                    {/* Phone */}
                    <button
                        onClick={() => copyToClipboard(phone, "phone")}
                        className="group flex items-center gap-3 px-4 md:px-6 py-3 text-gray-400 hover:text-white w-full md:w-auto justify-center"
                    >
                        <span>{phone}</span>
                        {copiedItem === "phone" ? (
                            <Check className="w-4 h-4 text-white" />
                        ) : (
                            <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
