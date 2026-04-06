import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ClipboardCheck, BookOpen, Award, Home } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import TestRunner from "@/components/TestRunner";
import LessonView from "@/components/LessonView";
import { getUnit } from "@/data/stages";
import masaLogo from "@/assets/masa-logo.png";

const UnitPage = () => {
  const { stageId, unitId } = useParams<{ stageId: string; unitId: string }>();
  const unit = getUnit(stageId!, unitId!);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">الوحدة غير موجودة.</p>
      </div>
    );
  }

  const sharedPreTest = {
    ...unit.postTest,
    title: unit.preTest.title,
    description: unit.preTest.description,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b glass-strong sticky top-0 z-10">
        <div className="container max-w-4xl mx-auto flex items-center gap-3 py-3 px-4">
          <Button variant="ghost" size="icon" className="rounded-xl" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <img src={masaLogo} alt="MASa" width={32} height={32} className="h-8 w-auto" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              {stageId?.replace(/(\d)/, " $1")}
            </p>
            <h1 className="text-lg font-bold truncate" dir="ltr">{unit.title}</h1>
          </div>
          <Button variant="ghost" size="icon" className="rounded-xl" asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-4xl mx-auto py-8 px-4 animate-fade-in">
        <Tabs defaultValue="pretest" className="space-y-6">
          <TabsList className="w-full flex flex-wrap h-auto gap-1.5 glass p-1.5 rounded-2xl shadow-card">
            <TabsTrigger value="pretest" className="gap-1.5 flex-1 min-w-[100px] rounded-xl data-[state=active]:gradient-primary data-[state=active]:text-white data-[state=active]:shadow-soft font-semibold transition-all">
              <ClipboardCheck className="h-3.5 w-3.5" /> الاختبار القبلي
            </TabsTrigger>
            {unit.lessons.map((lesson, i) => (
              <TabsTrigger key={lesson.id} value={lesson.id} className="gap-1.5 flex-1 min-w-[100px] rounded-xl data-[state=active]:gradient-primary data-[state=active]:text-white data-[state=active]:shadow-soft font-semibold transition-all">
                <BookOpen className="h-3.5 w-3.5" /> الدرس {i + 1}
              </TabsTrigger>
            ))}
            <TabsTrigger value="posttest" className="gap-1.5 flex-1 min-w-[100px] rounded-xl data-[state=active]:gradient-accent data-[state=active]:text-white data-[state=active]:shadow-soft font-semibold transition-all">
              <Award className="h-3.5 w-3.5" /> الاختبار البعدي
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pretest" className="animate-fade-in">
            <TestRunner test={sharedPreTest} />
          </TabsContent>

          {unit.lessons.map((lesson) => (
            <TabsContent key={lesson.id} value={lesson.id} className="animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold" dir="ltr">{lesson.title}</h2>
                <LessonView lesson={lesson} />
              </div>
            </TabsContent>
          ))}

          <TabsContent value="posttest" className="animate-fade-in">
            <TestRunner test={unit.postTest} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default UnitPage;
