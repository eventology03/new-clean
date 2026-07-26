import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";

import hero from "@/assets/hero.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--f309e2b4-d0ad-4432-9157-51b77d6741d3.lovable.app/og.jpg",
      },
    ],
  }),
});

const vmg = [
  {
    n: "01",
    label: "Vision",
    title: "The trusted force behind seamlessly executed events.",
    body: "To be the trusted force behind seamlessly executed events, where structure, clarity, and disciplined execution turn ideas into reliable outcomes.",
  },
  {
    n: "02",
    label: "Mission",
    title: "Every detail, our responsibility.",
    body: "We plan, design, and execute events as a unified operation, taking full responsibility for every detail to ensure each event is delivered exactly as intended.",
  },
  {
    n: "03",
    label: "Goal",
    title: "Complexity removed, reliability delivered.",
    body: "Our goal is to remove complexity from event execution by delivering controlled, coordinated, and dependable event experiences.",
  },
];

const chapters = [
  {
    n: "01",
    label: "Who We Are",
    body: "Eventology is a discipline-first event operations studio. We exist to turn event execution from a source of risk into a formality — an outcome you can count on before the first invitation goes out.",
  },
  {
    n: "02",
    label: "What We Do",
    body: "We handle every layer of the event: planning, design, on-site supervision, hospitality, technical production, and visual identity — under a single accountable operation.",
  },
  {
    n: "03",
    label: "How We Do It",
    body: "Our scope is not limited to predefined services. We adapt to each event's needs, sourcing and coordinating any required solution to achieve the intended outcome.",
  },
  {
    n: "04",
    label: "Why Choose Us",
    body: "Because a successful event is not just something that happened — it's something delivered exactly as intended. That standard, and the operational discipline behind it, is our biggest strength.",
  },
];

const services = [
  {
    n: "01",
    title: "Event Planning & Management",
    body: "From concept to execution, comprehensive solutions for conferences, meetings, and events across corporate and private clients.",
  },
  {
    n: "02",
    title: "On-Site Supervision & Execution",
    body: "Precise on-site oversight ensuring smooth event flow and the highest quality across every detail on the day of the event.",
  },
  {
    n: "03",
    title: "Equipment & Décor",
    body: "Table and seating setups, floral arrangements, and furniture selection aligned with the event's identity.",
  },
  {
    n: "04",
    title: "Hospitality & Catering",
    body: "Premium buffets, beverages, professional serving, and a trained hospitality team for an exceptional guest experience.",
  },
  {
    n: "05",
    title: "Technical & Visual Production",
    body: "Advanced sound and lighting, display screens, photography and video equipment, and full media coverage.",
  },
  {
    n: "06",
    title: "Visual Identity & Design",
    body: "Invitations, advertisements, and visual systems that reflect the character of the event and the organizing brand.",
  },
];

const works = [
  { img: event1, name: "Sovereign Gala", type: "Corporate Gala", year: "2025" },
  { img: event2, name: "Meridian Launch", type: "Product Launch", year: "2025" },
  { img: event3, name: "Villa Cascadia", type: "Private Wedding", year: "2024" },
  { img: event4, name: "Horizon Summit", type: "Conference", year: "2024" },
  { img: event5, name: "Silent Objects", type: "Exhibition Opening", year: "2024" },
  { img: event6, name: "Studio Noir SS26", type: "Runway Show", year: "2024" },
];

