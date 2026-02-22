'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Truck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' }, // Using anchors for single page feel as verified in plan
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'glass-dark py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-0 group">
                    <div className="relative h-10 w-14 group-hover:scale-105 transition-transform">
                        <Image
                            src="/new-workhorse-logo.png"
                            alt="Workhorse Trucking Logo"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight uppercase", scrolled ? "text-white" : "text-white")}>
                        Workhorse <span className="text-brand-red">Trucking</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button variant="default" className="ml-4 font-bold">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-brand-red transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-2">Get Started</Button>
                </div>
            )}
        </nav>
    )
}
