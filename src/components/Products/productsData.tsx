import React from 'react';
import { productIcons } from './icons';

export const products = [
  {
    title: 'Blog Yatri',
    description: 'Stay updated with the latest insights and tutorials in cloud computing and DevOps.',
    url: 'https://blog.yatricloud.com',
    icon: <productIcons.BlogYatri className="w-full h-full" />,
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Dev Yatri',
    description: 'Your gateway to professional development resources and coding excellence.',
    url: 'https://dev.yatricloud.com',
    icon: <productIcons.DevYatri className="w-full h-full" />,
    gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
  },
  {
    title: 'LinkedIn Yatri',
    description: 'Connect with professionals and expand your network in the tech industry.',
    url: 'https://linkedin.yatricloud.com',
    icon: <productIcons.LinkedInYatri className="w-full h-full" />,
    gradient: 'bg-gradient-to-br from-sky-500/10 to-indigo-500/10'
  },
  {
    title: 'Reactjs Yatri',
    description: 'Master React.js with our comprehensive tutorials and resources.',
    url: 'https://reactjs.yatricloud.com',
    icon: <productIcons.ReactjsYatri className="w-full h-full" />,
    gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
  },
  {
    title: 'Nginx Yatri',
    description: 'Learn and implement Nginx configurations with expert guidance.',
    url: 'https://nginx.yatricloud.com',
    icon: <productIcons.NginxYatri className="w-full h-full" />,
    gradient: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10'
  },
  {
    title: 'Apache Yatri',
    description: 'Master Apache web server setup and configuration.',
    url: 'https://apache.yatricloud.com',
    icon: <productIcons.ApacheYatri className="w-full h-full" />,
    gradient: 'bg-gradient-to-br from-red-500/10 to-orange-500/10'
  }
];