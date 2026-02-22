'use client'

import { Button } from "@/components/ui/Button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-neutral-950 pb-12">
            {/* Hero Banner */}
            <div className="relative w-full h-72 overflow-hidden">
                <Image
                    src="/get-in-touch.jpg"
                    alt="Get in Touch with Workhorse Trucking"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16 space-y-3">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Ready to start your project? Contact Workhorse Trucking for a quote or to discuss your hauling needs.
                    </p>
                </div>
            </div>

            <div className="container-custom max-w-5xl pt-12">

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-dark p-8 rounded-2xl border border-white/10 space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <p className="text-gray-400 mt-1">
                                        <a href="tel:+19072030517" className="hover:text-brand-red transition-colors">(907) 203-0517</a>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">Mon-Fri, 8am - 6pm AKST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p className="text-gray-400 mt-1">
                                        <a href="mailto:workhorsetrucking1267@gmail.com" className="hover:text-brand-red transition-colors">workhorsetrucking1267@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-red/10 p-3 rounded-lg text-brand-red">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Office</h4>
                                    <p className="text-gray-400 mt-1">
                                        Anchorage, Alaska<br />
                                        Serving Statewide & ALCAN Corridor
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder or Additional Info */}
                        <div className="bg-neutral-900 rounded-2xl h-64 w-full flex items-center justify-center border border-white/5">
                            <p className="text-gray-600">Map Integration would go here</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-dark p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault()
                            const form = e.target as HTMLFormElement
                            const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value
                            const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value
                            const email = (form.elements.namedItem('email') as HTMLInputElement).value
                            const service = (form.elements.namedItem('service') as HTMLSelectElement).value
                            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

                            const subject = `Workhorse Trucking Inquiry: ${service} - ${firstName} ${lastName}`
                            const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`

                            window.location.href = `mailto:workhorsetrucking1267@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                        }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Needed</label>
                                <select
                                    id="service"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                                >
                                    <option value="">Select a Service</option>
                                    <option value="Material Hauling">Material Hauling</option>
                                    <option value="Snow Removal">Snow Removal</option>
                                    <option value="Hazardous Material">Hazardous Material</option>
                                    <option value="Equipment Hauling">Equipment Hauling</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
