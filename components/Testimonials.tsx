import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Wafi Aulia",
      role: "Rekan Perjalanan",
      image: "https://picsum.photos/100/100?random=4",
      quote: "\"Sepertinya aku lebih banyak bicara lewat tindakan ya. Bukan begitu, AD? Si detektif junior berkeyakinan kuat. Jadi kau bisa simpulkan sendiri bagaimana caraku memandangmu dan apa yang kudoakan untukmu.\""
    },
    {
      name: "Arsya Rifaindika",
      role: "Si Adik Nomor Siji",
      image: "https://picsum.photos/100/100?random=5",
      quote: "\"Azzamahdy Ahmad Rafikri, dengan segala macam panggilannya yang ku denger sejak kecil, adalah sosok jiwa yang luar biasa hebat melihat dari rekam jejak hidupnya yang penuh dengan kanan-kiri-atas-bawah-depan-belakang, walau dari luar terlihat seperti orang yang biasa menjalani hidup tapi andai bisa melihat matanya lebih dalam, seribu satu pertempuran selalu ia jalani tiap detiknya.\""
    },
    {
      name: "M. Hawari Tsabit",
      role: "Rekan Investor",
      image: "https://picsum.photos/100/100?random=6",
      quote: "\"Bang azzam merupakan sosok yang ambisius dan memiliki visi yang berkelanjutan. Pendirian yang beliau bawa telah menjadi USP (Unique selling point) yang saya yakin dapat mengantar beliau menuju cita-citanya.\""
    },
    {
      name: "Ariefatih Rafaizqi",
      role: "Si Adik Bungsu",
      image: "https://picsum.photos/100/100?random=7",
      quote: "\"Mas orangnya baik, terus pendiem (kalau dirumah sih), terus suka musik pop(mie), suka musik musik yang relaxing, terus suka tidur, abis itu dia orangnya kayak gamau banyak ngobrol, terus apalagi ya...\""
    },
    {
      name: "Azzamahdy Ahmad Rafikri",
      role: "Diri Sendiri",
      image: "https://picsum.photos/100/100?random=8",
      quote: "\"Setiap ada hujan, selalu ada pelangi, dan bunga-bunga akan bermekaran pada waktunya.\""
    }
  ];

  return (
    <section id="testimonial" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Azzam di Mata Mereka</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Snap scrolling container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 space-x-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {testimonials.map((item, index) => (
              <div key={index} className="snap-center shrink-0 w-[85vw] md:w-[500px]">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-500 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-100"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                      <p className="text-yellow-600 text-sm font-medium">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;