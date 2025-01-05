import React from 'react';
import { Send, Sparkles } from 'lucide-react';

const features = [
  'Real-time updates and announcements',
  'Exclusive learning resources',
  'Direct interaction with mentors',
  'Job opportunities and referrals',
  'Technical discussions and support',
];

export function TelegramCard() {
  return (
    <div
      className="relative p-8 rounded-xl backdrop-blur-sm border border-white/10 
      hover:border-sky-500/50 transition-all duration-300"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/10 to-[#29b6f6]/10 
        rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Send className="w-8 h-8 text-[#0088cc] mr-3" />
            <h3 className="text-2xl font-semibold text-white">
              Telegram Community
            </h3>
          </div>
          <div className="px-3 py-1 rounded-full text-sm bg-[#0088cc]/10 text-[#0088cc] border border-[#0088cc]/20">
            Free Resources
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400">
              Join our Telegram community for exclusive content, real-time
              updates, and direct interaction with mentors.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#0088cc] mr-2 animate-pulse" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/yatricloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#0088cc] hover:bg-[#0088cc]/90 
                text-white font-medium transition-all duration-200 hover:scale-[1.02]"
            >
              <Send className="w-5 h-5 mr-2" />
              Join Community
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
            <img
              src="https://wallpapers.com/images/high/telegram-clouds-with-word-xh3106kz7obew1vv.webp"
              alt="Yatri Cloud Telegram Community"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
