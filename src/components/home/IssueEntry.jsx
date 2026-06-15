import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function IssueEntry({ issue, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: "easeOut" }}
    >
      <Link to={`/issues/${issue.slug}`} className="group block">
        <div className="reading-column py-8 md:py-10 transition-colors duration-300 group-hover:bg-muted/40">
          <p className="font-mono text-[11px] md:text-xs tracking-[0.12em] uppercase text-muted-foreground mb-3 transition-transform duration-300 group-hover:translate-x-2">
            Issue {issue.number} — {issue.season}
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[2.1rem] font-medium text-foreground leading-snug mb-3">
            {issue.title}
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-[580px]">
            {issue.description}
          </p>
        </div>
      </Link>
      <div className="hairline" />
    </motion.div>
  );
}