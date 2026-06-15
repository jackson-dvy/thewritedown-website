import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="reading-column pt-8 md:pt-12 pb-8"
      >
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-12 md:mb-16">
          Contact
        </h1>

        <div className="max-w-[540px]">
          <p className="font-body text-base md:text-[1.125rem] text-muted-foreground leading-[1.75] mb-10">
            Get in touch.
          </p>

          <a
            href="mailto:contact@thewritedown.co"
            className="font-display text-2xl md:text-3xl text-foreground underline decoration-[0.5px] underline-offset-8 hover:text-primary transition-colors duration-300"
          >
            contact@thewritedown.co
          </a>

          <div className="hairline mt-10" />
        </div>
      </motion.div>
      <Footer />
    </main>
  );
}