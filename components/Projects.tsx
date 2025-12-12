import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Majelis Permusyawaratan Mahasiswa FEB UPNVJ",
      role: "Staf Komisi 1 Majelis Permusyawaratan Mahasiswa FEB UPNVJ",
      image: "https://picsum.photos/600/400?random=1" // placeholder for mpm.png
    },
    {
      title: "Pustaka Negeri",
      role: "Menjadi co-founder dari komunitas Pustaka Negeri",
      image: "https://picsum.photos/600/400?random=2" // placeholder for pustaka.png
    },
    {
      title: "Kelompok Studi Pasar Modal",
      role: "Staf Departemen Human Resource Development KSPM UPNVJ",
      image: "https://picsum.photos/600/400?random=3" // placeholder for kspm.png
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Rekam Jejak</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md h-80">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;