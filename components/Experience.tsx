import React from 'react';
import type { WorkExperience } from '../types';
import { CheckCircleIcon } from './Icons';

interface ExperienceProps {
  experiences: WorkExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Work Experience</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-slate-700 h-full border" style={{ left: '50%' }}></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 !== 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-sky-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">{experiences.length - index}</h1>
              </div>
              <div className="order-1 bg-slate-800 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:shadow-sky-500/20 transition-shadow duration-300">
                <p className="text-sm font-semibold text-sky-400">{exp.period}</p>
                <h3 className="mb-1 font-bold text-white text-xl">{exp.role}</h3>
                <p className="text-md font-semibold text-slate-300 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;