import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-gray-400 border-t border-white/5 pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand — spans 2 cols for visual weight */}
                <div className="space-y-4 md:col-span-2">
                    <Link href="/" className="flex items-center gap-0">
                        <div className="relative h-8 w-11">
                            <Image
                                src="/new-workhorse-logo.png"
                                alt="Workhorse Trucking Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight uppercase text-white">Workhorse <span className="text-brand-red">Trucking</span></span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        "Pulling Just One More Mile."<br />
                        Dependable hauling and construction support services throughout Alaska and beyond.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#why-us" className="hover:text-white transition-colors">Why Workhorse</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-brand-red shrink-0" />
                            <span>Serving Alaska & The US<br />Based in Anchorage, AK</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-brand-red shrink-0" />
                            <a href="tel:+19072030517" className="hover:text-white transition-colors">(907) 203-0517</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-brand-red shrink-0" />
                            <a href="mailto:workhorsetrucking1267@gmail.com" className="hover:text-white transition-colors">workhorsetrucking1267@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>&copy; {new Date().getFullYear()} Workhorse Trucking LLC. All rights reserved.</p>
                <div className="flex gap-4">
                    <span>Veteran Owned & Certified</span>
                    <span>Safety First</span>
                </div>
            </div>
        </footer>
    )
}
