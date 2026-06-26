import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {

return (

<section
id="home"
className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
>

<div className="absolute w-[450px] h-[450px] bg-blue-600 rounded-full blur-[180px] opacity-20 left-0 top-20"></div>

<div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[180px] opacity-20 right-0 bottom-0"></div>

<motion.div

initial={{opacity:0,y:60}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-center z-10"

>

<p className="text-blue-400 uppercase tracking-[6px]">

WELCOME TO MY PORTFOLIO

</p>

<h1 className="text-6xl font-black mt-4">

Mukesh

<span className="text-blue-500">

{" "}Kumar

</span>

</h1>

<div className="text-2xl mt-8 font-semibold h-12">

<Typewriter

words={[

"Data Analyst",

"Machine Learning Engineer",

"Python Developer",

"Power BI Developer",

]}

loop

cursor

cursorStyle="|"

typeSpeed={80}

deleteSpeed={50}

/>

</div>

<p className="max-w-2xl mx-auto mt-8 text-gray-400">

I build Machine Learning applications, interactive dashboards,
and data-driven web solutions using Python, SQL, Power BI,
React, FastAPI, and modern AI technologies.

</p>

<div className="flex justify-center gap-5 mt-10">

<a

href="#projects"

className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition"

>

View Projects

</a>

<a

href="/public\autoCV (1).pdf"

className="px-8 py-4 border border-blue-500 rounded-xl hover:bg-blue-600 transition"

>

Download Resume

</a>

</div>

<div className="flex justify-center gap-8 mt-12">

<FaGithub className="hover:text-blue-500 cursor-pointer"/>

<FaLinkedin className="hover:text-blue-500 cursor-pointer"/>

<FaEnvelope className="hover:text-blue-500 cursor-pointer"/>

</div>

</motion.div>

</section>

)

}
export default Hero;