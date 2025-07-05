import React from 'react';
import type { Testimonial } from '../types';
import { QuoteIcon } from './Icons';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">What Colleagues Say</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-slate-400 mb-16">
          Feedback from managers and team members I've had the pleasure to work with.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-lg shadow-lg flex flex-col">
              <QuoteIcon className="h-10 w-10 text-sky-400/50 mb-4" />
              <p className="text-slate-300 italic flex-grow">"{item.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;