import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always exploring new technologies and best practices',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively to achieve common goals',
    },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate developer with a strong eye for design and usability, focused on building clean, efficient, and impactful digital experiences. I enjoy turning ideas into well-crafted products using modern web technologies.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With experience across frontend interfaces and backend systems, I'm comfortable solving problems end-to-end. I value clarity, collaboration, and continuous learning, and I'm always looking to grow by building things that actually matter.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                3+ Projects Completed
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                Available to connect
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
