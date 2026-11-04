import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { skillCategories, techColors } from "@/data/portfolio";

function TechChip({ name }: { name: string }) {
  return (
    <span className="tech-chip inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-heading text-[15px] font-semibold text-heading">
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ background: techColors[name] ?? "var(--color-primary)" }}
      />
      {name}
    </span>
  );
}

const allTech = skillCategories.flatMap((c) => c.skills);
const rowA = allTech.slice(0, Math.ceil(allTech.length / 2));
const rowB = allTech.slice(Math.ceil(allTech.length / 2));

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {[...items, ...items].map((name, i) => (
          <TechChip key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-soft/60 py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionTitle eyebrow="My skills" title="Technologies I Work With" />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 5) * 90}>
              <div className="skill-card card group relative h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-2">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={category.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechChip key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 space-y-4">
          <Marquee items={rowA} />
          <Marquee items={rowB} reverse />
        </Reveal>
      </div>
    </section>
  );
}
