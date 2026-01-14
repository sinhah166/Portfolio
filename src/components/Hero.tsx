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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-left md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Harshit Sinha
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-xl">
              Developer & Creative Problem Solver
            </p>

            <div className="flex items-center gap-4 mb-12">
              <a
                href="https://github.com/sinhah166"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
              >
                <Github className="text-white" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-sinha-3833172a1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
              >
                <Linkedin className="text-white" size={24} />
              </a>
              <a
                href="mailto:sinhah166@gmail.com"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
              >
                <Mail className="text-white" size={24} />
              </a>
            </div>

            <button
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
          </div>

          <div className="hidden md:block animate-fade-in">
            <img
              src="/src/assets/whatsapp_image_2026-01-14_at_11.27.14_pm.jpeg"
              alt="Harshit Sinha"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
            />
          </div>
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
