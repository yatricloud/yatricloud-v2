import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react';
import { PartnershipCard } from './PartnershipCard';

export function PartnershipSection() {
  const partnerships = [
    {
      title: "College & University Partners",
      description: "Join forces with Yatri Cloud to empower your students with industry-ready cloud computing and DevOps skills. Our comprehensive training programs are designed to bridge the gap between academia and industry requirements.",
      icon: GraduationCap,
      features: [
        "Customized curriculum aligned with industry needs",
        "Hands-on practical training sessions",
        "Industry expert mentorship",
        "Placement assistance for students"
      ]
    },
    {
      title: "Corporate Training",
      description: "Elevate your team's technical expertise with our specialized corporate training programs. We offer tailored solutions to meet your organization's specific requirements and growth objectives.",
      icon: Building2,
      features: [
        "Customized training modules",
        "Flexible scheduling options",
        "Real-world project experience",
        "Certification preparation"
      ]
    }
  ];

  return (
    <section className="relative bg-[#040d21] py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
            Be a Part of Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partner with us to create impactful learning experiences and drive technological excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => (
            <PartnershipCard key={index} {...partnership} />
          ))}
        </div>
      </div>
    </section>
  );
}