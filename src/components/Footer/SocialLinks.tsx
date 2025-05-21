import React from 'react';
import { Youtube, Linkedin, MessageSquare, Send, Github, Twitter, Instagram, MessageCircle } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@yatricloud?sub_confirmation=1&sub_confirmation=1', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/yatricloud', label: 'LinkedIn' },
    { icon: MessageSquare, href: 'https://whatsapp.com/channel/0029VakdAHIFHWq60yHA1Q0s', label: 'WhatsApp' },
    { icon: Twitter, href: 'https://twitter.com/yatricloud', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/yatricloud', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://discord.com/invite/92warrKq9j', label: 'Discord' },
    { icon: Github, href: 'https://github.com/yatricloud', label: 'GitHub' }
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 
            hover:border-sky-500/50 transition-all duration-300 group"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </a>
      ))}
    </div>
  );
}