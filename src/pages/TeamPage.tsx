import { Link } from "react-router-dom";
import { ArrowLeft, Users, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import amiraImg from '@/assets/team/amira.jpeg';
import suhaImg from '@/assets/team/suha.jpeg';
import maryamImg from '@/assets/team/maryam.jpeg';

const supervisors = [
  { name: "أ. د/ محمد شمة", role: "إشراف أكاديمي" },
  { name: "م/ غادة متولي", role: "إشراف تقني" },
];

const teamMembers = [
  { name: "أميرة رضا زمزم", role: "تصميم وتطوير واجهة المستخدم", image: amiraImg },
  { name: "سها محمد عيد", role: "برمجة وتطوير الموقع", image: suhaImg },
  { name: "مريم وائل أبو العلا", role: "إعداد وتنظيم المحتوى التعليمي", image: maryamImg },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container max-w-4xl mx-auto flex items-center gap-3 py-4 px-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-xl font-bold">فريق العمل</h1>
            <p className="text-xs text-muted-foreground">القائمون على تطوير المنصة</p>
          </div>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto py-10 px-4 space-y-10">
        {/* Supervisors */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-2xl font-bold">تحت إشراف</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {supervisors.map((s) => (
              <Card key={s.name} className="border-primary/30 bg-primary/5">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Star className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <Users className="h-6 w-6" />
            <h2 className="text-2xl font-bold">فريق التطوير</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {teamMembers.map((m) => (
              <Card key={m.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-primary/10">
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-bold">{m.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeamPage;
