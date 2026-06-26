import { Briefcase } from "lucide-react";

function Experience(){

return(

<section className="py-24 px-6">

<div className="max-w-4xl mx-auto">

<h2 className="text-center text-5xl font-bold mb-16">

Experience

</h2>

<div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-10">

<div className="flex items-center gap-5">

<div className="bg-blue-600 p-4 rounded-full">

<Briefcase/>

</div>

<div>

<h2 className="text-3xl font-bold">

Customer Support Executive

</h2>

<p className="text-blue-400">

Falcon

</p>

</div>

</div>

<p className="mt-8 text-gray-400 leading-8">

Worked as a Customer Support Executive for 3 months,
developing communication, problem-solving, and customer
relationship skills while ensuring high-quality service.

</p>

</div>

</div>

</section>

)

}

export default Experience;