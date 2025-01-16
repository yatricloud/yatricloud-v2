import React from 'react';
import { Youtube, Play, Bell } from 'lucide-react';

export function YouTubeSubscribe() {
  return (
    <section className="relative bg-[#040d21] py-24 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-red-500/20 via-transparent to-transparent"
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-red-500/10 text-red-400 px-4 py-2 rounded-full mb-8 animate-pulse">
              <Youtube className="w-4 h-4 mr-2" />
              <span>Join Our YouTube Community</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow leading-tight">
              Learn Cloud & DevOps
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                With Yatri Cloud
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our channel for in-depth tutorials, tech insights,
              and expert guidance in cloud computing and DevOps practices.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://www.youtube.com/@yatricloud?sub_confirmation=1&sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 
                  hover:from-red-600 hover:to-red-700 text-white font-medium transition-all duration-200 
                  hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25"
              >
                <Youtube className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Subscribe Now
              </a>

              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-2 text-red-400" />
                  <span>50k+ Views</span>
                </div>
                <div className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-red-400" />
                  <span>Free Vouchers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 
              rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 
              group-hover:border-red-500/50 transition-all duration-300"
            >
              <img
                src="https://i.ibb.co/QrtTq3q/yatri-cloud-yt.jpg"
                alt="Yatri Cloud YouTube Channel"
                className="w-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Youtube className="w-8 h-8 text-red-500" />
                    <span className="ml-2 text-white font-medium"></span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Bell className="w-5 h-5 mr-2" />
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
