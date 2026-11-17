type SectionIntroProps = {
  /** Small monospaced label above the heading. */
  label: string;
  title: string;
  headingId: string;
};

/** Section opening: a small monospaced label, then the heading. */
export function SectionIntro({ label, title, headingId }: SectionIntroProps) {
  return (
    <>
      <p className="eyebrow">{label}</p>
      <h2
        id={headingId}
        className="mt-3 max-w-[32ch] text-[1.75rem] leading-tight font-semibold tracking-tight sm:text-[2rem]"
      >
        {title}
      </h2>
    </>
  );
}
