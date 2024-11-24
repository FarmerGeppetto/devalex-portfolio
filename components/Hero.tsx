import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl text-blue-400 font-semibold">Hello, I'm Alex 👋</h2>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">I build </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient">
                  modern software
                </span>
              </h1>
            </div>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              Building robust solutions with modern technologies. Specialized in React, TypeScript, and cloud architecture.
            </p>
            <div className="flex gap-4">
              <a href="#projects" 
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] font-medium">
                View Projects
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact"
                className="px-8 py-3 border border-gray-700 text-white rounded-lg hover:bg-white/5 transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative group">
            {/* Main image container */}
            <div className="relative z-10 w-72 h-72 rounded-2xl overflow-hidden">
              <Image
                src="/devalex.png"
                alt="Develax"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                priority
                quality={100}
              />
              {/* Gradient overlay - reduced blur and opacity */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 group-hover:opacity-50 transition duration-500"></div>
            </div>
            
            {/* Decorative elements - reduced blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-40 blur transition duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

