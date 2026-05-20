import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // 🔥 nav links with proper routing
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Notes", path: "/#notes" },
  ];

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-[#050505] border-b border-green-900/20 sticky top-0 z-50">

      {/* Logo */}
      <Link 
        to="/" 
        onClick={closeMenu}
        className="relative z-10 text-xl md:text-2xl font-semibold text-green-400 tracking-tight"
      >
        Sunil Dharajiya
      </Link>

      {/* Mobile Toggle */}
      <button 
        className="relative z-10 md:hidden text-green-400"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Nav Links */}
      <div className={`
        absolute md:static top-[65px] left-0 w-full md:w-auto
        bg-[#050505]/95 backdrop-blur-lg
        flex flex-col md:flex-row items-center gap-6 p-6 md:p-0
        transition-all duration-300
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'}
      `}>

        <ul className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-300">
          
          {navLinks.map((item, i) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.hash === item.path.split("#")[1]);

            return (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-green-400" : "hover:text-green-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          {/* Contact Button */}
          <li>
            <Link 
              to="/contact"
              onClick={closeMenu}
              className="px-4 py-2 rounded-lg bg-green-500/90 text-black font-medium 
              hover:bg-green-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};