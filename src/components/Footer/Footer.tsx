import React from 'react';
import { Logo } from '../common/Logo';
import { SocialLinks } from './SocialLinks';
import { FooterLinks } from './FooterLinks';
import { Newsletter } from './Newsletter';

export function Footer() {
  return (
    <footer className="relative bg-[#040d21] pt-24 pb-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-gray-400 leading-relaxed">
              Start your cloud journey with expert-led training and
              certification support. Join our community of successful cloud
              professionals.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/why"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VakdAHIFHWq60yHA1Q0s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/yatricloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Telegram Group
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/yatricloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <Newsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Yatri Cloud. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
