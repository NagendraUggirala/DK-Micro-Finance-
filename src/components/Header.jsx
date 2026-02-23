import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/initiatives", label: "Our Loans" },
    { path: "/volunteer", label: "Bank Partners" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  // ✅ FIX: DEFINE CTA HANDLER
  const handleCTAClick = () => {
    setIsMenuOpen(false);       // close mobile menu
    navigate("/volunteer");    // navigate to Join Us page
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-slate-50 border-b border-slate-200 ${
        isScrolled ? "shadow-lg shadow-slate-200/50" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* MAIN HEADER ROW */}
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-5">

          {/* LOGO + BRAND */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="flex items-center gap-2 flex-shrink-0">
  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                  rounded-full overflow-hidden">
    <img
      src="/images/logo1.png"
      alt="Founder"
      className="w-full h-full object-cover object-center scale-110"
    />
  </div>  
</div>




            <div className="leading-tight overflow-hidden">
              <h1 className="text-sm sm:text-base md:text-2xl font-bold text-slate-900 whitespace-nowrap">
                <span className="text-amber-500">DK  </span>
                <span className="text-emerald-700">Micro Finance</span>
              </h1>
              <p className="hidden sm:block text-[11px] md:text-xs text-slate-600 italic">
                "We Understand Your World"
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                        isActiveLink(item.path)
                        ? "text-emerald-700 bg-emerald-50 ring-2 ring-emerald-200"
                        : "text-slate-700 hover:text-emerald-600 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-100 rounded-xl transition"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 pb-4">
            <ul className="space-y-2 pt-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium ${
                      isActiveLink(item.path)
                        ? "bg-emerald-50 text-emerald-700 ring-2 ring-emerald-200"
                        : "text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* CTA BUTTON */}
              <li className="pt-2">
                <button
                  onClick={handleCTAClick}
                  className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition shadow-lg"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
