import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const mainLinks = [
  { label: "Wash Menu", path: "/services/" },
  { label: "How it Works", path: "/#how-it-works" },
  { label: "Reviews", path: "/testimonials/" },
  { label: "Visit", path: "/#visit" },
];

const moreLinks = [
  { label: "About Us", path: "/about-us/" },
  { label: "Testimonials", path: "/testimonials/" },
  { label: "FAQ", path: "/frequently-asked-questions/" },
  { label: "Tips", path: "/tips/" },
  { label: "Contact Us", path: "/contact-us/" },
];

const serviceLinks = [
  { label: "Dog Wash Studio", path: "/dog-wash-studio-tacoma-wa/" },
  { label: "Self-Service Dog Wash", path: "/service-dog-wash-tacoma-wa/" },
  { label: "Pet Groomer", path: "/pet-groomer-in-tacoma-wa/" },
  { label: "Dog Grooming", path: "/dog-grooming-tacoma-wa/" },
  { label: "Dog Groomer", path: "/dog-groomer-tacoma-wa/" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMoreOpen(false);
  }, [location.pathname, location.hash]);

  const linkCls = (path: string) =>
    `px-3 py-2 rounded-button font-bold text-[15px] transition-colors hover:bg-accent ${
      location.pathname === path ? "text-primary" : "text-secondary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-secondary">
      <div className="section-container flex items-center justify-between h-[73px] lg:h-[81px]">
        <Link to="/" aria-label="Mutt Puddles Dog Wash home">
          <Logo className="text-[26px] lg:text-[30px]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {mainLinks.map((l) => (
            <Link key={l.label} to={l.path} className={linkCls(l.path)}>{l.label}</Link>
          ))}
          <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button onClick={() => setMoreOpen((o) => !o)} className={`${linkCls("")} inline-flex items-center gap-1`} aria-expanded={moreOpen}>
              More <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.12 }}
                  className="absolute right-0 top-full pt-2 w-[420px]"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-card border-[3px] border-secondary bg-card p-3">
                    <div>
                      <p className="overline px-3 py-1">Pages</p>
                      {moreLinks.map((c) => (
                        <Link key={c.path} to={c.path} className="block px-3 py-2 rounded-button text-sm font-bold text-secondary hover:bg-accent">{c.label}</Link>
                      ))}
                    </div>
                    <div>
                      <p className="overline px-3 py-1">Services</p>
                      {serviceLinks.map((c) => (
                        <Link key={c.path} to={c.path} className="block px-3 py-2 rounded-button text-sm font-bold text-secondary hover:bg-accent">{c.label}</Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="tel:2535313387" className="btn-teal ml-3 text-sm">
            <Phone className="h-4 w-4" /> (253) 531-3387
          </a>
        </nav>

        <div className="flex lg:hidden items-center gap-2">
          <a href="tel:2535313387" className="btn-teal !px-3" aria-label="Call (253) 531-3387">
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn-outline !px-3"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t-[3px] border-secondary bg-background max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <nav className="section-container py-5 flex flex-col gap-2">
              {mainLinks.map((l) => (
                <Link key={l.label} to={l.path} className="font-display text-3xl text-secondary min-h-[44px] flex items-center">{l.label}</Link>
              ))}
              <div className="grid grid-cols-2 gap-x-4 mt-3 pt-4 border-t-[3px] border-dashed border-primary">
                {[...moreLinks, ...serviceLinks].map((c) => (
                  <Link key={c.path + c.label} to={c.path} className="min-h-[44px] flex items-center text-sm font-bold text-secondary">{c.label}</Link>
                ))}
              </div>
              <a href="tel:2535313387" className="btn-tomato mt-3 text-lg"><Phone className="h-5 w-5" /> (253) 531-3387</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
