"use client";

import { useEffect, useState } from "react";

export default function TypedRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === current) delay = 1600;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          current.slice(0, deleting ? text.length - 1 : text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-primary">
      {text}
      <span className="blink-caret ml-0.5 inline-block w-[3px] bg-primary align-middle">
        &nbsp;
      </span>
    </span>
  );
}
