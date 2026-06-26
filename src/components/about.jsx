import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase, Code2 } from "lucide-react";

const cards = [
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    value: "MCA @ HPTU",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Experience",
    value: "Falcon - 3 Months",
  },
  {
    icon: <Code2 size={28} />,
    title: "Projects",
    value: "10+ Projects",
  },
  {
    icon: <User size={28} />,
    title: "Focus",
    value: "Data & AI",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-zinc-950 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 mx-auto">

              <img
                src="/profile.png"
                alt="profile"
                className="rounded-full w-full h-full object-cover"
              />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            <h3 className="text-4xl font-bold mb-6">

              Hello 👋 I'm Mukesh

            </h3>

            <p className="text-gray-400 leading-8 text-lg">

              I am currently pursuing my MCA and passionate about
              Data Analytics, Machine Learning, Artificial Intelligence
              and Full Stack Development.

              <br /><br />

              My goal is to build intelligent applications that
              solve real-world business problems using
              Python, SQL, Power BI, React and AI.

            </p>

          </motion.div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center"
            >

              <div className="text-blue-500 flex justify-center mb-4">

                {card.icon}

              </div>

              <h3 className="font-semibold text-xl">

                {card.title}

              </h3>

              <p className="text-gray-400 mt-3">

                {card.value}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;