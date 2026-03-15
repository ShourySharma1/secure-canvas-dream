import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Continuous Scanning",
    description: "Our intelligent crawlers scan app stores, ad networks, and the open web 24/7 for threats.",
  },
  {
    num: "02",
    title: "AI Analysis",
    description: "Deep learning models analyze APK signatures, ad patterns, and URL behaviors to detect clones and fraud.",
  },
  {
    num: "03",
    title: "Instant Response",
    description: "Threats are quarantined and flagged in real-time. LEAs and enterprises receive actionable intelligence.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 border-t border-border/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="font-mono text-xs text-primary uppercase tracking-widest">Process</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tighter text-foreground">
          How It Works
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="surface-card surface-card-hover rounded-xl p-8 relative transition-all duration-300"
          >
            <span className="font-mono text-4xl font-bold text-primary/15">{step.num}</span>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
