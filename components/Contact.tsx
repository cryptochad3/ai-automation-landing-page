import React, { useState } from 'react';
import { Mail, Phone, Calendar, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what you need';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms - Free form backend service
      // Sign up at https://web3forms.com to get your access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          name: formData.name,
          company: formData.company,
          email: formData.email,
          message: formData.message,
          subject: `New AI Automation Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Automate Your Workflow</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Schedule a free 15-minute discovery call. I'll show you real examples of what AI can automate for your specific business. No pressure, no commitment.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 mr-4">
                  <Mail className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href="mailto:contact@yourcompany.com" className="text-white hover:text-brand-400 transition-colors">contact@yourcompany.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 mr-4">
                  <Phone className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a href="tel:+15551234567" className="text-white hover:text-brand-400 transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-center">
                 <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 mr-4">
                  <Calendar className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Book a Call</p>
                  <a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-400 transition-colors underline decoration-slate-700 underline-offset-4">View Calendar Availability</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-brand-500 outline-none`} 
                    placeholder="John Doe" 
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-brand-500 outline-none" 
                    placeholder="Acme Inc" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-brand-500 outline-none`}
                  placeholder="john@example.com" 
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                  What are you looking to automate? <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={4} 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-brand-500 outline-none`}
                  placeholder="I have a folder of PDFs I need to search..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {submitStatus === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-lg p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  <p className="text-emerald-400 text-sm">Message sent! We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <p className="text-red-400 text-sm">Something went wrong. Please email us directly.</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Discovery Call'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ECT Automation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
