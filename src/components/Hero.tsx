import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Harshit Sinha
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
            Building beautiful, functional web experiences that make a difference
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-full">
              <Github className="text-white" size={24} />
            </div>
            <div className="p-3 bg-white/10 rounded-full">
              <Linkedin className="text-white" size={24} />
            </div>
            <div className="p-3 bg-white/10 rounded-full">
              <Mail className="text-white" size={24} />
            </div>
          </div>

          <button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            View My Work
            <ArrowDown size={20} />
          </button>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-white/60" size={32} />
      </button>
    </section>
  );
}
