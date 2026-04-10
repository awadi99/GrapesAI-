import { useState } from "react";
import { Link } from "react-scroll";
import { HashRouter } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Features", to: "features" },
    { name: "How It Works", to: "howitworks" },
    { name:"About us",to :"about"},
    
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        
        <h1 className="text-2xl font-bold text-amber-50">
          GrapesAI 🍇
        </h1>

        
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition relative group"
              >
                {item.name}

                
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden md:block">
          <a
            href="/#/result"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-400 text-black font-semibold shadow hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>

        
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl px-6 pb-6">

          <ul className="flex flex-col gap-4 text-gray-300">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/detect"
            className="block mt-4 text-center px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-400 text-black font-semibold"
          >
            Get Started
          </a>

        </div>
      )}
    </nav>
  );
}