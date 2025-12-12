import React from 'react';
import { Star, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Bertumbuh",
      description: "Selalu berkeinginan untuk terus jadi lebih baik dan itu ia ciptakan dari kebiasaan baik yang selalu dipupuk."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Inovasi",
      description: "Punya rasa ingin tahu tinggi dan selalu memberikan solusi berupa inovasi atas pertanyaan-pertanyaannya."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Berkeyakinan Kuat",
      description: "Pekerja keras, tangguh, dan persisten dalam mencapai tujuan hidupnya."
    }
  ];

  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kenali Azzam</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-100 rounded-2xl bg-white hover:border-yellow-200 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-yellow-100">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;