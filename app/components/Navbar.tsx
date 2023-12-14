'use client';

// Components
import Link from "next/link"

// Hooks
import { usePathname } from "next/navigation"

// Navbar List
const Links = [
    {path: "/", name: "Home"},
    {path: "/projects", name: "My Projects"},
    {path: "/contact", name: "Contact"}
]


const Navbar = ({ ContainerStyle, LinkStyle, }: {ContainerStyle: string, LinkStyle: string}) => {
    const path = usePathname();
  return (
    <nav className={ContainerStyle}>{
        Links.map((link,index)=> {
            return <Link
            href={link.path} 
            key={index} 
            className={`${LinkStyle}`}>
            
            {link.name}
            {<span className={`h-[1.5px] inline-block bg-orange-600 absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300 ${link.path === path ? "w-full" : "w-0"}`}>&nbsp;</span>}
    </Link> })}
    </nav>
  )
}

export default Navbar