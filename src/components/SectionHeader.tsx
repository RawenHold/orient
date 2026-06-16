type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase text-cobalt">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-ink md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}
