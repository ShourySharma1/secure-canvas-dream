import { motion } from "framer-motion";
import { Code2, Globe, Scan, Shield, Search, Settings } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Lightweight Detection Engine",
    description: "Detects fraudulent, cloned, and hostile-nation apps with minimal compute, making it scalable and resource-friendly.",
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    icon: Globe,
    title: "Ecosystem Protection",
    description: "Blocks malicious app distribution at multiple ecosystem points for maximum threat coverage.",
    span: "lg:col-span-1",
  },
  {
    icon: Code2,
    title: "AI-Powered Analysis",
    description: "Identifies deceptive ads by analyzing fraud patterns and suspicious behaviors.",
    span: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "Browser Extension",
    description: "Real-time detection and flagging of malicious or suspicious URLs.",
    span: "lg:col-span-1",
  },
  {
    icon: Search,
    title: "Intelligent Crawler",
    description: "Continuously scans for banned domains and detects alternate malicious URLs targeting RMG sites.",
    span: "lg:col-span-1",
  },
  {
    icon: Settings,
    title: "Enterprise Custom",
    description: "Fine-tuned configurations tailored to your organization's unique security requirements.",
    span: "lg:col-span-2",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: [0.2, 0, 0, 1] as const },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const } },
};

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            Key Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tighter text-foreground">
            An Advanced AI Security Solution
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Purpose-built to detect and neutralize threats across the entire digital app ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={`surface-card surface-card-hover rounded-xl p-6 transition-all duration-300 ${feature.span}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

              {feature.large && (
                <div className="mt-6 surface-card rounded-lg p-4 font-mono text-xs">
                  <div className="text-muted-foreground mb-2">// Detection pipeline</div>
                  <div><span className="text-primary">scan</span>(<span className="text-amber-400">"play_store"</span>, {"{"}</div>
                  <div className="pl-4"><span className="text-muted-foreground">depth:</span> <span className="text-green-400">3</span>,</div>
                  <div className="pl-4"><span className="text-muted-foreground">mode:</span> <span className="text-amber-400">"deep_clone_match"</span>,</div>
                  <div className="pl-4"><span className="text-muted-foreground">threshold:</span> <span className="text-green-400">0.85</span></div>
                  <div>{"}"});</div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
