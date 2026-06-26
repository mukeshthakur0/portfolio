import { Menu } from "lucide-react";

function Navbar() {

return (

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

<div className="max-w-7xl mx-auto flex justify-between items-center p-5">

<h1 className="text-2xl font-bold text-blue-500">

Mukesh.

</h1>

<div className="hidden md:flex gap-10">

<a href="#home" className="hover:text-blue-500">Home</a>

<a href="#about" className="hover:text-blue-500">About</a>

<a href="#skills" className="hover:text-blue-500">Skills</a>

<a href="#projects" className="hover:text-blue-500">Projects</a>

<a href="#contact" className="hover:text-blue-500">Contact</a>

</div>

<button className="md:hidden">

<Menu/>

</button>

</div>

</nav>

)

}

export default Navbar;