const Footer = () => (
  <footer className="border-t border-border/30 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
          <span className="font-mono text-xs font-semibold text-primary">C</span>
        </div>
        <span className="text-sm font-medium text-foreground">CRYPSIS</span>
        <span className="text-xs text-muted-foreground ml-1">by Delusion AI Solutions LLP</span>
      </div>
      <div className="flex gap-6">
        {["Home", "Features", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <a
        href="https://www.crypsis.in"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        www.crypsis.in
      </a>
    </div>
  </footer>
);

export default Footer;
