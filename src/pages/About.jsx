import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <main>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="reading-column pt-8 md:pt-12 pb-8"
      >
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-12 md:mb-16">
          About
        </h1>

        <div className="max-w-[540px] space-y-6 font-body text-base md:text-[1.125rem] text-foreground leading-[1.75]">
          <p>
            The Write Down is an independent publication examining real, current
            dilemmas in institutional capital allocation. Each quarterly issue
            explores a single question — built from conversations with
            practitioners at endowments, sovereign wealth funds, multi-family
            offices, and single family offices — and written in a voice that
            prioritizes honesty over polish.
          </p>

          <p>
            Most research on institutional capital comes from people with
            something to sell: managers seeking allocations, consultants seeking
            mandates, platforms seeking assets. The Write Down has no commercial
            interest in any conclusion. The work exists because the questions are
            worth exploring carefully, and because the people who live with these
            dilemmas deserve writing that takes them as seriously as they do.
          </p>

          <p>
            The format is simple. Each issue follows a five-part structure: an
            opening observation, the dilemma and why it matters, perspectives
            from practitioners, an editorial synthesis, and a closing question
            left deliberately open. It is published quarterly, written for
            people who want to think seriously about problems without clean
            answers.
          </p>

          <p>
            If you are an allocator with a relevant perspective, a dilemma worth
            examining, or simply a view on something we've written, we'd welcome
            the conversation.{" "}
            <Link
              to="/contact"
              className="text-primary underline decoration-[0.5px] underline-offset-4 hover:decoration-foreground transition-colors duration-300"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </motion.article>
      <Footer />
    </main>
  );
}