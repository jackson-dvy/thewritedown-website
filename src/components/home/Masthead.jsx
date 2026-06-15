import { motion } from "framer-motion";

export default function Masthead() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="reading-column pt-8 pb-16 md:pt-12 md:pb-24"
    >
      <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-foreground leading-[1.05]">
        The Write Down
      </h1>
      <p className="mt-6 md:mt-8 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-[540px]">
        A quarterly examination of the dilemmas facing allocators at endowments,
        sovereign funds, and family offices.
      </p>
    </motion.div>
  );
}