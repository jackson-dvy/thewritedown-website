import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getIssueBySlug, getAdjacentIssues } from "../data/issues";
import SectionBreak from "../components/issue/SectionBreak";
import IssueNav from "../components/issue/IssueNav";
import ScrollProgress from "../components/issue/ScrollProgress";
import Footer from "../components/layout/Footer";

export default function IssuePage() {
  const { slug } = useParams();
  const issue = getIssueBySlug(slug);
  const { prev, next } = getAdjacentIssues(slug);

  if (!issue) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <ScrollProgress />

      <motion.article
        key={slug}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Issue header */}
        <div className="reading-column pt-8 md:pt-12 pb-10 md:pb-14">
          <p className="font-mono text-[11px] md:text-xs tracking-[0.12em] uppercase text-muted-foreground mb-6">
            Issue {issue.number} — {issue.season}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-[3.2rem] font-medium tracking-tight text-foreground leading-[1.1]">
            {issue.title}
          </h1>
        </div>

        <div className="hairline" />

        {/* Body sections */}
        <div className="reading-column pt-10 md:pt-14">
          {issue.body.map((section, i) => (
            <div key={section.section}>
              {i > 0 && <SectionBreak numeral={section.section} />}
              <div>
                {section.content.split("\n\n").map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-body text-base md:text-[1.25rem] text-foreground leading-[1.72] mb-6 md:mb-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.article>

      <IssueNav prev={prev} next={next} />
      <Footer />
    </main>
  );
}