export const Footer = () => (
  <footer className="py-10 border-t border-border/50">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
  <p className="text-center">
  © {new Date().getFullYear()}{" "}
  <span className="gradient-text font-semibold">Jeevan Patil</span>. All rights reserved.
  </p>
    </div>
  </footer>
);
