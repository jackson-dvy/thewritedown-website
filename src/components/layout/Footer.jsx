import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="reading-column pb-14 pt-20 md:pt-28"
    >
      <div className="hairline mb-6" />
      <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
        Published quarterly
      </p>
    </motion.footer>
  );
}