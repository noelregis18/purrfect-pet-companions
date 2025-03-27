
import { useEffect } from 'react';
import { createScrollObserver } from '@/lib/animations';

const testimonials = [
  {
    quote: "PurrfectCare has transformed how I care for my two cats. The app makes scheduling and communication with caregivers so seamless.",
    author: "Emma Thompson",
    role: "Cat Parent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "As someone who travels frequently for work, having reliable pet care is essential. This service provides peace of mind like no other.",
    author: "Michael Chen",
    role: "Dog Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The attention to detail is remarkable. My elderly dog requires special care, and their team handles everything perfectly.",
    author: "Sarah Johnson",
    role: "Pet Parent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  useEffect(() => {
    const observer = createScrollObserver();
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="testimonials" className="bg-pet-light-blue py-20">
      <div className="section-container">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block bg-pet-blue/10 text-pet-blue px-3 py-1 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="section-title">What Pet Parents Say</h2>
          <p className="section-subtitle mx-auto">
            Our service has helped countless pet owners provide better care for their beloved companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="scroll-reveal glass-card rounded-xl p-8 border border-white"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-pet-dark-blue">{testimonial.author}</h4>
                  <p className="text-sm text-pet-slate">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-pet-dark-slate italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-pet-blue fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
