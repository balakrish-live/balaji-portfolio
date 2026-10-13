import Image from "next/image";
import Icon from "@/components/Icon";
import TypedRoles from "@/components/TypedRoles";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-soft to-white pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-primary uppercase">
            Welcome to my world
          </p>
          <h1 className="text-4xl leading-tight font-bold sm:text-6xl">
            Hi, I&apos;m <span className="whitespace-nowrap text-primary">{profile.name}</span>
            <br />a <TypedRoles roles={profile.roles} />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-8 py-4 font-heading text-lg font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              View Portfolio
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="card px-8 py-4 font-heading text-lg font-semibold text-heading transition hover:-translate-y-0.5 hover:text-primary"
            >
              Download CV
            </a>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-sm font-medium tracking-widest text-heading uppercase">
              Find me on
            </p>
            <div className="flex gap-4">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="card flex h-14 w-14 items-center justify-center text-heading transition hover:-translate-y-1 hover:text-primary"
                >
                  <Icon name={s.label} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="animate-float relative">
            <div className="absolute -inset-4 -z-10 rotate-6 rounded-[2rem] bg-gradient-to-tr from-primary to-[#5237f9] opacity-90" />
            <div className="card overflow-hidden rounded-[2rem] p-3">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={896}
                height={1195}
                priority
                className="h-[420px] w-[315px] rounded-[1.5rem] object-cover object-top sm:h-[520px] sm:w-[390px]"
              />
            </div>
            <div className="card absolute -bottom-6 -left-2 px-5 py-4 sm:-left-6">
              <p className="font-heading text-xl font-bold text-heading">
                Open to work
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
