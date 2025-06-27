import Link from "next/link";
import {FaCheck } from "react-icons/fa6"; // Location Icon
import { FaTwitter,FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"; // Social Icons

const footerLinks = [
  { name: "Quienes somos", href: "/about" },
  { name: "Contacto", href: "/contact" },
  { name: "Terminos", href: "/#" },
  { name: "Privacidad", href: "/#" },
];

const socialLinks = [
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaYoutube, href: "https://discord.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
  { icon: FaTiktok, href: "https://tiktok.com" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-4 px-4">
        {/* First Row: Location & Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaCheck className="text-lg text-gray-600" />
            <span className="font-extrabold font-round text-2xl sm:text-xl">CHEQUEA TU VOTO</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-4 flex-wrap justify-center sm:justify-end">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-gray-700 hover:text-black">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Second Row: Copyright & Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full border-t border-gray-300 pt-4">
          {/* Copyright */}
          <div className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Presente Bolivia. Derechos reservados.
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 mt-2">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <Link key={idx} href={href} target="_blank" rel="noopener noreferrer">
                <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                  <Icon className="text-gray-700 text-lg" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
