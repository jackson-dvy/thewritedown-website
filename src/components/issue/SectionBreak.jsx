export default function SectionBreak({ numeral }) {
  return (
    <div className="flex items-center justify-center py-12 md:py-16">
      <span className="font-mono text-xs text-muted-foreground tracking-widest">
        {numeral}
      </span>
    </div>
  );
}