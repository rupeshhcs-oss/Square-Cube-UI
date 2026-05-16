'use client'

import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <span className="text-primary-900 font-bold text-lg">S&C</span>
              </div>
              <span className="font-bold text-lg">Square & Cube</span>
            </div>
            <p className="text-primary-200 text-sm mb-4">
              Premium construction consultancy and project management for 15+ years.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/squareandcube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/squareandcube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/squareandcube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/squareandcube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-200 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-200 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Project Management
              </li>
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Consultancy
              </li>
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Interior Design
              </li>
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Site Supervision
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors">
                <FiPhone size={18} />
                <span>+91 9999 999999</span>
              </a>
              <a href="mailto:info@squareandcube.in" className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors">
                <FiMail size={18} />
                <span>info@squareandcube.in</span>
              </a>
              <div className="flex items-start gap-3 text-primary-200">
                <FiMapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Noida, Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-300 text-sm">
            <p>&copy; {currentYear} Square and Cube. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
