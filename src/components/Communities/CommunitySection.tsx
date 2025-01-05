import React from 'react';
import { Users } from 'lucide-react';
import { WhatsAppChannel } from './WhatsAppChannel';
import { CommunityGrid } from './CommunityGrid';
import { TelegramCard } from './TelegramCard';

export function CommunitySection() {
  return (
    <section className="relative bg-[#040d21] py-24 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent"
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Main Content */}
        <div className="space-y-12">
          {/* WhatsApp Channel */}
          <WhatsAppChannel />

          {/* WhatsApp Groups Grid */}
          <CommunityGrid />

          {/* Telegram Card */}
          <TelegramCard />
        </div>
      </div>
    </section>
  );
}
