import React from 'react';
import { Briefcase } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';
import { companies } from './companyData';

export function CompaniesSection() {
  return (
    <section className="relative bg-[#0d1117] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            <span>Our Success Stories</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 text-glow">
            Our Students Work At
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our alumni network working at leading technology companies
            worldwide
          </p>
        </div>

        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d1117] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d1117] to-transparent z-10" />

          {/* Scrolling logos container */}
          <div className="flex space-x-12 items-center justify-center">
            {companies.map((company) => (
              <CompanyLogo key={company.name} {...company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
