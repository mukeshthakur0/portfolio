import { motion } from "framer-motion";

const skills = [

"Python",
"SQL",
"Power BI",
"Excel",
"Pandas",
"NumPy",
"Scikit Learn",
"Machine Learning",
"Deep Learning",
"TensorFlow",
"React",
"FastAPI",
"NodeJS",
"MongoDB",
"Git",
"GitHub",
"Docker",
"Tailwind"

];

function Skills(){

return(

<section
id="skills"
className="py-24 px-6"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-center text-5xl font-bold mb-16">

Skills

</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

{skills.map((skill,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.08,
rotate:2
}}

className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 text-center"

>

<h3 className="font-semibold">

{skill}

</h3>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Skills;