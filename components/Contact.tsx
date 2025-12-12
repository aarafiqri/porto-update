import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-yellow-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mari Berkabar</h2>
            <p className="text-gray-600">Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan!</p>
          </div>

          <form action="https://formspree.io/f/mdkobnlj" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nama</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none" 
                placeholder="Nama lengkap" 
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Pos-el</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none" 
                placeholder="emailkamu@gmail.com" 
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none resize-none" 
                placeholder="Pesan dan kesan untuk Azzam..." 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-yellow-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;