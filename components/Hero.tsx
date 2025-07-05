import React from 'react';
import { DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
          Lilian Nyarondia
        </h1>
        <p className="text-xl md:text-2xl text-sky-300 font-medium mb-8">
          Customer Service, Procurement & Operations Professional
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#experience"
            className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="/Lilian-Nyarondia-CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-slate-300 text-slate-300 font-bold py-3 px-8 rounded-full hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto"
          >
            <DownloadIcon className="h-5 w-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;