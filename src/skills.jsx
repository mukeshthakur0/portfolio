import React from "react";

export default function Portfolio() {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "FastAPI",
    "React",
    "MongoDB",
  ];

  const projects = [
    {
      title: "LearnFlow AI",
      description:
        "AI-powered smart learning platform with PDF analysis, quiz generation, flashcards, summaries, and AI chat.",
    },
    {
      title: "Mind Mirror",
      description:
        "Mood tracking and journaling application with AI insights and analytics dashboard.",
    },
    {
      title: "Employee Salary Prediction",
      description:
        "Machine learning project to predict employee salaries using regression models.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <img
          src="https://via.placeholder.com/180"
          alt="Profile"
          className="w-44 h-44 rounded-full mx-auto border-4 border-blue-500"
        />

        <h1 className="text-5xl font-bold mt-6">Mukesh Kumar</h1>

        <p className="text-xl text-gray-400 mt-4">
          MCA Student | Data Analyst | Machine Learning Enthusiast
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-8">
          I am an MCA student passionate about Data Analytics, Machine
          Learning, and Full Stack Development. I enjoy solving real-world
          problems using Python, SQL, Power BI, and AI technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-600 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="container mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Master of Computer Applications (MCA)
          </h3>

          <p className="text-gray-400 mt-2">
            Himachal Pradesh Technical University
          </p>

          <p className="text-gray-500">
            2024 - 2026
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="container mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="bg-gray-900 p-6 rounded-xl">
          <p>Email: mukesh@example.com</p>
          <p>GitHub: github.com/mukesh</p>
          <p>LinkedIn: linkedin.com/in/mukesh</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-gray-500">
          © 2026 Mukesh Kumar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}