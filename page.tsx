'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Search, ShieldCheck, Home as HomeIcon, DollarSign, Users, ArrowRight } from 'lucide-react';
import { properties, testimonials } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';

export default function HomePage() {
  const featuredProperties = properties.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero-real-estate/1920/1080"
            alt="Luxury Home"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-6 tracking-tight"
          >
            Find Your <span className="text-amber-500">Dream Property</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto"
          >
            Discover premium residential and commercial properties in Ahmedabad, Anand, and Vadodara.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-2 rounded-lg md:rounded-full shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2"
          >
            <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</label>
              <input type="text" placeholder="City, Area or Landmark" className="w-full outline-none text-slate-900 font-medium bg-transparent" />
            </div>
            <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Property Type</label>
              <select className="w-full outline-none text-slate-900 font-medium bg-transparent appearance-none cursor-pointer">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="flex-1 px-4 py-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Price Range</label>
              <select className="w-full outline-none text-slate-900 font-medium bg-transparent appearance-none cursor-pointer">
                <option>Any Price</option>
                <option>Under ₹50 Lacs</option>
                <option>₹50 Lacs - ₹1 Cr</option>
                <option>Above ₹1 Cr</option>
              </select>
            </div>
            <button className="bg-amber-500 text-slate-900 px-8 py-4 rounded-md md:rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 mt-2 md:mt-0">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Why Choose PrimeEstate</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide a seamless and transparent real estate experience, ensuring you find exactly what you&apos;re looking for.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Trusted Agency', desc: 'Over 15 years of excellence in Gujarat real estate.' },
              { icon: HomeIcon, title: 'Verified Listings', desc: 'Every property is thoroughly checked and verified.' },
              { icon: DollarSign, title: 'Best Price', desc: 'We negotiate the best deals for our clients.' },
              { icon: Users, title: 'Expert Agents', desc: 'Professional team with deep local market knowledge.' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/about-office/800/1000"
                alt="PrimeEstate Office"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/20" />
              <div className="absolute bottom-6 left-6 bg-white text-slate-900 p-6 rounded-xl max-w-xs">
                <p className="text-3xl font-bold text-amber-500 mb-1">15+</p>
                <p className="font-semibold">Years of Experience in Real Estate</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Leading Real Estate Agency in Gujarat</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                PrimeEstate Realty is dedicated to providing top-tier real estate services across Ahmedabad, Anand, and Vadodara. Whether you are looking to buy a luxury villa, rent a modern apartment, or invest in commercial space, our expert team is here to guide you every step of the way.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We pride ourselves on our integrity, market knowledge, and commitment to client satisfaction. Discover the difference of working with true professionals.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors">
                Read More About Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Explore Categories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Find properties tailored to your specific needs and lifestyle.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Apartment', img: 'https://picsum.photos/seed/cat-apt/400/400' },
              { name: 'Villa', img: 'https://picsum.photos/seed/cat-villa/400/400' },
              { name: 'Commercial', img: 'https://picsum.photos/seed/cat-comm/400/400' },
              { name: 'Land', img: 'https://picsum.photos/seed/cat-land/400/400' },
              { name: 'Rental', img: 'https://picsum.photos/seed/cat-rent/400/400' }
            ].map((cat, idx) => (
              <Link key={idx} href={`/properties?type=${cat.name}`} className="group relative h-48 rounded-xl overflow-hidden block">
                <Image src={cat.img} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-xl tracking-wide">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">Featured Properties</h2>
              <p className="text-slate-600 max-w-2xl">Handpicked exclusive properties for you.</p>
            </div>
            <Link href="/properties" className="hidden md:inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-500 transition-colors">
              View All <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link href="/properties" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-500 transition-colors">
              View All Properties <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Read testimonials from our satisfied customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="text-amber-500 mb-6">
                  <svg className="h-10 w-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-8 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-6">Ready to Find Your Next Property?</h2>
          <p className="text-slate-800 text-lg mb-10 max-w-2xl mx-auto">
            Contact our expert agents today and let us help you navigate the real estate market with confidence.
          </p>
          <Link href="/contact" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
