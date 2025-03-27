
import { useEffect, useRef } from 'react';
import { Heart, Shield, Clock, Briefcase, Star, Activity } from 'lucide-react';
import { createScrollObserver } from '@/lib/animations';

const services = [
  {
    icon: <Heart className="h-10 w-10 text-pet-blue" />,
    title: "Pet Sitting",
    description: "Professional in-home care that keeps your pets comfortable in their own environment."
  },
  {
    icon: <Clock className="h-10 w-10 text-pet-blue" />,
    title: "Daily Walks",
    description: "Scheduled, reliable exercise to keep your pet healthy and happy throughout the day."
  },
  {
    icon: <Shield className="h-10 w-10 text-pet-blue" />,
    title: "Medical Care",
    description: "Specialized attention for pets with medical needs or those requiring medication."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-pet-blue" />,
    title: "Travel Care",
    description: "Extended care services when you're away, ensuring your pet's routine stays consistent."
  },
  {
    icon: <Star className="h-10 w-10 text-pet-blue" />,
    title: "Premium Grooming",
    description: "Luxurious grooming services tailored to your pet's breed and specific needs."
  },
  {
    icon: <Activity className="h-10 w-10 text-pet-blue" />,
    title: "Training Sessions",
    description: "Personalized training programs to help your pet develop good behaviors and skills."
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = createScrollObserver();
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-container">
      <div className="text-center mb-16 scroll-reveal">
        <div className="inline-block bg-pet-blue/10 text-pet-blue px-3 py-1 rounded-full text-sm font-medium mb-6">
          Our Services
        </div>
        <h2 className="section-title">Comprehensive Pet Care Services</h2>
        <p className="section-subtitle mx-auto">
          We offer a wide range of services designed to meet your pet's needs and fit your lifestyle, all supported by our innovative technology platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="scroll-reveal glass-card rounded-xl p-8 border border-pet-slate/10 hover:border-pet-blue/20 transition-all duration-300 hover:shadow-md"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="bg-pet-light-blue rounded-full h-16 w-16 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-pet-dark-blue mb-3">{service.title}</h3>
            <p className="text-pet-slate">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
