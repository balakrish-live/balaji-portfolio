export default function SectionTitle({
  eyebrow,
  title,
  center = true,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <p className="mb-3 text-sm font-medium tracking-[0.2em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}
