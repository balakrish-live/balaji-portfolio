"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/portfolio";

const inputClass =
  "w-full rounded-lg border-2 border-line bg-white px-4 py-3 text-heading outline-none transition focus:border-primary";

export default function Contact() {
  const emptyForm = { name: "", email: "", message: "", website: "" };
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Posts to /api/contact, which emails the message via Resend.
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setForm(emptyForm);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const info = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: "pin", label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Get in touch" title="Let's Work Together" />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full p-8 sm:p-10">
              <h3 className="mb-4 text-3xl font-bold">{profile.name}</h3>
              <p className="mb-8 leading-relaxed">
                I&apos;m open to freelance projects and full-time roles. Drop me
                a message and I&apos;ll get back to you soon.
              </p>
              <ul className="space-y-6">
                {info.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="break-all font-medium text-heading hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-heading">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={150}>
            <form onSubmit={onSubmit} className="card space-y-6 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium uppercase">Your Name</span>
                  <input
                    required
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium uppercase">Email</span>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium uppercase">Message</span>
                <textarea
                  required
                  rows={6}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              {/* Honeypot for spam bots; hidden from people and screen readers */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-primary px-8 py-4 font-heading text-lg font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p aria-live="polite" className="text-center text-sm">
                {status === "sent" && (
                  <span className="text-green-600">Thanks! Your message has been sent. I&apos;ll get back to you soon.</span>
                )}
                {status === "error" && (
                  <span className="text-primary">
                    {errorMsg} You can also email me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
