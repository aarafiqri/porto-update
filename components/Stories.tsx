import React from 'react';
import { ExternalLink } from 'lucide-react';

const Stories: React.FC = () => {
  const stories = [
    {
      title: "Head of Event Development IPO Committee",
      date: "Feb 2023",
      image: "https://picsum.photos/600/400?random=9",
      description: "Pada Februari–Maret 2023, saya dipercayakan untuk menjabat sebagai Koordinator Acara di Kepanitiaan IPO. Initial Public Offering (IPO) adalah acara rutin yang diselenggarakan oleh KSPM FEB UPN Veteran Jakarta.",
      link: "https://www.linkedin.com/posts/azzamahdyr_in-feb-march-2023-i-get-responsibility-to-activity-7170326251348455424-0bEI"
    },
    {
      title: "2nd Winner on Capital Market Competition",
      date: "2023",
      image: "https://picsum.photos/600/400?random=11",
      description: "Dengan penuh kebanggaan, keluarga besar KSPM 6.0 mengucapkan selamat atas prestasi gemilang yang telah diraih oleh tim perwakilan KSPM UPN Veteran Jakarta: Juara 2 (NSK Capital).",
      link: "https://www.linkedin.com/posts/kspm-upnvj_salaminvestormuda-appreciationpost-activity-7071458768651227136-cfKv"
    },
    {
      title: "Project Office of National Seminar",
      date: "Mar - Oct 2023",
      image: "https://picsum.photos/600/400?random=12",
      description: "Memimpin Seminar Nasional (SEMNAS) yang diadakan oleh KSPM FEB UPN Veteran Jakarta. Tahun ini, Seminar Nasional 2023 mengangkat tema 'Growth Your Financial Knowledge'.",
      link: "https://www.linkedin.com/posts/azzamahdyr_during-march-october-2023-seminar-nasional-activity-7170353743476060160-jLGd"
    }
  ];

  return (
    <section id="story" className="bg-gradient-to-b from-white to-yellow-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cerita Azzam</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article key={index} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {story.date}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-yellow-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                  {story.description}
                </p>
                <a 
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 mt-auto group"
                >
                  Baca lebih lanjut
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;