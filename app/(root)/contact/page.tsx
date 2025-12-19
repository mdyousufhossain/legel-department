"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowRight, Clock } from "lucide-react";

// --- Animations ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- Components ---

const ContactHero = () => (
  <section className="relative py-32 bg-slate-900 overflow-hidden">
    <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer} 
        className="max-w-4xl"
      >
        <motion.span variants={fadeInUp} className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">
          Get in Touch
        </motion.span>
        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
          Lets discuss your <br /> <span className="text-amber-500">objectives.</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-2xl font-light">
          Whether you require immediate legal intervention or long-term strategic counsel, our team is ready to mobilize.
        </motion.p>
      </motion.div>
    </div>
  </section>
);


 // Corporate address: Raisa Tower, 60 Feet Road. Mirpur 2,Dhaka- 1216

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Registered Office",
      lines: ["89/1, New West Monipur", "Mirpur-2, Dhaka-1216"],
      action: "Get Directions",
      link: "https://maps.google.com/?q=89/1+New+West+Monipur+Mirpur+2+Dhaka"
    },
    {
      icon: MapPin,
      title: "Corporate Office",
      lines: ["Raisa Tower, 60 Feet Road", "Mirpur 2, Dhaka-1216"],
      action: "Get Directions",
      link: "https://maps.google.com/?q=Raisa+Tower,+60+Feet+Road,+Mirpur+2,+Dhaka-1216"
    },
    { 
      icon: Phone,
      title: "Phone Support",
      lines: ["+88 01712-218542"],
      action: "Call Now",
      link: "tel:+8801712218542"
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      lines: ["aviationskyspace@gmail.com"], // Added a professional fallback if needed
      action: "Send Message",
      link: "mailto:aviationskyspace@gmail.com"
     },
    // {
    //   icon: Globe,
    //   title: "Online",
    //   lines: ["www.skyspaceaviation.com"],
    //   action: "Visit Site",
    //   link: "https://www.skyspaceaviation.com"
    // }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {contactDetails.map((item, idx) => (
        <motion.div 
          key={idx}
          variants={fadeInUp}
          className="bg-white p-8 border border-slate-200 hover:border-amber-500/50 hover:shadow-lg transition-all group"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <div className="space-y-1 mb-6">
                {item.lines.map((line, lIdx) => (
                  <p key={lIdx} className="text-slate-600">{line}</p>
                ))}
              </div>
              <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors">
                {item.action} <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ContactForm = () => (
  <motion.div 
    variants={fadeInUp}
    className="bg-slate-50 p-8 md:p-12 border border-slate-200"
  >
    <div className="mb-8">
      <h3 className="font-serif text-3xl text-slate-900 mb-2">Send us a Message</h3>
      <p className="text-slate-500">Please provide details about your inquiry. All communications are privileged and confidential.</p>
    </div>

    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-700">Full Name</label>
          <input type="text" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-700">Email Address</label>
          <input type="email" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@company.com" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-700">Phone Number</label>
          <input type="tel" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="+880..." />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-700">Subject</label>
          <select className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-slate-600">
            <option>General Inquiry</option>
            <option>Aviation Consultancy</option>
            <option>Corporate Legal Support</option>
            <option>Partnership Proposal</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-700">Message</label>
        <textarea rows={5} className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="How can we assist you?" />
      </div>

      <button className="bg-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-amber-600 transition-colors w-full md:w-auto">
        Submit Inquiry
      </button>
    </form>
  </motion.div>
);

// const MapPlaceholder = () => (
//   <div className="h-[400px] w-full bg-slate-200 relative overflow-hidden grayscale">
//     {/* NOTE: In a real production app, replace this with a Google Maps Embed Iframe.
//       Since we cannot use API keys here, we use a static image representation.
//     */}
//     <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
//         <div className="text-center">
//             <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
//             <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Interactive Map Loading...</p>
//             <p className="text-slate-400 text-xs mt-2">Mirpur-2, Dhaka-1216</p>
//         </div>
//     </div>
//     {/* Optional: Overlay simulating map texture if you have a map image */}
//   </div>
// );

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Details */}
            <motion.div 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true }}
               variants={staggerContainer}
               className="lg:col-span-5"
            >
              <ContactInfo />
              
              <div className="bg-slate-900 p-8 text-white rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                    <Clock className="text-amber-500" />
                    <h4 className="font-serif text-xl">Business Hours</h4>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span>Sunday - Thursday</span>
                        <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between pt-2 text-slate-500">
                        <span>Friday</span>
                        <span>Closed</span>
                    </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            {/* <div className="lg:col-span-7">
              <ContactForm />
            </div> */}

          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="border-t border-slate-200">
        <MapPlaceholder />
      </section> */}

    </main>
  );
}