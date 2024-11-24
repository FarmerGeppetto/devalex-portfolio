export default function Contact() {
  return (
    <div id="contact" className="bg-[#0A0F1C] py-20 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="mailto:devalex.programming@gmail.com"
            className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] font-medium"
          >
            Send me an email
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