const marqueeItems = [
  "Corporate Galas",
  "Product Launches",
  "Private Ceremonies",
  "Conferences",
  "Exhibitions",
  "Runway Shows",
  "Brand Activations",
  "Cultural Programming",
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <VMG />
      <Chapters />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 md:pt-40 md:pb-24 overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-[1400px] w-full px-6 md:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="eyebrow mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          Event Operations, Engineered
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[13vw] md:text-[8.5vw] lg:text-[7.2rem] xl:text-[8.5rem] max-w-6xl"
        >
          Structure, <em className="italic text-accent font-normal">Clarity</em>,
          <br />
          Disciplined Execution.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end"
        >
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            We plan, design, and execute events as a unified operation — taking full
            responsibility for every detail so each event is delivered exactly as
            intended.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-accent-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-hairline hover:border-accent hover:text-accent transition-colors"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-10 eyebrow flex items-center gap-2"
      >
        Scroll
        <span className="w-12 h-px bg-muted-foreground relative overflow-hidden">
          <motion.span
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent"
          />
        </span>
      </motion.div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="hairline-t hairline-b py-6 overflow-hidden">
      <div className="flex gap-14 marquee w-max whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-14 text-lg">
            <span className="text-muted-foreground">{t}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- VISION / MISSION / GOAL ---------- */
function VMG() {
  return (
    <section className="py-24 md:py-36 mx-auto max-w-[1400px] px-6 md:px-10">
      <Reveal className="eyebrow mb-10">Guiding Principles</Reveal>
      <Stagger className="grid md:grid-cols-3 gap-0 hairline-t">
        {vmg.map((v, i) => (
          <motion.div
            key={v.n}
            variants={staggerItem}
            className={`py-10 md:py-14 md:px-10 ${
              i > 0 ? "md:border-l md:border-hairline" : ""
            } ${i > 0 ? "hairline-t md:border-t-0" : ""}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-accent">{v.n}</span>
              <span className="eyebrow">{v.label}</span>
            </div>
            <h3 className="display text-2xl md:text-3xl mb-6 leading-tight">
              {v.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{v.body}</p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------- CHAPTERS ---------- */
function Chapters() {
  return (
    <section
      id="who"
      className="relative py-24 md:py-40 mx-auto max-w-[1400px] px-6 md:px-10"
    >
      <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-20 mb-16">
        <Reveal className="eyebrow">Who We Are</Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-6xl max-w-3xl">
            A studio built around one idea: an event delivered exactly as intended.
          </h2>
        </Reveal>
      </div>

      <div className="space-y-0">
        {chapters.map((c, i) => (
          <Reveal
            key={c.n}
            delay={i * 0.05}
            className="grid md:grid-cols-[300px_1fr] gap-6 md:gap-20 py-10 md:py-14 hairline-t group"
          >
            <div className="flex items-baseline gap-4">
              <span className="display text-6xl md:text-8xl text-accent/30 group-hover:text-accent transition-colors duration-700">
                {c.n}
              </span>
            </div>
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">{c.label}</p>
              <p className="text-2xl md:text-3xl display font-light leading-snug">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-36 border-y border-hairline bg-surface/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-20 mb-16">
          <Reveal className="eyebrow">What We Handle</Reveal>
          <Reveal>
            <h2 className="display text-4xl md:text-6xl max-w-3xl">
              Six disciplines. <em className="italic text-accent">One operation.</em>
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              variants={staggerItem}
              className={`group relative p-8 md:p-10 border-hairline hairline-t ${
                i % 3 !== 0 ? "lg:border-l" : ""
              } ${i % 2 !== 0 ? "md:border-l lg:border-l" : ""} hover:bg-surface-2/60 transition-colors duration-500`}
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-xs text-accent">{s.n}</span>
                <span className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-sm group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-500 group-hover:rotate-45">
                  +
                </span>
              </div>
              <h3 className="display text-2xl md:text-3xl mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.body}
              </p>
              <span className="absolute left-0 bottom-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- WORK ---------- */
function Work() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, show: false });

  return (
    <section
      id="work"
      onMouseMove={(e) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }))}
      className="relative py-24 md:py-36 mx-auto max-w-[1400px] px-6 md:px-10"
    >
      <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-20 mb-16">
        <Reveal className="eyebrow">Selected Events</Reveal>
        <Reveal>
          <h2 className="display text-4xl md:text-6xl max-w-3xl">
            Executed, <em className="italic text-accent">not improvised.</em>
          </h2>
        </Reveal>
      </div>

      <Stagger className="grid md:grid-cols-2 gap-6 md:gap-8">
        {works.map((w, i) => (
          <motion.a
            key={w.name}
            href="#contact"
            variants={staggerItem}
            onMouseEnter={() => setCursor((c) => ({ ...c, show: true }))}
            onMouseLeave={() => setCursor((c) => ({ ...c, show: false }))}
            className={`group relative overflow-hidden bg-surface ${
              i % 3 === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden ${
                i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={w.img}
                alt={w.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
              <div>
                <p className="eyebrow mb-2">
                  {w.type} — {w.year}
                </p>
                <h3 className="display text-2xl md:text-4xl">{w.name}</h3>
              </div>
              <span className="hidden md:inline-block w-12 h-12 rounded-full border border-hairline bg-background/40 backdrop-blur flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all">
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </Stagger>

      {/* cursor-follow label */}
      <motion.div
        animate={{
          x: cursor.x + 16,
          y: cursor.y + 16,
          opacity: cursor.show ? 1 : 0,
          scale: cursor.show ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.4 }}
        className="pointer-events-none fixed top-0 left-0 z-40 px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest"
      >
        View Event
      </motion.div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 30%, oklch(0.74 0.12 78 / 0.25), transparent 70%), radial-gradient(50% 50% at 80% 60%, oklch(0.5 0.15 30 / 0.18), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="eyebrow mb-8">Let's Talk</Reveal>
        <Reveal>
          <h2 className="display text-5xl md:text-8xl lg:text-9xl leading-[0.95] max-w-6xl mb-16">
            Tell us what you're <em className="italic text-accent">building.</em>
            <br />
            We'll handle how.
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6" stagger={0.15}>
          <motion.a
            variants={staggerItem}
            href="https://wa.me/+966546355123"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden p-10 md:p-14 bg-surface border border-hairline hover:border-accent transition-colors"
          >
            <div className="flex items-start justify-between mb-16">
              <span className="eyebrow">Fastest response</span>
              <span className="w-3 h-3 rounded-full bg-accent shimmer" />
            </div>
            <h3 className="display text-4xl md:text-5xl mb-3">Chat on WhatsApp</h3>
            <p className="text-muted-foreground mb-8">
              Get a reply during operating hours, usually within the hour.
            </p>
            <div className="inline-flex items-center gap-3 text-accent">
              Open WhatsApp
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </div>
          </motion.a>

          <motion.a
            variants={staggerItem}
            href="mailto:info@eventology.sa"
            className="group relative overflow-hidden p-10 md:p-14 bg-surface border border-hairline hover:border-accent transition-colors"
          >
            <div className="flex items-start justify-between mb-16">
              <span className="eyebrow">For briefs & RFPs</span>
              <span className="w-3 h-3 rounded-full bg-foreground/40" />
            </div>
            <h3 className="display text-4xl md:text-5xl mb-3">Email us</h3>
            <p className="text-muted-foreground mb-8">
              Send a brief, deck, or a paragraph — we'll write back with next steps.
            </p>
            <div className="inline-flex items-center gap-3 text-accent">
              info@eventology.sa
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </div>
          </motion.a>
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <h3 className="display text-3xl md:text-4xl mb-4">Eventology</h3>
            <p className="text-muted-foreground max-w-sm">
              Structure. Clarity. Execution.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#who" className="hover:text-accent transition-colors">Who We Are</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@eventology.sa" className="hover:text-accent transition-colors">info@eventology.sa</a></li>
              <li><a href="https://wa.me/+966546355123" className="hover:text-accent transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline-t pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Eventology. All rights reserved.</p>
          <p className="font-mono">Event Operations, Engineered.</p>
        </div>

        <div className="mt-16 select-none">
          <p className="display text-[18vw] leading-none text-accent/10 tracking-tighter">
            Eventology
          </p>
        </div>
      </div>
    </footer>
  );
}
