import FlashcardDeck from "@/components/FlashcardDeck";
import DialogBubbles from "@/components/DialogBubbles";
import GrammarTable from "@/components/GrammarTable";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, MessageCircle, Table2, ListChecks, Image, Target, Activity, CheckCircle2 } from "lucide-react";
import type { Lesson } from "@/data/types";

interface LessonViewProps {
  lesson: Lesson;
}

const sectionIcon = (type: string) => {
  switch (type) {
    case "dialog": return <MessageCircle className="h-4 w-4" />;
    case "grammar": return <Table2 className="h-4 w-4" />;
    case "list": return <ListChecks className="h-4 w-4" />;
    case "imagePrompt": return <Image className="h-4 w-4" />;
    default: return <BookOpen className="h-4 w-4" />;
  }
};

const LessonView = ({ lesson }: LessonViewProps) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* الأهداف التعليمية */}
      {lesson.objectives && lesson.objectives.length > 0 && (
        <div className="glass rounded-2xl p-5 shadow-soft border-r-4 border-r-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-10 -mt-10 pointer-events-none"></div>
          <h3 className="text-lg font-extrabold flex items-center gap-2 mb-4 text-foreground">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            Lesson Objectives
          </h3>
          <ul className="space-y-3 relative z-10">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-foreground/80">
                <Target className="h-4 w-4 text-primary mt-1 shrink-0 opacity-70" />
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {lesson.vocabulary && lesson.vocabulary.flashcards.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-extrabold flex items-center gap-2">
            <div className="p-1.5 rounded-lg gradient-primary text-white">
              <BookOpen className="h-4 w-4" />
            </div>
            Vocabulary
          </h3>
          <FlashcardDeck flashcards={lesson.vocabulary.flashcards} />
        </div>
      )}

      <Accordion type="multiple" defaultValue={lesson.content.map((_, i) => `section-${i}`)} className="space-y-3">
        {lesson.content.map((section, i) => (
          <AccordionItem key={i} value={`section-${i}`} className="border-0 glass rounded-2xl px-5 shadow-card overflow-hidden">
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="flex items-center gap-3 text-base font-bold">
                <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  {sectionIcon(section.type)}
                </span>
                <span dir="ltr">{section.title || section.type}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5" dir="ltr">
              {section.type === "text" && (
                <p className="text-sm leading-relaxed">{section.body}</p>
              )}
              {section.type === "reading" && (
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                  <p className="text-sm leading-relaxed italic">{section.body}</p>
                </div>
              )}
              {section.type === "dialog" && section.lines && (
                <DialogBubbles lines={section.lines} />
              )}
              {section.type === "grammar" && section.grammar && (
                <GrammarTable grammar={section.grammar} />
              )}
              {section.type === "list" && section.items && (
                <ul className="space-y-2 text-sm">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.type === "imagePrompt" && (
                <div className="rounded-2xl overflow-hidden border shadow-card">
                  {section.imageSrc ? (
                    <img
                      src={section.imageSrc}
                      alt={section.alt || section.title || ""}
                      loading="lazy"
                      className="w-full max-h-[400px] object-contain bg-muted/30"
                    />
                  ) : (
                    <div className="bg-muted/30 flex items-center justify-center min-h-[120px] p-6">
                      <p className="text-sm text-muted-foreground text-center italic">
                        📷 {section.alt}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* الأنشطة التطبيقية */}
      {lesson.activities && lesson.activities.length > 0 && (
        <div className="glass rounded-2xl p-6 shadow-soft border border-accent/20 relative overflow-hidden mt-8 bg-gradient-to-br from-accent/5 to-transparent">
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>
          <h3 className="text-lg font-extrabold flex items-center gap-2 mb-5 text-foreground">
            <div className="p-2 rounded-xl bg-accent/15 text-accent">
              <Activity className="h-5 w-5" />
            </div>
            Practical Activities
          </h3>
          <ul className="space-y-4 relative z-10">
            {lesson.activities.map((act, i) => (
              <li key={i} className="flex items-start gap-3 bg-card/60 backdrop-blur-sm p-4 rounded-xl border border-border/50 shadow-sm hover-lift transition-all">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm font-medium leading-relaxed">{act}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LessonView;
