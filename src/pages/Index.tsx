import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, ArrowRight, MapPin, Clock } from "lucide-react";
import PageMeta from "../components/PageMeta";
import ContactForm from "../components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Drops = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M30 20c8 14 14 22 14 31a14 14 0 0 1-28 0c0-9 6-17 14-31z" className="fill-aqua stroke-secondary" strokeWidth="3" />
    <path d="M78 52c5 9 9 14 9 20a9 9 0 0 1-18 0c0-6 4-11 9-20z" className="fill-aqua-light stroke-secondary" strokeWidth="3" />
    <circle cx="56" cy="98" r="7" className="fill-aqua stroke-secondary" strokeWidth="3" />
    <circle cx="100" cy="24" r="5" className="fill-aqua-light stroke-secondary" strokeWidth="3" />
  </svg>
);

/* 1. HERO */
const Hero = () => (
  <section className="pt-14 lg:pt-20 overflow-hidden">
    <div className="section-container text-center">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="overline text-secondary text-[11px] sm:text-xs mb-6">
          Self-serve dog wash + grooming · Tacoma, WA · Est. 2007
        </p>
        <h1 className="font-display text-secondary leading-[0.88] text-[clamp(4rem,15vw,10rem)]">
          Jump in the <span className="text-primary">puddle.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl font-medium max-w-xl mx-auto">
          Muddy paws in, fluffy pup out. Wash your dog yourself in our spa tubs or let our groomers do the scrubbing.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:2535313387" className="btn-tomato text-lg"><Phone className="h-5 w-5" /> Book a wash today</a>
          <a href="#wash-menu" className="btn-outline text-lg">See the wash menu</a>
        </div>
      </motion.div>
    </div>

    <div className="relative mt-14 lg:mt-20 max-w-6xl mx-auto px-5">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-28px] w-[110%] h-[42%] rounded-[50%] bg-aqua border-[3px] border-secondary" aria-hidden />
      <Drops className="absolute -left-2 lg:-left-16 bottom-4 w-20 lg:w-32 z-10" />
      <Drops className="absolute -right-2 lg:-right-16 bottom-10 w-20 lg:w-32 z-10" flip />
      <motion.img
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
        src="/images/hero-bg.jpg"
        alt="Happy golden retriever after grooming at Mutt Puddles"
        className="relative w-full h-[260px] sm:h-[360px] lg:h-[440px] object-cover object-right rounded-[40px] border-[3px] border-secondary"
      />
    </div>
    <div className="h-20" />
  </section>
);

