import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; 
import logo from "@/assets/siri-logo.png";
import logo2 from "@/assets/siri-logo2.png";

const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "Verticals",
    submenu: [
      { name: "Fleets", href: "/verticals/fleets" },
      { name: "Workplace", href: "/verticals/workplace" },
      { name: "Residential", href: "/verticals/residential" },
      { name: "CPOs", href: "/verticals/cpos" },
      { name: "OEMs", href: "/verticals/oems" },
      { name: "Energy Storage", href: "/verticals/energy-storage" },
    ],
  },

  {
    name: "Offerings",
    submenu: [
      { name: "Products", href: "/products" },
      { name: "Solutions", href: "/solutions" },
      { name: "Services", href: "/services" },
    ],
  },

  {
    name: "Company",
    submenu: [
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isScrolled ? logo : logo2}
              alt="SIRI Electromotive"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 mx-auto">
            {navLinks.map((link) =>
              link.submenu ? (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`font-medium flex items-center gap-1 pb-4 ${
                      isScrolled
                        ? "text-foreground/80 hover:text-primary"
                        : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-lg w-48 transition-all duration-300 overflow-hidden ${
                      openDropdown === link.name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {link.submenu.map((sub, index) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className={`block px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent hover:border-l-2 hover:border-primary transition-all duration-200 hover:pl-6 ${
                          index !== 0 ? 'border-t border-border/30' : ''
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium relative group pb-4 ${
                    isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-background rounded-lg p-4 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name}>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="text-foreground/80 hover:text-primary font-medium w-full flex justify-between items-center"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </button>

                    {openDropdown === link.name && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-foreground/80 hover:text-white hover:bg-primary/80 transition-colors py-1 px-2 rounded"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
