import { Link } from "react-router-dom";

export default function IssueNav({ prev, next }) {
  return (
    <div className="reading-column pt-16 pb-8">
      <div className="hairline mb-8" />

      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          {prev && (
            <Link
              to={`/issues/${prev.slug}`}
              className="group block"
            >
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                Previous
              </p>
              <p className="font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                {prev.title}
              </p>
            </Link>
          )}
        </div>

        <div className="flex-1 text-right">
          {next && (
            <Link
              to={`/issues/${next.slug}`}
              className="group block"
            >
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                Next
              </p>
              <p className="font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                {next.title}
              </p>
            </Link>
          )}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          ← Back to issues
        </Link>
      </div>
    </div>
  );
}