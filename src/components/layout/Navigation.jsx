import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navigation() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="reading-column pt-10 pb-8 md:pt-14 md:pb-10"
    >
      <div className="flex items-baseline justify-between">
        <Link
          to="/"
          className="font-display text-sm md:text-base tracking-wide text-foreground hover:text-primary transition-colors duration-300"
        >
          The Write Down
        </Link>
        <div className="flex items-baseline gap-6 md:gap-8">
          <Link
            to="/about"
            className={`font-mono text-[11px] md:text-xs tracking-widest uppercase transition-colors duration-300 ${
              location.pathname === "/about"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`font-mono text-[11px] md:text-xs tracking-widest uppercase transition-colors duration-300 ${
              location.pathname === "/contact"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}