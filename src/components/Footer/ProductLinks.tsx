import React from 'react';
import { footerLinks } from './footerData';

export function ProductLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
      <ul className="space-y-3">
        {footerLinks[0].links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
            >
              {link.label}
              <svg 
                className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}