import React from 'react';
import type { Skill } from '../types';
import { BriefcaseIcon, LightBulbIcon, UsersIcon, CalendarIcon, CogIcon } from './Icons';

interface AboutProps {
  skills: Skill[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  'Communication': <BriefcaseIcon className="h-8 w-8 text-sky-400" />,
  'Problem Solving': <LightBulbIcon className="h-8 w-8 text-sky-400" />,
  'Team Player': <UsersIcon className="h-8 w-8 text-sky-400" />,
  'Planning & Organizing': <CalendarIcon className="h-8 w-8 text-sky-400" />,
  'Systems Knowledge': <CogIcon className="h-8 w-8 text-sky-400" />,
};

const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">About Me & Key Skills</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-slate-400 mb-16">
          A dedicated and versatile professional with over a decade of experience spanning reception, procurement, operations management, and customer service. I excel at fostering communication, solving complex problems, and contributing to team success through meticulous planning and organization.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300 flex items-start space-x-4">
              <div className="flex-shrink-0 bg-slate-800 p-3 rounded-full">
                {iconMap[skill.name] || <BriefcaseIcon className="h-8 w-8 text-sky-400" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-slate-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
