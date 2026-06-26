import "./App.css";

function Skills() {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Machine Learning",
    "Pandas",
    "React",
    "FastAPI",
    "MongoDB",
    "Git",
  ];

  const projects = [
    {
      title: "LearnFlow AI",
      desc: "AI learning platform with PDF analysis, summaries, quizzes and flashcards.",
    },
    {
      title: "Mind Mirror",
      desc: "AI-powered mood tracking and journaling application.",
    },
    {
      title: "Employee Salary Prediction",
      desc: "Machine Learning project for salary prediction using regression.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-md border-b border-white/10 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold text-cyan-400">
            Mukesh.dev
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black">
            Mukesh Kumar
          </h1>

          <h2 className="text-2xl mt-4 text-cyan-400">
            Data Analyst • AI Developer
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            MCA Student passionate about Data Analytics,
            Machine Learning, Power BI and Full Stack Development.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-8 py-4 bg-cyan-500 rounded-full">
              View Projects
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-full">
              Resume
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-5xl font-bold mb-8">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-gray-300 leading-8">
            I am pursuing MCA from Himachal Pradesh Technical
            University. I specialize in Data Analytics,
            SQL, Power BI, Python, Machine Learning and
            AI-powered applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-5xl font-bold mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 rounded-full border border-cyan-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-5xl font-bold mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-5xl font-bold mb-8">
          Contact
        </h2>
        <h3> hello world </h3>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p>Email: techspace580@gmail.com</p>
         <a href="https://github.com/mukeshthakur0" target="_blank" rel="noopener noreferrer">
           GitHub
         </a>
          <p>LinkedIn: linkedin.com/in/mukesh</p>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-white/10 text-gray-500">
        © 2026 Mukesh Kumar | Portfolio all copy right reserved
      </footer>
    </div>
  );
}

export default Skills;