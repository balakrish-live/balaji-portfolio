import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { profile, services, stats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-primary uppercase">
            About me
          </p>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
            {profile.title} based in {profile.location.split(",")[0]}
          </h2>
          <p className="text-lg leading-relaxed">{profile.about}</p>
        </Reveal>

        <div className="mb-24 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="card p-8 text-center">
                <p className="font-heading text-5xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionTitle eyebrow="What I do" title="Services I Offer" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="card group h-full p-8 transition duration-300 hover:-translate-y-2">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
