import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stagesMeta, allStages } from "@/data/stages";
import { GraduationCap, ArrowRight, Lock, Users, Star, BookOpen, Sparkles, ChevronDown, Zap, Heart, LogOut, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AnimatedSection from "@/components/AnimatedSection";
import masaLogo from "@/assets/masa-logo.png";
import etdLogo from "@/assets/etd-logo.jpg";
import damiettaLogo from "@/assets/damietta-logo.jpg";
import facultyLogo from "@/assets/faculty-logo.jpg";
import amiraImg from "@/assets/team/amira.jpeg";
import suhaImg from "@/assets/team/suha.jpeg";
import maryamImg from "@/assets/team/maryam.jpeg";
import timeline1Img from "@/assets/timeline/timeline1.jpeg";
import timeline2Img from "@/assets/timeline/timeline2.jpeg";

const supervisors = [
  { name: "أ. د/ محمد شمة", role: "إشراف أكاديمي" },
  { name: "م/ غادة متولي", role: "إشراف تقني" },
];

const teamMembers = [
  { 
    name: "أميرة رضا زمزم", 
    role: "تصميم وتطوير واجهة المستخدم", 
    image: amiraImg,
    details: {
      title: "مسؤولة عن واجهة المستخدم:",
      subtitle: "المرحلة التصميمية من حيث:",
      tasks: [
        "تصميم الصفحات التفاعلية",
        "تنسيق الألوان والخطوط",
        "تحسين تجربة المستخدم",
        "تصميم الجرافيك والوسائط"
      ]
    }
  },
  { 
    name: "سها محمد عيد", 
    role: "برمجة وتطوير الموقع", 
    image: suhaImg,
    details: {
      title: "مسؤولة عن البنية البرمجية:",
      subtitle: "المرحلة التطويرية من حيث:",
      tasks: [
        "نظم التحكم والتتابع البرمجي",
        "تطوير الواجهة الأمامية",
        "ربط قواعد البيانات",
        "ضمان استقرار المنصة"
      ]
    }
  },
  { 
    name: "مريم وائل أبو العلا", 
    role: "إعداد وتنظيم المحتوى التعليمي", 
    image: maryamImg,
    details: {
      title: "مسؤولة عن المحتوى العلمي:",
      subtitle: "المرحلة التحضيرية من حيث:",
      tasks: [
        "هيكلة المحتوى التعليمي",
        "المواد والوسائل التعليمية",
        "إعداد الأنشطة التفاعلية",
        "مراجعة دقة المعلومات"
      ]
    }
  },
];

const stageGradients = [
  "from-primary/10 to-info/10",
  "from-accent/10 to-success/10",
  "from-warning/10 to-primary/10",
];

/* ---------- Animated Counter ---------- */
const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return <>{suffix}{count}</>;
};

