import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiSearch, FiHome, FiFolder, FiInfo, FiMail,
  FiMenu, FiX, FiMoon, FiSun, FiBookOpen,
} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Home", to: "/", icon: <FiHome size={15} /> },
    { name: "About", to: "/about", icon: <FiInfo size={15} /> },
    { name: "Education", to: "/education", icon: <FiBookOpen size={15} /> }, 
    { name: "Skills", to: "/skills", icon: <FiBookOpen size={15} /> }, 
    { name: "Projects", to: "/projects", icon: <FiFolder size={15} /> },
    {
      name: "Contact",
      to: "mailto:chris.jose.castaneda@gmail.com",
      icon: <FiMail size={15} />,
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        
        {/* Left: Logo + Search */}
        <div className="flex items-center space-x-4 md:space-x-6 w-auto md:w-1/4">
          <NavLink to="/" className="text-2xl font-black tracking-tighter text-[#002060] dark:text-white">
            CC
          </NavLink>
          <button
            onClick={() => setSearchOpen(true)}
            className="text-slate-500 hover:text-[#115e59] dark:text-slate-400 dark:hover:text-white transition-colors focus:outline-none mt-1"
          >
            <FiSearch size={16} />
          </button>
        </div>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex items-center justify-center space-x-8 flex-1">
          {navItems.map(({ name, to, icon, external }) =>
            external ? (
              <li key={name}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-[#002060] dark:hover:text-white transition-colors"
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </li>
            ) : (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 text-[11px] uppercase tracking-widest transition-colors ${
                      isActive 
                        ? "text-[#002060] dark:text-[#2ab5b5] font-bold" 
                        : "text-[#002060] dark:text-slate-300 hover:text-[#115e59] dark:hover:text-white font-bold"
                    }`
                  }
                >
                  {icon}
                  <span>{name}</span>
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Right: Dark toggle + Mobile menu */}
        <div className="flex items-center justify-end space-x-2 md:space-x-4 w-auto md:w-1/4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-slate-50 dark:bg-slate-800 text-[#002060] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none shadow-sm border border-slate-100 dark:border-slate-700"
          >
            {darkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#002060] dark:text-slate-300 hover:text-[#115e59] dark:hover:text-white transition-colors focus:outline-none"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Animated) */}
      <div 
        className={`md:hidden bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] border-t border-slate-200 dark:border-slate-800 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-2">
          {navItems.map(({ name, to, icon, external }) =>
            external ? (
              <li key={name} className="w-full">
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center space-x-3 w-full py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </li>
            ) : (
              <li key={name} className="w-full">
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-center space-x-3 w-full py-4 text-[11px] uppercase tracking-widest transition-colors ${
                      isActive 
                        ? "bg-slate-50 dark:bg-slate-800 text-[#002060] dark:text-[#2ab5b5] font-bold" 
                        : "text-[#002060] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold"
                    }`
                  }
                >
                  {icon}
                  <span>{name}</span>
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}