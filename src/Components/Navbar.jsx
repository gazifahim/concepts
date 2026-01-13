import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b  fixed top-0 left-0 right-0 z-50 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-lg font-semibold text-gray-800">
          
          DevNotes
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium text-gray-600 ">
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/javascript-concepts">JavaScript</NavLink>
          <NavLink to="/react-concepts">React</NavLink>
          <NavLink to="/nextjs-concepts">Next.js</NavLink>
        </div>
        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-xl"
        >
          
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
          
          <NavLink to="/" onClick={() => setOpen(false)}>
            
            Home
          </NavLink>
          <NavLink to="/javascript-concepts" onClick={() => setOpen(false)}>
            
            JavaScript Concepts
          </NavLink>
          <NavLink to="/react-concepts" onClick={() => setOpen(false)}>
            
            React Concepts
          </NavLink>
          <NavLink to="/nextjs-concepts" onClick={() => setOpen(false)}>
            
            Next.js Concepts
          </NavLink>
        </div>
      )}
    </nav>
  );
}
function NavLink({ to, children, onClick }) {
  return (
    <MotionLink to={to} onClick={onClick} className="m-2 text-gray-700">
      
      <motion.span
        className="inline-block hover-underline"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        
        {children}
      </motion.span>
    </MotionLink>
  );
}
