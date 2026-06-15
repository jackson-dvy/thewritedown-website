import Masthead from "../components/home/Masthead";
import IssueEntry from "../components/home/IssueEntry";
import Footer from "../components/layout/Footer";

import { getAllIssues } from "../data/issues";

export default function Home() {
  const issues = getAllIssues();

  return (
    <main>
      <Masthead />

      <div className="hairline" />

      {issues.map((issue, i) => (
        <IssueEntry
          key={issue.slug}
          issue={issue}
          index={i}
        />
      ))}

      <Footer />
    </main>
  );
}