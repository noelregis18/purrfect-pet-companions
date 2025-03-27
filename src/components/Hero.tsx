
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-pet-light-blue to-white">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pet-blue/5 rounded-full animate-float" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-pet-blue/10 rounded-full animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-pet-blue/5 rounded-full animate-float" style={{animationDelay: '4s'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <div className="inline-block bg-pet-blue/10 text-pet-blue px-3 py-1 rounded-full text-sm font-medium mb-6">
              Modern Pet Care Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pet-dark-blue leading-tight">
              Exceptional Care for Your Extraordinary Pets
            </h1>
            <p className="mt-6 text-xl text-pet-slate max-w-xl">
              Revolutionizing pet care with technology that brings comfort, convenience, and peace of mind to pet owners.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-pet-blue hover:bg-pet-dark-blue text-white px-8 py-4 rounded-md transition-colors duration-300 shadow-sm flex items-center justify-center">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-pet-dark-blue px-8 py-4 rounded-md border border-pet-slate/20 hover:border-pet-blue/30 transition-colors duration-300 shadow-sm">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden animate-fade-in shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                alt="Happy dog with owner" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-6 -left-6 px-6 py-4 rounded-xl animate-slide-in-left" style={{animationDelay: '0.3s'}}>
              <div className="text-pet-dark-blue font-semibold">Trust & Care</div>
              <div className="text-pet-slate text-sm">Verified professionals</div>
            </div>
            <div className="glass-card absolute -top-6 -right-6 px-6 py-4 rounded-xl animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <div className="text-pet-dark-blue font-semibold">24/7 Support</div>
              <div className="text-pet-slate text-sm">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
