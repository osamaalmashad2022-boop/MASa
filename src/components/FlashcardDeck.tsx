import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Flashcard } from "@/data/types";

interface FlashcardDeckProps {
  flashcards: Flashcard[];
}

const FlashcardDeck = ({ flashcards }: FlashcardDeckProps) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[index];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % flashcards.length);
  };

  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <button
        onClick={() => setFlipped(!flipped)}
        className="relative w-full max-w-sm h-52 rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98]"
        style={{ perspective: "800px" }}
      >
        <div
          className="absolute inset-0 rounded-3xl transition-transform duration-600"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl gradient-primary text-white p-6 shadow-glow"
            style={{ backfaceVisibility: "hidden" }}
            dir="ltr"
          >
            <span className="text-xs tracking-wider opacity-70 mb-3 font-medium">اضغط للقلب</span>
            <span className="text-2xl font-bold text-center">{card.term}</span>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl gradient-accent text-white p-6 shadow-glow"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            dir="ltr"
          >
            <span className="text-xs tracking-wider opacity-70 mb-3 font-medium">التعريف</span>
            <span className="text-lg text-center leading-relaxed">{card.definition}</span>
          </div>
        </div>
      </button>

      {/* Progress dots */}
      <div className="flex items-center gap-1.5">
        {flashcards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFlipped(false); setIndex(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-xl shadow-card">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground font-bold tabular-nums min-w-[4ch] text-center">
          {index + 1} / {flashcards.length}
        </span>
        <Button variant="outline" size="icon" onClick={next} className="rounded-xl shadow-card">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setFlipped(false)} className="rounded-xl">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FlashcardDeck;
