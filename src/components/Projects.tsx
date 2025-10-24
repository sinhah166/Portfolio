import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative project management tool with real-time updates, team chat, file sharing, and advanced analytics.',
      tags: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for tracking social media metrics across multiple platforms with beautiful data visualizations.',
      tags: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'AI Content Generator',
      description:
        'AI-powered content creation tool that helps users generate blog posts, social media content, and marketing copy.',
      tags: ['Next.js', 'OpenAI', 'Prisma', 'tRPC'],
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Fitness Tracking App',
      description:
        'Mobile-first fitness application with workout tracking, nutrition logging, and personalized training plans.',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Real Estate Platform',
      description:
        'Property listing platform with advanced search filters, virtual tours, and integrated scheduling system.',
      tags: ['React', 'GraphQL', 'AWS', 'Mapbox'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
