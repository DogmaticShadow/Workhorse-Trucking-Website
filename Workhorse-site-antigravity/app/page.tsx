'use client'

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Truck, Shield, Clock, MapPin, ArrowRight, CheckCircle2, Snowflake, Tractor, HardHat, Shovel, Biohazard } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Absolute */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/trucks-foreground.png"
            alt="Workhorse Fleet"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 leading-tight">
              Your One Stop <br />
              <span className="">Hauling Partner</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
              Supporting construction and infrastructure projects with dependable hauling services.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 shadow-red-900/50 shadow-2xl">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="text-lg">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-black relative">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-brand-red text-sm font-bold tracking-widest uppercase">Company Profile</h2>
            <h3 className="text-4xl font-bold text-white leading-tight">
              "Pulling Just <span className="text-brand-red">One More Mile</span>"
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Established in 2016, Workhorse Trucking LLC has grown from a sole proprietorship into a full-scale transportation company.
              Using intimate industry knowledge, we provide elite services in rural and residential Alaska, working hand-in-hand with top construction companies across the US.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 w-full">
                <h4 className="font-bold text-white text-xl">2016</h4>
                <p className="text-sm text-gray-500">Established</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 w-full">
                <h4 className="font-bold text-white text-xl">Veteran</h4>
                <p className="text-sm text-gray-500">Owned Business</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src="/new-company-profile.jpg"
              alt="Workhorse Trucking Company Profile"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-neutral-900/50">
        {/* Services hero image banner */}
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src="/our-services.jpg"
            alt="Workhorse Trucking Services"
            fill
            className="object-cover opacity-60"
            style={{ objectPosition: 'center 59%' }}
          />
          {/* Subtle dim overlay so text stays readable */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Gradual fade to black at top — starts at h-64 */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black via-black/40 to-transparent" />
          {/* Gray fade at bottom — matches quarry top fade exactly, mirrored */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-800 via-neutral-800/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-3">
            <h2 className="text-brand-red text-sm font-bold tracking-widest uppercase">Our Services</h2>
            <h3 className="text-4xl font-bold text-white">Full Range of Trucking &amp; Hauling</h3>
            <p className="text-gray-300 max-w-2xl">
              We take pride in our ability to adapt to a wide range of project needs, from material hauling to snow removal.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Quarry texture background behind cards */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/quarry-background.jpeg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/85" />
            {/* Gradual fade from dark gray at top — thin transition */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-800 via-neutral-800/40 to-transparent" />
          </div>
          <div className="container-custom py-16 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              {[
                { title: "Material Hauling", icon: Truck, desc: "Dirt, gravel, sand, asphalt, and aggregate transport for construction." },
                { title: "Snow Hauling", icon: Snowflake, desc: "Relocation and removal ensuring operational roads and job sites." },
                { title: "Hazmat Transport", icon: Biohazard, desc: "Compliant hauling of approved hazardous materials with trained drivers." },
                { title: "Equipment Hauling", icon: Tractor, desc: "Safe transport of construction equipment and heavy machinery." },
                { title: "Construction Support", icon: HardHat, desc: "Project-based specialized solutions and time-sensitive deliveries." },
                { title: "Site Clearing", icon: Shovel, desc: "Comprehensive site preparation and debris removal services." },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 hover:border-brand-red/50 hover:bg-black/80 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <service.icon size={100} />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-brand-red/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <service.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24 bg-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent opacity-50" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Safety First Mindset", desc: "We operate with strict compliance to industry regulations and safety standards." },
                  { title: "Reliable Equipment", desc: "Well-maintained fleet ensuring consistent performance on every job." },
                  { title: "Experienced Operators", desc: "Committed to efficiency, accountability, and doing the job right." },
                  { title: "Broad Operational Scope", desc: "Serving Alaska, Canada and the Lower 48 with proven capability." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1">
                      <CheckCircle2 className="text-brand-red h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-brand-red text-sm font-bold tracking-widest uppercase">Why Choose Workhorse</h2>
              <h3 className="text-4xl font-bold text-white leading-tight">
                Reliability, Safety, and <br />Professionalism
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether supporting public infrastructure or private construction, we bring a strong work ethic and results-driven approach.
                When you choose Workhorse, you're choosing a partner that values integrity and stands behind its performance.
              </p>
              <Link href="/contact">
                <Button variant="default" size="lg" className="mt-4">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ready-to-get-moving.jpg"
            alt="Ready to get moving"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-red/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container-custom relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to get moving?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Contact us today to discuss your project needs and request a quote.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
