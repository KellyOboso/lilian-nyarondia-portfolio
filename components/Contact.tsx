import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './Icons';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/manjznwb', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('Sorry, there was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-slate-400 mb-16">
          I'm always open to discussing new opportunities and challenges. Please feel free to reach out to me directly or by using the form below.
        </p>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
             <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-4 rounded-full">
                    <MailIcon className="h-8 w-8 text-sky-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Email</h3>
                    <p className="text-slate-400">Directly at my inbox</p>
                    <a href="mailto:Lilyann80@gmail.com" className="text-sky-400 hover:text-sky-300 transition-colors">Lilyann80@gmail.com</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-4 rounded-full">
                    <PhoneIcon className="h-8 w-8 text-sky-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Phone</h3>
                    <p className="text-slate-400">Give me a call</p>
                    <a href="tel:0726686213" className="text-sky-400 hover:text-sky-300 transition-colors">0726 686 213</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-4 rounded-full">
                    <LocationMarkerIcon className="h-8 w-8 text-sky-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Location</h3>
                    <p className="text-slate-400">Postal Address</p>
                    <p className="text-sky-400">P O Box 1, KISII</p>
                </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            {submitted ? (
              <div className="bg-slate-800 p-8 rounded-lg h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                <p className="text-slate-400">Your message has been received. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea name="message" id="message" rows={5} required value={formState.message} onChange={handleChange} className="w-full bg-slate-700/50 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={submitting} className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 disabled:bg-sky-800 disabled:cursor-not-allowed">
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
