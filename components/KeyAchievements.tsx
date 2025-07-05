import React from 'react';
import type { Achievement } from '../types';

interface KeyAchievementsProps {
  achievements: Achievement[];
}

const KeyAchievements: React.FC<KeyAchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Key Achievements</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-slate-400 mb-16">
          Highlighting key projects where my skills delivered tangible results and improvements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="flex-shrink-0 bg-slate-800 p-4 rounded-full self-start mb-4">
                  {item.icon}
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 mb-4">{item.description}</p>
                </div>
                <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <span key={tag} className="bg-sky-500/10 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                        </span>
                    ))}
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;