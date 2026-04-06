import type { DialogLine } from "@/data/types";

interface DialogBubblesProps {
  lines: DialogLine[];
  title?: string;
}

const speakerColors: Record<string, string> = {};
const palette = [
  "gradient-primary text-white",
  "gradient-accent text-white",
];

function getColor(speaker: string) {
  if (!speakerColors[speaker]) {
    const idx = Object.keys(speakerColors).length % palette.length;
    speakerColors[speaker] = palette[idx];
  }
  return speakerColors[speaker];
}

const DialogBubbles = ({ lines, title }: DialogBubblesProps) => {
  const speakers = [...new Set(lines.map((l) => l.speaker))];
  const isLeft = (speaker: string) => speakers.indexOf(speaker) % 2 === 0;

  return (
    <div className="space-y-3">
      {title && <h4 className="font-bold text-lg mb-3">{title}</h4>}
      {lines.map((line, i) => {
        const left = isLeft(line.speaker);
        return (
          <div key={i} className={`flex ${left ? "justify-start" : "justify-end"} animate-fade-in`} style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-card ${
                left ? "rounded-tl-md" : "rounded-tr-md"
              } ${getColor(line.speaker)}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                {line.speaker}
              </span>
              <p className="text-sm mt-0.5 leading-relaxed">{line.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DialogBubbles;
