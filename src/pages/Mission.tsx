import React from 'react';
import { Target, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Mission() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80"
            alt="Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Our Mission</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            To transform India's sporting landscape by identifying, supporting, and nurturing underprivileged athletes 
            who have the potential to excel on the international stage.
          </p>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Identify Talent",
                description: "We actively search for exceptional athletes across India who lack the resources to pursue their sporting dreams."
              },
              {
                icon: Heart,
                title: "Provide Support",
                description: "Through our network of sponsors, we provide financial backing, training facilities, and professional guidance."
              },
              {
                icon: Globe,
                title: "Global Recognition",
                description: "We aim to see our athletes competing and winning medals at prestigious international sporting events."
              }
            ].map((point, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl animate-scaleIn" style={{ animationDelay: `${index * 200}ms` }}>
                <point.icon className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                <p className="text-white/60 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 glass-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fadeInUp">Join Our Mission</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fadeInUp animate-delay-1">
            Together, we can build a stronger sporting future for India. Support an athlete today and be part of their journey to success.
          </p>
          <Link 
            to="/support" 
            className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors animate-fadeInUp animate-delay-2"
          >
            Become a Sponsor <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Mission;