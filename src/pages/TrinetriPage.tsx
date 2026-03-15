import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EYE_POSITIONS = [
  { cx: 200, cy: 180, label: "Past" },
  { cx: 500, cy: 100, label: "Present" },
  { cx: 800, cy: 180, label: "Future" },
];

const TrinetriEye = ({
  cx,
  cy,
  delay,
  label,
}: {
  cx: number;
  cy: number;
  delay: number;
  label: string;
}) => (
  <g>
    {/* Outer glow */}
    <motion.ellipse
      cx={cx}
      cy={cy}
      rx={80}
      ry={40}
      fill="none"
      stroke="hsl(270 70% 65%)"
      strokeWidth={2}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      style={{ filter: "drop-shadow(0 0 20px hsl(270 70% 65% / 0.6))" }}
    />
    {/* Eye shape */}
    <motion.path
      d={`M${cx - 80},${cy} Q${cx},${cy - 55} ${cx + 80},${cy} Q${cx},${cy + 55} ${cx - 80},${cy}`}
      fill="hsl(270 70% 65% / 0.08)"
      stroke="hsl(270 70% 65%)"
      strokeWidth={2.5}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 12px hsl(270 70% 65% / 0.4))" }}
    />
    {/* Iris */}
    <motion.circle
      cx={cx}
      cy={cy}
      r={22}
      fill="hsl(270 70% 65% / 0.15)"
      stroke="hsl(270 70% 65%)"
      strokeWidth={2}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay + 1 }}
    />
    {/* Pupil */}
    <motion.circle
      cx={cx}
      cy={cy}
      r={10}
      fill="hsl(270 70% 65%)"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        scale: { duration: 2, repeat: Infinity, delay: delay + 1.5 },
        default: { duration: 0.4, delay: delay + 1.2 },
      }}
      style={{ filter: "drop-shadow(0 0 8px hsl(270 70% 65% / 0.8))" }}
    />
    {/* Pupil highlight */}
    <motion.circle
      cx={cx - 4}
      cy={cy - 4}
      r={3}
      fill="hsl(270 70% 90%)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, delay: delay + 1.5 }}
    />
    {/* Scanning beam */}
    <motion.line
      x1={cx}
      y1={cy}
      x2={cx}
      y2={cy}
      stroke="hsl(270 70% 65% / 0.6)"
      strokeWidth={1}
      initial={{ x2: cx, y2: cy }}
      animate={{
        x2: [cx + 60, cx - 60, cx + 40, cx],
        y2: [cy - 30, cy + 20, cy - 10, cy],
      }}
      transition={{ duration: 4, repeat: Infinity, delay: delay + 2, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 4px hsl(270 70% 65% / 0.5))" }}
    />
    {/* Label */}
    <motion.text
      x={cx}
      y={cy + 65}
      textAnchor="middle"
      fill="hsl(270 70% 65%)"
      fontSize={14}
      fontFamily="'Geist Mono', monospace"
      letterSpacing="0.1em"
      initial={{ opacity: 0, y: cy + 75 }}
      animate={{ opacity: 1, y: cy + 65 }}
      transition={{ duration: 0.8, delay: delay + 1.5 }}
    >
      {label.toUpperCase()}
    </motion.text>
  </g>
);

/* Connecting beam between eyes */
const ConnectingBeam = () => (
  <motion.g>
    <motion.line
      x1={280}
      y1={180}
      x2={420}
      y2={100}
      stroke="hsl(270 70% 65% / 0.2)"
      strokeWidth={1}
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    />
    <motion.line
      x1={580}
      y1={100}
      x2={720}
      y2={180}
      stroke="hsl(270 70% 65% / 0.2)"
      strokeWidth={1}
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 2.8 }}
    />
    {/* Triangle connecting all three */}
    <motion.path
      d="M200,180 L500,100 L800,180 Z"
      fill="none"
      stroke="hsl(270 70% 65% / 0.1)"
      strokeWidth={1}
      strokeDasharray="6 6"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: 3 }}
    />
  </motion.g>
);

const TrinetriPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid" />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10">
        {/* Back nav */}
        <div className="container mx-auto px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-md bg-primary/10 border border-primary/20 px-3 py-1 font-mono text-xs text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Trinetr-i Engine
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground mt-4">
              The Three Eyes of{" "}
              <span className="text-primary text-glow">Trinetr-i</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
              Inspired by the divine trident vision — three AI-powered eyes that see through
              deception, analyzing the past, present, and future of every digital threat.
            </p>
          </motion.div>

          {/* Three Eyes Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <svg
              viewBox="0 0 1000 320"
              className="w-full max-w-4xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ConnectingBeam />
              {EYE_POSITIONS.map((eye, i) => (
                <TrinetriEye
                  key={eye.label}
                  cx={eye.cx}
                  cy={eye.cy}
                  delay={i * 0.4}
                  label={eye.label}
                />
              ))}
              {/* Center title */}
              <motion.text
                x={500}
                y={280}
                textAnchor="middle"
                fill="hsl(270 70% 65%)"
                fontSize={18}
                fontFamily="'Geist Mono', monospace"
                fontWeight={600}
                letterSpacing="0.15em"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 3.5 }}
                style={{ filter: "drop-shadow(0 0 10px hsl(270 70% 65% / 0.6))" }}
              >
                TRINETR-I
              </motion.text>
            </svg>
          </motion.div>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              {
                title: "Eye of the Past",
                desc: "Analyzes historical threat patterns, malware signatures, and attack vectors from global databases.",
              },
              {
                title: "Eye of the Present",
                desc: "Real-time monitoring of app stores, digital ecosystems, and network traffic for active threats.",
              },
              {
                title: "Eye of the Future",
                desc: "Predictive AI models that anticipate emerging threats before they materialize.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + i * 0.2 }}
                className="surface-card surface-card-hover rounded-lg p-6 transition-all"
              >
                <h3 className="text-foreground font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrinetriPage;
