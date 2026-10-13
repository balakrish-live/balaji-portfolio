import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
  achievements,
  education,
  experience,
  type TimelineEntry,
} from "@/data/portfolio";

function Timeline({ title, items }: { title: string; items: TimelineEntry[] }) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <div className="space-y-8 border-l-4 border-line pl-8">
        {items.map((item, i) => (
          <Reveal key={`${item.role}-${i}`} delay={i * 120}>
            <div className="card relative p-6 sm:p-8">
              <span className="absolute top-9 -left-[2.65rem] h-5 w-5 rounded-full border-4 border-white bg-primary shadow" />
              <span className="mb-3 inline-block rounded-md bg-soft px-3 py-1 text-sm font-medium text-heading">
                {item.period}
              </span>
              <h4 className="text-2xl font-bold">{item.role}</h4>
              <p className="text-primary">{item.company}</p>
              {item.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="My journey" title="Experience & Education" />
        <div className="grid gap-14 lg:grid-cols-2">
          <Timeline title="Experience" items={experience} />
          <div>
            <Timeline title="Education" items={education} />
            <Reveal className="mt-14">
              <h3 className="mb-6 text-3xl font-bold">Achievements</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((item) => (
                  <div key={item} className="card flex items-center gap-4 p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-heading text-2xl font-bold text-primary">
                      🏆
                    </span>
                    <p className="font-medium text-heading">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
