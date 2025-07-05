import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AnimatedSection from './components/AnimatedSection';

import type { Skill, WorkExperience, EducationItem } from './types';

const skillsData: Skill[] = [
  { name: 'Communication', description: 'Deals with internal and external customers/Suppliers at all levels via telephone and e-mail to ensure successful communication trough actively listening and thoughtful questions.' },
  { name: 'Problem Solving', description: 'Resolves in depth queries in a methodical manner independently and with internal and external business partners to find appropriate resolutions and efficiencies.' },
  { name: 'Team Player', description: 'Enjoys sharing knowledge and encouraging development of others to achieve specific team goals.' },
  { name: 'Planning & Organizing', description: 'Refined planning and organizational skills that balance work, team support and ad-hoc responsibilities in a timely and professional manner.' },
  { name: 'Systems Knowledge', description: 'Proficient in Sage Evolution & SAP. Experienced in preparing and analysing customer and suppliers orders accurately and to time scales.' }
];

const experienceData: WorkExperience[] = [
    {
        role: 'Customer Service',
        company: 'Mabati Rolling Mills Limited',
        period: 'September 2018 – To date',
        responsibilities: [
            'Logging in customers’ order accurately in SAP for production.',
            'Giving and updating customers on feedback of ready verses pending material daily.',
            'Ensuring correct loading slips are given to dispatch office within ten minutes.',
            'Maintain nil orders in the system at the end of every month.',
            'Maintain an ageing of 30 days on customers’ complaints.',
            'Ensuring no pending orders for customers of more than 10 days.',
            'Working towards meeting the monthly customer target for the region allocated.'
        ]
    },
    {
        role: 'Operations Manager',
        company: 'Ouru Superstores Ltd',
        period: '2016 – April 2018',
        responsibilities: [
            'Utilized Sage VIP for HR processes including new hires, transfers, and terminations.',
            'Researched and resolved employee issues regarding payroll and benefits.',
            'Supervised, coached and counselled a staff of over 50.',
            'Coordinated all orientation sessions for new hires.',
            'Documented and reported stolen items to the General Manager.',
            'Coordinated daily operations and resolved customer complaints with a calm and fair approach.',
            'Maintained balanced safes and managed equipment maintenance checks.'
        ]
    },
    {
        role: 'Procurement Officer',
        company: 'Ouru Superstores Ltd',
        period: '2011 – 2016',
        responsibilities: [
            'Supported management by restocking merchandise and maintaining excellent customer service.',
            'Coordinated Procurement and Inventory Departments.',
            'Maintained reorder levels and ensured new products were entered into the system.',
            'Reconciled supplier accounts and balanced inventory for both branches.',
            'Assisted customers with locating merchandise and ordering out-of-stock items.',
            'Supervised Store Keepers and filed Supplier Delivery Notes.'
        ]
    },
    {
        role: 'Receptionist/Secretary',
        company: 'Ouru Superstores Ltd',
        period: 'June 2007 – Feb 2011',
        responsibilities: [
            'Answered telephones, screened calls, and provided information to callers.',
            'Dealt with queries from the public and customers.',
            'Monitored visitor access and maintained security awareness.',
            'Provided general administration, clerical support, and sorted mail.',
            'Monitored, maintained, and controlled inventory for office equipment and reception area.',
            'Scheduled and maintained appointment diaries.'
        ]
    }
];

const educationData: EducationItem[] = [
    { degree: 'Diploma in Business Management', institution: 'University of Nairobi' },
    { degree: 'Diploma in Secretarial Studies', institution: 'Phillips Business Training College' }
];


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection>
            <About skills={skillsData} />
        </AnimatedSection>
        <AnimatedSection>
            <Experience experiences={experienceData} />
        </AnimatedSection>
        <AnimatedSection>
            <Education educationItems={educationData} />
        </AnimatedSection>
        <AnimatedSection>
            <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;