import React from 'react';
import type { EducationItem } from '../types';
import { AcademicCapIcon } from './Icons';

interface EducationProps {
  educationItems: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationItems }) => {
  return (
    <section id="education" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Education</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                 <div className="bg-slate-800 p-4 rounded-full">
                    <AcademicCapIcon className="h-10 w-10 text-sky-400" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-slate-400">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
