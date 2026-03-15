import { motion } from "framer-motion";
import ThreatTerminal from "./ThreatTerminal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: [0.2, 0, 0, 1] as const },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const } },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid" />
      
      {/* Cyan glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center"
        >
          {/* Left */}
          <div className="space-y-6">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-md bg-primary/10 border border-primary/20 px-3 py-1 font-mono text-xs text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Trinetr-i Active
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Detect before they{" "}
              <span className="text-primary text-glow">deploy.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              AI-powered detection and mitigation of fake, cloned, and hostile apps.
              Protecting digital ecosystems for LEAs and enterprises. No agents. No latency.
              Total visibility.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#features"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                Explore Features
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 active:scale-[0.98]"
              >
                Contact Us
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-8 pt-6 border-t border-border/50">
              {[
                { value: "99.9%", label: "Detection Rate" },
                { value: "<50ms", label: "Response Time" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl font-semibold text-foreground tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div variants={item} className="animate-float">
            <ThreatTerminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
