import React from 'react';
import { Medal, ArrowRight } from 'lucide-react';

function Athletes() {
  const athletes = [
    {
      name: "Priya Sharma",
      sport: "Athletics",
      location: "Bihar",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
      story: "A promising sprinter from rural Bihar, Priya has already broken several state records.",
      achievements: ["State Gold Medalist", "National Junior Championship Finalist"],
      fundingGoal: 200000
    },
    {
      name: "Rajesh Kumar",
      sport: "Wrestling",
      location: "Haryana",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80",
      story: "Coming from a farming family, Rajesh has shown exceptional talent in freestyle wrestling.",
      achievements: ["District Champion", "State Silver Medalist"],
      fundingGoal: 150000
    },
    {
      name: "Anita Patel",
      sport: "Boxing",
      location: "Manipur",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80",
      story: "Following in Mary Kom's footsteps, Anita is determined to bring Olympic glory to India.",
      achievements: ["Youth National Gold", "Asian Youth Championship Participant"],
      fundingGoal: 300000
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
            alt="Athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Our Athletes</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            Meet the extraordinary talents who are shaping the future of Indian sports. Your support can help them achieve their dreams.
          </p>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {athletes.map((athlete, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden animate-scaleIn" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative h-64">
                  <img 
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 hero-gradient opacity-50"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Medal className="w-5 h-5 text-yellow-500" />
                    <span className="text-white/60">{athlete.sport}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{athlete.name}</h3>
                  <p className="text-white/60 mb-4">{athlete.location}</p>
                  <p className="text-white/80 mb-6">{athlete.story}</p>
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold">Achievements:</h4>
                    <ul className="space-y-2">
                      {athlete.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-center gap-2 text-white/60">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/60">Funding Goal</p>
                      <p className="text-lg font-bold">₹{athlete.fundingGoal.toLocaleString()}</p>
                    </div>
                    <button className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                      Support <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Athletes;