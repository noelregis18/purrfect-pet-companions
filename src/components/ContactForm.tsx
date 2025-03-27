
import { useState, useEffect } from 'react';
import { createScrollObserver } from '@/lib/animations';
import { MessageSquare, Send } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    petType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = createScrollObserver();
    return () => observer?.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        petType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="scroll-reveal">
          <div className="inline-block bg-pet-blue/10 text-pet-blue px-3 py-1 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="section-title">Let's Talk About Your Pet</h2>
          <p className="text-lg text-pet-slate mb-8">
            Have questions about our services or want to schedule a consultation? We're here to help provide the best care for your furry family members.
          </p>
          
          <div className="glass-card p-6 rounded-xl mb-8 flex items-start">
            <MessageSquare className="text-pet-blue h-6 w-6 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-pet-dark-blue mb-1">Customer Support</h3>
              <p className="text-pet-slate">Our team is available to answer your questions from 8am to 8pm, 7 days a week.</p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-pet-light-blue flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-pet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-pet-slate">Email us at</p>
                <a href="mailto:hello@purrfectcare.com" className="text-pet-dark-blue font-medium hover:text-pet-blue transition-colors">
                  hello@purrfectcare.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-pet-light-blue flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-pet-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-pet-slate">Call us at</p>
                <a href="tel:+1234567890" className="text-pet-dark-blue font-medium hover:text-pet-blue transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 border border-pet-slate/10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-800 rounded-full p-3 inline-flex mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-pet-dark-blue mb-2">Message Sent!</h3>
                <p className="text-pet-slate">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-pet-dark-blue mb-6">Send us a message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pet-dark-slate mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-pet-slate/20 focus:outline-none focus:ring-2 focus:ring-pet-blue/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pet-dark-slate mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-pet-slate/20 focus:outline-none focus:ring-2 focus:ring-pet-blue/30 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="petType" className="block text-sm font-medium text-pet-dark-slate mb-1">Pet Type</label>
                    <select
                      id="petType"
                      name="petType"
                      value={formState.petType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-pet-slate/20 focus:outline-none focus:ring-2 focus:ring-pet-blue/30 transition-all"
                    >
                      <option value="" disabled>Select your pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="small-animal">Small Animal</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-pet-dark-slate mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-pet-slate/20 focus:outline-none focus:ring-2 focus:ring-pet-blue/30 transition-all"
                      placeholder="Tell us about your pet care needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pet-blue hover:bg-pet-dark-blue text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
