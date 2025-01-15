import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Boxes, User2, Send } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "ProLegion Marketplace UI",
      description: "A comprehensive marketplace UI for managing jobs with real-time analytics and job hiring management.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
    },
    {
      title: "My Portfolio",
      description: "A platform with my skills and work updates and team collaboration.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2426"
    },
    // {
    //   title: "Weather Dashboard",
    //   description: "A beautiful weather application with detailed forecasts and interactive maps.",
    //   tech: ["React", "REST APIs", "Chart.js", "Geolocation"],
    //   image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&q=80&w=2575"
    // }
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "Node.js", "Git", "REST APIs", "Redux", "Next.js", "Responsive Design"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Amit Thakur
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Crafting beautiful and performant web experiences
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              View Work
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/Thakuramit4168" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/amit-thakurhp21/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:thakuramit4168@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-8">
            <User2 className="text-indigo-600" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate frontend developer with a keen eye for design and a strong foundation in modern web technologies. 
            I specialize in building responsive, performant web applications using React and its ecosystem. 
            With a focus on user experience and clean code, I strive to create impactful digital solutions that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-indigo-600" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-800 font-medium text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-8">
            <Boxes className="text-indigo-600" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <a href="#" className="inline-flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink size={16} />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-8">
            <Send className="text-indigo-600" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Amit Thakur. All rights reserved.</p>
        </div>
        <div className="flex justify-end p-4 text-xs">
          <a href="https://www.linkedin.com/company/devpeakinnovations/">Powered by DevPeak Innovations</a>
        </div>
      </footer>
    </div>
  );
}

export default App;