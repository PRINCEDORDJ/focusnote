import { Twitter, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import {Link as LinkScroll} from 'react-scroll'

  
const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h1 className="text-3xl font-bold pb-4 text-green-400">
              FocusNote
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Master your productivity. Focus on what matters. Achieve your
              goals.
            </p>
            <div className="flex gap-4">
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-lg p-2 hover:scale-110 transition-transform cursor-pointer">
                <Twitter color="white" size={20} />
              </div>
              <div className="bg-linear-to-br from-red-500 to-red-600 rounded-lg p-2 hover:scale-110 transition-transform cursor-pointer">
                <Youtube color="white" size={20} />
              </div>
              <div className="bg-linear-to-br from-blue-700 to-blue-800 rounded-lg p-2 hover:scale-110 transition-transform cursor-pointer">
                <Facebook color="white" size={20} />
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Product</h3>
            <ul className="space-y-2">
              <li>
                <LinkScroll
                  to="Features"
                  offset={-100}
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                >
                  Features
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="Benefit"
                  offset={-100}
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                >
                  Benefits
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="How it Works"
                  offset={-100}
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                >
                  How it Works
                </LinkScroll>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#press"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-400">(+233)593545726</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <a
                  href="mailto:princedordj@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  princedordj@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-green-400 mt-1" />
                <span className="text-gray-400">Ghana, West Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2025 FocusNote. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
