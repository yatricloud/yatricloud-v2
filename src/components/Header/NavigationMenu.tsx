import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavSection } from './navigationData';
import { DropdownMenu } from './DropdownMenu';
import { WhyDropdown } from './WhyDropdown';
import { ProductsDropdown } from './ProductsDropdown';

interface NavigationMenuProps {
  items: NavSection[];
  onNavigate: (page: string) => void;
}

export function NavigationMenu({ items, onNavigate }: NavigationMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (href: string, section: NavSection) => {
    const page = href.replace('/', '') || 'home';
    onNavigate(page);
    // Only close dropdown if it's not a section with both click and dropdown behavior
    if (!section.hasDropdown) {
      setOpenDropdown(null);
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {items.map((section, index) => (
        <div 
          key={index} 
          className="relative group"
          onMouseEnter={() => setOpenDropdown(section.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => {
              if (section.items?.length === 1) {
                handleNavClick(section.items[0].href, section);
              }
            }}
            className="flex items-center text-white/70 hover:text-white py-2 transition-colors relative"
          >
            <span>{section.label}</span>
            {section.items && section.items.length > 1 && (
              <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            )}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>

          {openDropdown === section.label && section.items && (
            <>
              {section.label === 'Why' && (
                <WhyDropdown 
                  items={section.items} 
                  onNavigate={(href) => handleNavClick(href, section)}
                />
              )}
              {section.label === 'Products' && section.hasDropdown && (
                <ProductsDropdown 
                  onNavigate={(href) => handleNavClick(href, section)}
                />
              )}
              {section.items.length > 1 && section.label !== 'Why' && !section.hasDropdown && (
                <DropdownMenu items={section.items} />
              )}
            </>
          )}
        </div>
      ))}
    </nav>
  );
}