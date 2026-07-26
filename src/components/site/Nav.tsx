import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#who", label: "Who We Are" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 hairline-b py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span
            className={`display text-xl md:text-2xl transition-transform duration-500 ${
              scrolled ? "scale-90" : ""
            }`}
          >
            Eventology
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent shimmer" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Plan Your Event
          <span aria-hidden>↗</span>
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className="w-6 h-px bg-foreground" />
          <span className="w-6 h-px bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-t mt-3 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground rounded-full"
            >
              Plan Your Event
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
