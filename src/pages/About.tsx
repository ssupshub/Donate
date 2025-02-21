import React from 'react';
import { Users, Award, Target } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
            alt="Sports stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">About Us</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            ChampionRise is dedicated to discovering and nurturing India's hidden sporting talents, 
            providing them with the resources and support they need to excel on the global stage.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Inclusive Support",
                description: "We believe talent knows no boundaries. Our program reaches athletes across all socioeconomic backgrounds."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from athlete selection to training support."
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description: "Every action we take is aligned with our athletes' goals and dreams of representing India."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl animate-scaleIn" style={{ animationDelay: `${index * 200}ms` }}>
                <value.icon className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 glass-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 animate-fadeInUp">Our Story</h2>
              <div className="space-y-6 text-white/80 animate-fadeInUp animate-delay-1">
                <p>
                  Founded in 2023, ChampionRise emerged from a simple observation: India's vast sporting 
                  potential remains largely untapped due to financial constraints and lack of support.
                </p>
                <p>
                  What began as a small initiative to support local athletes has grown into a nationwide 
                  movement, connecting talented sportspersons with sponsors who believe in their potential.
                </p>
                <p>
                  Today, we're proud to have supported over 500 athletes across 15 different sports, 
                  with many of our athletes representing India in international competitions.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] animate-scaleIn">
              <img 
                src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80"
                alt="Athletes training"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;