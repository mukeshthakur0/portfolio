const education = [

{
year:"2024 - Present",
course:"Master of Computer Applications",
college:"Himachal Pradesh Technical University"
},

{
year:"2021 - 2024",
course:"Bachelor of Computer Applications",
college:"Himachal Pradesh University"
}

];

function Education(){

return(

<section className="py-24 bg-zinc-950 px-6">

<div className="max-w-5xl mx-auto">

<h2 className="text-center text-5xl font-bold mb-16">

Education

</h2>

<div className="border-l-2 border-blue-500">

{education.map((item,index)=>(

<div
key={index}
className="ml-8 mb-16 relative"
>

<div className="absolute w-5 h-5 rounded-full bg-blue-500 -left-11 top-2"></div>

<h3 className="text-blue-400">

{item.year}

</h3>

<h2 className="text-2xl font-bold mt-2">

{item.course}

</h2>

<p className="text-gray-400 mt-2">

{item.college}

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Education;