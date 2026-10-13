import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { skillGroups, tools } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-soft py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="My skills" title="Technologies I Work With" />

        <div className="grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 150}>
              <div className="card h-full p-8 sm:p-10">
                <h3 className="mb-8 text-3xl font-bold">
                  {group.title}{" "}
                  <span className="text-primary">Skills</span>
                </h3>
                <div className="space-y-7">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between font-heading text-lg font-semibold text-heading">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-line">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#5237f9] to-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line bg-white px-5 py-2 font-heading text-lg font-semibold text-heading shadow-sm transition hover:border-primary hover:text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
