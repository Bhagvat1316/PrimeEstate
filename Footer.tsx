import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Building2 className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Prime<span className="text-amber-500">Estate</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              Your trusted partner in finding the perfect property in Gujarat. We specialize in premium residential and commercial real estate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-amber-500 transition-colors">Properties</Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-amber-500 transition-colors">Our Agents</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/properties?type=Apartment" className="hover:text-amber-500 transition-colors">Apartments</Link>
              </li>
              <li>
                <Link href="/properties?type=Villa" className="hover:text-amber-500 transition-colors">Luxury Villas</Link>
              </li>
              <li>
                <Link href="/properties?type=Commercial" className="hover:text-amber-500 transition-colors">Commercial Spaces</Link>
              </li>
              <li>
                <Link href="/properties?type=Land" className="hover:text-amber-500 transition-colors">Land & Plots</Link>
              </li>
              <li>
                <Link href="/properties?status=Rent" className="hover:text-amber-500 transition-colors">Rental Properties</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-1" />
                <span>101, Prime Tower, SG Highway,<br />Ahmedabad, Gujarat 380054</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <span>info@primeestate.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} PrimeEstate Realty. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
