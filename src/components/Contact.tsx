import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 border-t border-border/30">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tighter text-foreground">
            Let's make the Indian landscape safer.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Get in touch to learn how Crypsis Trinetr-i can protect your digital ecosystem.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: Mail, label: "aryan@crypsis.com" },
              { icon: Phone, label: "+91 96507 84785" },
              { icon: MapPin, label: "Greater Noida West, Uttar Pradesh, India" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="surface-card rounded-xl p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Name</label>
            <input className="w-full rounded-md bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Email</label>
            <input className="w-full rounded-md bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" placeholder="you@company.com" type="email" />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Message</label>
            <textarea className="w-full rounded-md bg-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors min-h-[100px] resize-none" placeholder="Tell us about your needs..." />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default Contact;