/* ---------- Floating Particles ---------- */
const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-primary/10 animate-float"
        style={{
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${Math.random() * 4 + 4}s`,
        }}
      />
    ))}
  </div>
);

const Index = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ===== TOP BAR ===== */}
      <div className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled ? "glass-strong shadow-elevated" : "glass"
      }`}>
        <div className="container max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center text-white text-sm font-bold animate-bounce-in">
              {user?.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-semibold">مرحبًا، {user}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={damiettaLogo} alt="جامعة دمياط" className="h-8 w-8 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
            <img src={facultyLogo} alt="كلية التربية" className="h-8 w-8 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
            <img src={etdLogo} alt="قسم تكنولوجيا التعليم" className="h-8 w-8 rounded-full object-cover hover:scale-110 transition-transform duration-300" />
          </div>
          <Button variant="ghost" size="sm" onClick={logout} className="gap-1.5 text-muted-foreground hover:text-destructive transition-colors">
            <LogOut className="h-4 w-4" />
            <span className="text-xs font-medium">خروج</span>
          </Button>
        </div>
        {/* Navigation Tabs */}
        <div className="container max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto scrollbar-none">
          {[
            { label: "الرئيسية", icon: Zap, href: "#hero" },
            { label: "الخطة الزمنية", icon: Calendar, href: "#timeline" },
            { label: "فريق العمل", icon: Heart, href: "#team" },
            { label: "المراحل الدراسية", icon: GraduationCap, href: "#stages" },
          ].map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="group flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:text-primary border-b-2 border-transparent hover:border-primary transition-all whitespace-nowrap"
            >
              <tab.icon className="h-3.5 w-3.5 group-hover:animate-wiggle" />
              {tab.label}
            </a>
          ))}
        </div>
      </div>
      {/* Spacer for fixed navbar */}
      <div className="h-[88px]" />

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative scroll-mt-[88px]" style={{ background: "var(--gradient-hero)" }}>
        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl animate-float" />
          <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-accent/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-info/8 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
        </div>
        <FloatingParticles />

        <div className="relative container max-w-5xl mx-auto px-4 pt-20 pb-24 text-center space-y-8">
          {/* Logo */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="inline-block p-3 rounded-3xl glass shadow-glow animate-pulse-glow hover:scale-105 transition-transform duration-500">
              <img src={masaLogo} alt="MASa Logo" width={160} height={160} className="h-24 sm:h-32 w-auto" />
            </div>
          </div>

          {/* Badge */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold shadow-glow hover:shadow-elevated transition-shadow duration-300"
              style={{ backgroundSize: "200% 200%", animation: "gradient-shift 4s ease infinite" }}>
              <Zap className="h-4 w-4 animate-sparkle" /> منصة تعلم الإنجليزية
            </div>
          </div>

          {/* Heading */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
              تعلّم الإنجليزية
              <br />
              <span className="gradient-text" style={{ backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }}>
                خطوة بخطوة
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              دروس تفاعلية وبطاقات مفردات واختبارات فورية — محتوى تعليمي شامل
              لمراحل التعليم المختلفة، مصمم ليكون ممتعًا وفعّالًا.
            </p>
          </div>

          {/* Stats */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-2">
              {[
                { icon: BookOpen, label: "وحدة تعليمية", value: 17, gradient: "gradient-primary" },
                { icon: Sparkles, label: "درس تفاعلي", value: 70, gradient: "gradient-accent", suffix: "+" },
                { icon: Users, label: "مرحلة دراسية", value: 3, gradient: "gradient-warm" },
              ].map((stat) => (
                <div key={stat.label} className="group flex items-center gap-3 glass rounded-2xl px-5 py-4 shadow-card hover-lift cursor-default hover:shadow-glow transition-all duration-300">
                  <div className={`${stat.gradient} p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold tracking-tight">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <a href="#stages" className="group inline-flex flex-col items-center gap-1 pt-4 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm font-medium">ابدأ رحلتك</span>
              <ChevronDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section id="team" className="relative border-b scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 pointer-events-none" />
        <div className="relative container max-w-5xl mx-auto px-4 py-16 space-y-10">
          <AnimatedSection animation="fade-up" className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold">
              <Heart className="h-3.5 w-3.5 animate-pulse" /> من نحن
            </div>
            <h2 className="text-3xl font-extrabold">فريق العمل</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">القائمون على تطوير المنصة التعليمية</p>
          </AnimatedSection>

          {/* Team Members */}
          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {teamMembers.map((m, i) => (
              <AnimatedSection
                key={m.name}
                animation="zoom"
                delay={i * 150}
                className="h-full"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group flex flex-col items-center gap-4 glass rounded-3xl p-7 hover-lift hover:shadow-glow transition-all duration-500 cursor-pointer h-full w-full">
                      <div className="h-24 w-24 overflow-hidden rounded-2xl border-4 border-primary/10 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 pointer-events-none">
                        <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                      </div>
                      <p className="font-bold text-sm text-center pointer-events-none">{m.name}</p>
                      <Badge className="gradient-primary text-primary-foreground border-0 text-xs font-semibold group-hover:shadow-glow transition-shadow pointer-events-none">
                        {m.role}
                      </Badge>
                    </div>
                  </DialogTrigger>
                <DialogContent className="sm:max-w-md text-center p-8 rounded-[2rem]">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-primary/10 shadow-md mb-2">
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-primary">{m.name}</DialogTitle>
                  <p className="text-[#cda34f] font-semibold text-sm mb-4">{m.role}</p>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-right space-y-3 shadow-inner">
                    <h4 className="font-bold text-primary flex items-center gap-2">
                      📋 {m.details.title}
                    </h4>
                    <hr className="border-slate-200" />
                    <p className="text-sm font-semibold text-slate-700">{m.details.subtitle}</p>
                    <ul className="space-y-2">
                      {m.details.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="text-[#cda34f]">✨</span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <DialogClose asChild>
                      <Button className="w-full sm:w-auto px-8 rounded-full bg-[#1e293b] hover:bg-[#0f172a] text-white">
                        فهمت ذلك
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
                </Dialog>
              </AnimatedSection>
            ))}
          </div>

          {/* Supervisors */}
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {supervisors.map((s, i) => (
              <AnimatedSection
                key={s.name}
                animation="fade-left"
                delay={i * 200}
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover-lift hover:shadow-glow transition-all duration-500"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-accent text-white shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-base">{s.name}</p>
                  <p className="text-xs text-muted-foreground font-medium">{s.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section id="timeline" className="relative border-b scroll-mt-24 bg-muted/10">
        <div className="container max-w-5xl mx-auto px-4 py-16 space-y-10">
          <AnimatedSection animation="fade-up" className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-info/10 text-info px-4 py-1.5 rounded-full text-sm font-semibold">
              <Calendar className="h-3.5 w-3.5" /> مسار المشروع
            </div>
            <h2 className="text-3xl font-extrabold">الخطة الزمنية</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">مراحل وخطوات تنفيذ المشروع</p>
          </AnimatedSection>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-right" delay={100} className="overflow-hidden rounded-3xl shadow-elevated border-4 border-background glass">
              <img src={timeline1Img} alt="الخطة الزمنية الجزء الأول" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={200} className="overflow-hidden rounded-3xl shadow-elevated border-4 border-background glass">
              <img src={timeline2Img} alt="الخطة الزمنية الجزء الثاني" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== STAGES SECTION ===== */}
      <section id="stages" className="scroll-mt-24">
        <FloatingParticles />
        <div className="container max-w-5xl mx-auto py-16 px-4 space-y-8 relative">
          <AnimatedSection animation="fade-up" className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <GraduationCap className="h-3.5 w-3.5" /> المراحل الدراسية
            </div>
            <h2 className="text-3xl font-extrabold">اختر مرحلتك</h2>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stagesMeta.map((stage, si) => {
              const data = allStages.find((s) => s.id === stage.id);
              const unitCount = data?.units.length ?? 0;

              return (
                <AnimatedSection
                  key={stage.id}
                  animation="zoom"
                  delay={si * 150}
                >
                  <Card
                    className={`group relative overflow-hidden border-0 shadow-card transition-all duration-500 rounded-3xl ${
                      stage.available
                        ? "hover-lift hover:shadow-glow cursor-pointer"
                        : "opacity-50 grayscale"
                    }`}
                  >
                    {/* Gradient header band */}
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${stageGradients[si % stageGradients.length].replace('/10', '')} group-hover:h-2 transition-all duration-500`} />

                    <CardHeader className="pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl drop-shadow-sm group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{stage.emoji}</span>
                        {!stage.available && <Lock className="h-4 w-4 text-muted-foreground" />}
                      </div>
                      <CardTitle className="text-xl font-extrabold" dir="ltr">{stage.name}</CardTitle>
                      <CardDescription dir="ltr" className="font-medium">{stage.subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pb-6">
                      {stage.available ? (
                        <>
                          <Badge className="gradient-primary text-primary-foreground border-0 font-semibold">
                            {unitCount} وحدة متوفرة
                          </Badge>
                          <div className="space-y-2">
                            {data?.units.map((unit, ui) => (
                              <Button
                                key={unit.id}
                                variant="outline"
                                className="w-full justify-between rounded-xl border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:translate-x-1 transition-all duration-300"
                                style={{ transitionDelay: `${ui * 30}ms` }}
                                asChild
                              >
                                <Link to={`/stage/${stage.id}/unit/${unit.id}`}>
                                  <span dir="ltr" className="font-medium">{unit.title}</span>
                                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </Button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground font-medium">قريبًا…</p>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <AnimatedSection as="section" animation="fade-up">
        <footer className="border-t bg-muted/30 py-10">
          <div className="container max-w-5xl mx-auto px-4 text-center space-y-3">
            <img src={masaLogo} alt="MASa" width={80} height={80} loading="lazy" className="mx-auto h-10 w-auto opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500" />
            <p className="text-sm text-muted-foreground font-medium">
              منصة تعلم الإنجليزية
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} جميع الحقوق محفوظة
            </p>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
};

export default Index;