/* 2. MARQUEE */
const marqueeText = "SUDS ✦ SNIFFS ✦ SNUGGLES ✦ TOWELS INCLUDED ✦ ALL BREEDS ✦ SINCE 2007 ✦ ";
const Marquee = () => (
  <div className="relative py-6 overflow-hidden" aria-label="Suds, sniffs, snuggles, towels included, all breeds, since 2007">
    <div className="-rotate-[1.2deg] -mx-4 bg-secondary border-y-[3px] border-secondary py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden>
        {[0, 1].map((i) => (
          <span key={i} className="font-display text-cream text-3xl md:text-5xl whitespace-nowrap pr-4">
            {marqueeText.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* 3. WASH MENU */
const menu = [
  { n: "01", title: "Self-Serve Dog Wash", desc: "Raised spa tubs, shampoos, conditioners, towels and pro tools — you do the scrubbing.", path: "/service-dog-wash-tacoma-wa/" },
  { n: "02", title: "Full Grooming", desc: "Skilled, experienced groomers for all breeds and sizes. Sit back while we pamper.", path: "/dog-grooming-tacoma-wa/" },
  { n: "03", title: "Dog Wash Studio", desc: "The perfect combination of spa ambiance and upscale self-serve amenities.", path: "/dog-wash-studio-tacoma-wa/" },
  { n: "04", title: "Learn to Groom", desc: "Our team will teach you to care for your pet's look yourself — and skip the salon bill.", path: "/pet-groomer-in-tacoma-wa/" },
];

const WashMenu = () => (
  <section id="wash-menu" className="py-20 lg:py-28 scroll-mt-24">
    <div className="section-container grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="overline mb-4">The menu</p>
        <h2 className="text-secondary text-[clamp(3rem,7vw,5.5rem)] leading-[0.9]">The wash menu.</h2>
        <p className="mt-5 text-lg max-w-sm">Order up whatever your pup needs. Not sure? Call us — we'll help you choose.</p>
        <img src="/images/hero-bg-2.jpg" alt="Fluffy white dog being groomed" className="arch mt-10 w-full max-w-sm aspect-[4/5] object-cover border-[3px] border-secondary" />
      </motion.div>
      <motion.ul variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="border-t-[6px] border-secondary self-center">
        {menu.map((m) => (
          <li key={m.n} className="border-b-[6px] border-secondary">
            <Link to={m.path} className="group grid grid-cols-[auto_1fr] gap-5 sm:gap-8 py-7 items-start">
              <span className="font-display text-primary text-5xl sm:text-6xl leading-none">{m.n}</span>
              <span>
                <span className="flex flex-wrap items-center gap-3 justify-between">
                  <span className="font-display text-secondary text-2xl sm:text-3xl group-hover:text-primary transition-colors">{m.title}</span>
                  <span className="rounded-button bg-aqua-light border-2 border-secondary px-3 py-1 text-xs font-extrabold">Call for pricing</span>
                </span>
                <span className="block mt-2 text-muted-foreground">{m.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);

/* 4. HOW IT WORKS */
const steps = [
  { t: "Call or walk in", d: "Give us a ring or just pop by — same-day visits welcome." },
  { t: "Hop in the tub", d: "Raised tubs, so no sore back and no mess at home." },
  { t: "Suds & scrub", d: "Shampoo, conditioner, towels and tools are all included." },
  { t: "Fluff & go", d: "Dry, brush, sniff, snuggle. One fluffy pup, ready to roll." },
];
const HowItWorks = () => (
  <section id="how-it-works" className="bg-primary text-primary-foreground rounded-t-[64px] border-t-[3px] border-secondary py-20 lg:py-28 scroll-mt-20">
    <div className="section-container">
      <h2 className="text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.9] max-w-3xl">Your first self-wash, in four paws.</h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <motion.div key={s.t} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className={`bg-background text-secondary rounded-card border-[3px] border-secondary p-6 ${i % 2 ? "lg:mt-8" : ""}`}>
            <span className="grid place-items-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground font-display text-2xl">{i + 1}</span>
            <h3 className="mt-5 text-2xl">{s.t}</h3>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* 5. REVIEW + DEALS */
const deals = [
  { t: "Happy Hour", s: "Call for details" },
  { t: "Seniors save", s: "Discount available" },
  { t: "Military", s: "Thank you for serving" },
  { t: "Police K-9", s: "Washes FREE", solid: true },
];
const ReviewDeals = () => (
  <section className="bg-secondary text-secondary-foreground py-20 lg:py-28">
    <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 fill-apricot text-apricot" />)}</div>
        <blockquote className="font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">
          “The owners were so helpful and patient with me. I found my spot for Winston's pampering days.”
        </blockquote>
        <p className="overline text-aqua mt-6">From Winston's owner · English Bulldog</p>
        <Link to="/testimonials/" className="mt-8 btn-chunky border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
          Read more reviews <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        {deals.map((d, i) => (
          <motion.div key={d.t} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className={`coupon p-5 sm:p-7 text-secondary ${d.solid ? "bg-apricot" : "bg-background"} ${i % 2 ? "rotate-[1.5deg]" : "-rotate-[1deg]"}`}>
            <p className="overline text-primary">Deal</p>
            <h3 className="mt-2 text-2xl sm:text-3xl leading-none">{d.t}</h3>
            <p className="mt-2 text-sm font-bold">{d.s}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* 6. VISIT */
const Visit = () => (
  <section id="visit" className="py-20 lg:py-28 scroll-mt-20">
    <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="overline mb-4">Visit</p>
        <h2 className="text-secondary text-[clamp(3rem,7vw,5.5rem)] leading-[0.9]">Come splash with us.</h2>
        <p className="mt-6 flex items-start gap-2 text-lg font-bold"><MapPin className="h-5 w-5 mt-1 text-primary" /> 605 156th St E, Tacoma, WA 98445</p>
        <a href="tel:2535313387" className="block mt-4 font-display text-primary text-[clamp(2.5rem,6vw,4.5rem)] leading-none hover:text-secondary transition-colors">(253) 531-3387</a>
        <p className="mt-4 flex items-center gap-2 text-muted-foreground font-bold"><Clock className="h-4 w-4" /> Emergency Hours Available Upon Request</p>
        <div className="mt-8 rounded-card border-[3px] border-secondary overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5!2d-122.403!3d47.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fbe5b1a4e4e7%3A0x6e5c6d6c7c8b9a0b!2s605%20156th%20St%20E%2C%20Tacoma%2C%20WA%2098445!5e0!3m2!1sen!1sus!4v1700000000000"
            width="100%" height="320" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="Mutt Puddles Dog Wash Location"
          />
        </div>
      </motion.div>
      <motion.div id="contact-section" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="bg-card rounded-card border-[3px] border-secondary p-7 md:p-10 lg:mt-16">
        <h3 className="text-secondary text-4xl md:text-5xl leading-none">Send us a bark</h3>
        <span className="squiggle mb-6" aria-hidden />
        <ContactForm />
      </motion.div>
    </div>
  </section>
);

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 80);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageMeta
        title="Home | Mutt Puddles Dog Wash"
        description="Professional dog grooming and self-service wash facility in Tacoma, WA. Since 2007, providing a spa-like experience for you and your furry friends."
      />
      <Hero />
      <Marquee />
      <WashMenu />
      <HowItWorks />
      <ReviewDeals />
      <Visit />
    </>
  );
};

export default Index;
