import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Smart Learning Platform",
    description:
      "An AI-powered learning platform that generates quizzes, flashcards, summaries, and provides an AI chatbot for students.",
    tech: ["React", "FastAPI", "SQLite", "Groq API"],
    github: "https://github.com/yourusername/learnflow",
    demo: "https://your-demo.vercel.app",
  },
  {
    title: "Employee Salary Prediction",
    description:
      "Machine Learning project that predicts employee salaries using regression algorithms and feature engineering.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Flask"],
    github: "https://github.com/yourusername/salary-prediction",
    demo: "#",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Predicts customer churn using classification algorithms with data preprocessing and model evaluation.",
    tech: ["Python", "Scikit-Learn", "Matplotlib"],
    github: "https://github.com/yourusername/churn",
    demo: "#",
  },
  {
    title: "IPL Data Analysis Dashboard",
    description:
      "Interactive dashboard analyzing IPL statistics, team performance, player insights, and season trends.",
    tech: ["Power BI", "Excel", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Detect fraudulent credit card transactions using anomaly detection and classification techniques.",
    tech: ["Python", "XGBoost", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sales Dashboard",
    description:
      "Business intelligence dashboard showing KPIs, revenue, profit, regional sales, and customer insights.",
    tech: ["Power BI", "Excel"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-zinc-900 rounded-3xl border border-zinc-800 p-7"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 duration-300"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;