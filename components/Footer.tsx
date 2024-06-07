import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="dark bg-gray-900 text-gray-200 py-6">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm">© 2024 Abdelrhman Mohamed. All rights reserved.</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link target='_blank' href="https://www.linkedin.com/in/abdelrhman-mohamed-2bab9a213/" className="text-gray-400 hover:text-gray-100 transition-colors" prefetch={false}>
                        <FaLinkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link target='_blank' href="https://github.com/abdelrhman-mohamed-dev/" className="text-gray-400 hover:text-gray-100 transition-colors" prefetch={false}>
                        <FaGithub className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link target='_blank' href="https://api.whatsapp.com/send?phone=201014269976&text=hello%20Abdelrhman%2C%20I%20want%20some%20help%20with%20my%20project%20%F0%9F%91%8B" className="text-gray-400 hover:text-gray-100 transition-colors" prefetch={false}>
                        <FaWhatsapp className="h-6 w-6" />
                        <span className="sr-only">WhatsApp</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}


export default Footer
