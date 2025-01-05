import React from 'react';
import { Rocket, Beaker } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { LabCard } from './components/LabCard';
import { projects, microsoftLabs } from './data/projectsData';

export function HandsOnProjectsPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            <span>Hands-on Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
            Learn by Building
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400">
              Real-World Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get hands-on experience with guided projects and Microsoft Applied Skills labs
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => console.log(`Selected project: ${project.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Microsoft Labs Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Microsoft Applied Skills</h2>
            <div className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-400 
              border border-purple-500/20 flex items-center">
              <Beaker className="w-4 h-4 mr-2" />
              Official Labs
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {microsoftLabs.map((lab) => (
              <LabCard
                key={lab.id}
                lab={lab}
                onClick={() => console.log(`Selected lab: ${lab.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}