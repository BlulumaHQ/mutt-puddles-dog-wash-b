import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const links = [
  { label: "Wash Menu", path: "/services/" },
  { label: "About Us", path: "/about-us/" },
  { label: "Reviews", path: "/testimonials/" },
  { label: "FAQ", path: "/frequently-asked-questions/" },
  { label: "Tips", path: "/tips/" },
  { label: "Contact Us", path: "/contact-us/" },
  { label: "Self-Serve Wash", path: "/service-dog-wash-tacoma-wa/" },
  { label: "Dog Grooming", path: "/dog-grooming-tacoma-wa/" },
];

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="section-container pt-14 pb-8">
      <p className="font-display lowercase leading-[0.85] tracking-tight text-[clamp(3.25rem,13vw,8rem)] break-words">
        mutt<span className="text-primary">puddles</span>
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-3 text-sm font-bold">
          <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-aqua shrink-0" /> 605 156th St E, Tacoma, WA 98445</p>
          <a href="tel:2535313387" className="flex items-center gap-2 min-h-[44px] hover:text-aqua"><Phone className="h-4 w-4 text-aqua" /> (253) 531-3387</a>
          <p className="text-secondary-foreground/70">Emergency Hours Available Upon Request</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-6">
          {links.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="min-h-[44px] flex items-center text-sm font-bold hover:text-aqua">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t-[3px] border-secondary-foreground/15">
      <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold text-secondary-foreground/75 text-center">
        <p>Bonding through grooming since 2007</p>
        <p>
          © {new Date().getFullYear()} Mutt Puddles Dog Wash LLC. Website by{" "}
          <a href="https://swiftsite.ca" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-aqua">SwiftSite</a>
        {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of Mutt Puddles Dog Wash.</span></p>
      </div>
    </div>
  </footer>
);

export default Footer;
