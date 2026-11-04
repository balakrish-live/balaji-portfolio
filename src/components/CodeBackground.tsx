// Site-wide decorative background: a slowly panning grid, drifting code
// symbols and two soft colour glows. Pure CSS, no client JS.

const glyphs = [
  { text: "</>", left: "4%", size: 28, duration: 26, delay: 0 },
  { text: "{ }", left: "14%", size: 22, duration: 32, delay: -12 },
  { text: "=>", left: "24%", size: 18, duration: 24, delay: -5 },
  { text: "const", left: "33%", size: 16, duration: 36, delay: -20 },
  { text: "( )", left: "42%", size: 24, duration: 28, delay: -9 },
  { text: "&&", left: "51%", size: 18, duration: 30, delay: -16 },
  { text: "[ ]", left: "60%", size: 22, duration: 34, delay: -3 },
  { text: "async", left: "68%", size: 16, duration: 27, delay: -22 },
  { text: "</>", left: "76%", size: 20, duration: 31, delay: -7 },
  { text: "npm run", left: "84%", size: 15, duration: 38, delay: -14 },
  { text: "{ }", left: "92%", size: 26, duration: 25, delay: -18 },
  { text: "0101", left: "9%", size: 14, duration: 40, delay: -28 },
  { text: "git push", left: "47%", size: 14, duration: 42, delay: -33 },
  { text: "=>", left: "88%", size: 20, duration: 29, delay: -25 },
];

export default function CodeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="code-grid absolute inset-0" />
      <div className="code-glow code-glow-a" />
      <div className="code-glow code-glow-b" />
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="code-glyph"
          style={{
            left: g.left,
            fontSize: `${g.size}px`,
            animationDuration: `${g.duration}s`,
            animationDelay: `${g.delay}s`,
          }}
        >
          {g.text}
        </span>
      ))}
    </div>
  );
}
