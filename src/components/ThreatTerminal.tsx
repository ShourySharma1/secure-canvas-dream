import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const threatEvents = [
  { time: "14:02:41", type: "CLONE_DETECTED", detail: "com.fake.banking.app → 94.2% match", severity: "high" },
  { time: "14:02:43", type: "URL_FLAGGED", detail: "rmg-bet365clone.xyz → BLOCKED", severity: "critical" },
  { time: "14:02:45", type: "AD_FRAUD_SCAN", detail: "Intermediary ad #4821 → false claims detected", severity: "medium" },
  { time: "14:02:48", type: "HOSTILE_APP", detail: "APK signature mismatch → quarantined", severity: "high" },
  { time: "14:02:50", type: "CRAWL_COMPLETE", detail: "12 new banned domains identified", severity: "info" },
  { time: "14:02:52", type: "BROWSER_EXT", detail: "Malicious redirect intercepted → user safe", severity: "medium" },
  { time: "14:02:55", type: "ECOSYSTEM_SCAN", detail: "Play Store sweep: 3 clones flagged", severity: "high" },
  { time: "14:02:58", type: "RMG_ALERT", detail: "High-risk gaming URL pattern detected", severity: "critical" },
];

const severityColor: Record<string, string> = {
  critical: "text-red-400",
  high: "text-amber-400",
  medium: "text-primary",
  info: "text-muted-foreground",
};

const ThreatTerminal = () => {
  const [lines, setLines] = useState<typeof threatEvents>([]);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setLines((prev) => {
        const next = [...prev, threatEvents[idx % threatEvents.length]];
        if (next.length > 6) next.shift();
        return next;
      });
      idx++;
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="surface-card rounded-xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          trinetr-i://threat-stream
        </span>
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-[10px] text-green-400/80">LIVE</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-xs leading-relaxed min-h-[200px]">
        {lines.map((line, i) => (
          <motion.div
            key={`${line.time}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="flex gap-3 mb-1.5"
          >
            <span className="text-muted-foreground tabular-nums">[{line.time}]</span>
            <span className={severityColor[line.severity]}>{line.type}:</span>
            <span className="text-foreground/70">{line.detail}</span>
          </motion.div>
        ))}
        <span className="inline-block w-2 h-4 bg-primary/80 cursor-blink" />
      </div>
    </div>
  );
};

export default ThreatTerminal;
