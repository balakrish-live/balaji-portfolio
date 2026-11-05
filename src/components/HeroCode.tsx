// Decorative code lines typed out behind the hero banner. Pure CSS animation.

type Token = [kind: "kw" | "fn" | "str" | "ty" | "dec" | "pl", text: string];

const blocks: { top: string; lines: Token[][] }[] = [
  {
    top: "17%",
    lines: [
      [["dec", "@Controller"], ["pl", "("], ["str", "'videos'"], ["pl", ")"]],
      [["kw", "export class "], ["ty", "VideoController"], ["pl", " {"]],
      [["pl", "  "], ["kw", "constructor"], ["pl", "(private s3: "], ["ty", "S3Service"], ["pl", ") {}"]],
      [],
      [["pl", "  "], ["dec", "@Post"], ["pl", "("], ["str", "'upload'"], ["pl", ")"]],
      [["pl", "  "], ["kw", "async "], ["fn", "upload"], ["pl", "(dto: "], ["ty", "UploadDto"], ["pl", ") {"]],
      [["pl", "    "], ["kw", "const "], ["pl", "url = this.s3."], ["fn", "presign"], ["pl", "(dto);"]],
      [["pl", "    "], ["kw", "return "], ["pl", "{ url, status: "], ["str", "'queued'"], ["pl", " };"]],
      [["pl", "  }"]],
      [["pl", "}"]],
    ],
  },
  {
    top: "60%",
    lines: [
      [["kw", "const "], ["fn", "Developer"], ["pl", " = () => {"]],
      [["pl", "  "], ["kw", "const "], ["pl", "[stack] = "], ["fn", "useState"], ["pl", "(["]],
      [["pl", "    "], ["str", "'React'"], ["pl", ", "], ["str", "'Next.js'"], ["pl", ", "], ["str", "'NestJS'"], ["pl", ","]],
      [["pl", "  ]);"]],
      [["pl", "  "], ["kw", "return "], ["pl", "<"], ["ty", "Stack"], ["pl", " items={stack} />;"]],
      [["pl", "};"]],
    ],
  },
];

const LINE_STEP = 0.8; // seconds between lines starting to type

export default function HeroCode() {
  let index = 0;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] px-10 min-[1360px]:block"
    >
      {blocks.map((block, bi) => (
        <pre
          key={bi}
          className="hero-code absolute"
          style={{ top: block.top, left: "calc(40px + 576px + 2rem)" }}
        >
          {block.lines.map((tokens, li) => {
            const length = tokens.reduce((n, [, t]) => n + t.length, 0);
            const delay = index++ * LINE_STEP;
            return (
              <span
                key={li}
                className="hero-code-line"
                style={
                  {
                    "--len": length,
                    animationDelay: `${delay}s`,
                  } as React.CSSProperties
                }
              >
                {tokens.map(([kind, text], ti) => (
                  <span key={ti} className={`tok-${kind}`}>
                    {text}
                  </span>
                ))}
                {length === 0 && " "}
              </span>
            );
            
          })}
        </pre>
      ))}
    </div>
  );
}
