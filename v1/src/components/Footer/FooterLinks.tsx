import React from 'react';
import { footerLinks } from './footerData';

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h4 className="text-white font-medium mb-4">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}