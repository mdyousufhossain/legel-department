import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <span className="font-serif text-2xl font-bold text-white tracking-wide block">
              Sky Space Aviation<span className="text-amber-500">.</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-500">
              Defining the standard of legal excellence since 1985. We are dedicated to the defense of your legacy and the protection of your future.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                <a href="tel:+8801712218542" title="Call us">
                  <Phone size={18} />
                </a>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                <a href="mailto:aviationskyspace@gmail.com" title="Email us">
                  <Mail size={18} />
                </a>
              </div>
              {/* </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Mail size={18} /></div> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Firm Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About the Firm</Link></li>
              <li><Link href="/practice-areas" className="hover:text-amber-500 transition-colors">Practice Areas</Link></li>
              <li><Link href="/attorneys" className="hover:text-amber-500 transition-colors">Attorneys</Link></li>
              <li><Link href="/clients" className="hover:text-amber-500 transition-colors">Clients</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* corporate-foreign-direct-investments
          transport-cargo-dispute-resolutions */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-amber-500 transition-colors"> 
                <Link href="/practice-areas/aviation-maritime">Aviation & Maritime</Link>
               </li>
              <li className="hover:text-amber-500 transition-colors">
                <Link href="/practice-areas/airlines-passenger-dispute-resolutions">Airlines Resolutions</Link>
                </li>
              <li className="hover:text-amber-500 transition-colors">
                <Link href="/practice-areas/taxation-vat">    
                Taxation & VAT
                </Link>
              </li>
              <li className="hover:text-amber-500 transition-colors">
                <Link href="/practice-areas/corporate-foreign-direct-investments">Corporate Investments</Link>
              </li>
              <li className="hover:text-amber-500 transition-colors">
                <Link href="/practice-areas/transport-cargo-dispute-resolutions">Transport Resolutions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Headquarters</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-amber-600 shrink-0" size={20} />
                <span>
                  89/1,New West Monipur < br /> 
                  Mirpur-2, Dhaka-1216
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-amber-600 shrink-0" size={20} />
                <Link href="tel:+8801712218542">+8801712218542</Link>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-amber-600 shrink-0" size={20} />
                <Link href="mailto:aviationskyspace@gmail.com">aviationskyspace@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2025 Sky Space Aviation & Legal Firm. Attorney Advertising. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/term-conditions" className="hover:text-slate-400 transition-colors">Terms of Engagement</Link>
            {/* <Link href="#" className="hover:text-slate-400 transition-colors">Accessibility</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;