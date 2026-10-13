import Icon from "@/components/Icon";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <a href="#home" className="font-heading text-3xl font-bold text-heading">
          {profile.shortName}
          <span className="text-primary">.</span>
        </a>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="card flex h-11 w-11 items-center justify-center text-heading hover:text-primary"
            >
              <Icon name={s.label} className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
