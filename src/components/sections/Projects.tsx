import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/portfolio";

const gradients = [
  "from-[#5237f9] to-primary",
  "from-[#ED145B] to-[#4A11EB]",
  "from-[#E42032] to-[#1273EB]",
  "from-[#03041c] to-[#0612b3]",
];

function ProjectLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: React.ReactNode;
}) {
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-soft py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Latest work" title="Featured Projects" />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <ProjectLink
                href={project.href}
                className="card group block h-full overflow-hidden p-4 transition duration-300 hover:-translate-y-2"
              >
                {/* Replace with a project screenshot via next/image when available */}
                <div
                  className={`flex h-52 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]}`}
                >
                  <span className="font-heading text-4xl font-bold text-white/90 transition duration-500 group-hover:scale-110">
                    {project.title}
                  </span>
                </div>
                <div className="p-4">
                  <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
                    {project.category}
                  </p>
                  <h3 className="mb-3 flex items-center justify-between text-2xl font-bold">
                    {project.title}
                    {project.href && (
                      <Icon
                        name="arrow"
                        className="h-5 w-5 transition group-hover:text-primary"
                      />
                    )}
                  </h3>
                  <p className="mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white px-3 py-1 text-xs font-medium text-heading"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ProjectLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
