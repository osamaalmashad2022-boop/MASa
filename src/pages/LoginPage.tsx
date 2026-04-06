import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LogIn, AlertCircle } from "lucide-react";
import masaLogo from "@/assets/masa-logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    if (login(username, password)) {
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <Card className="w-full max-w-sm border-0 shadow-card rounded-3xl glass animate-fade-in relative z-10">
        <CardHeader className="text-center space-y-4 pb-2">
          <div className="mx-auto p-3 rounded-2xl glass shadow-glow inline-block">
            <img src={masaLogo} alt="MASa Logo" className="h-16 w-auto" />
          </div>
          <div>
            <CardTitle className="text-2xl font-extrabold">تسجيل الدخول</CardTitle>
            <CardDescription className="text-sm mt-1">ادخل بياناتك للوصول إلى المنصة</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-semibold">اسم المستخدم</Label>
              <Input
                id="username"
                type="text"
                placeholder="أدخل اسم المستخدم"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(false); }}
                className="rounded-xl h-11"
                dir="ltr"
                autoComplete="username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className="rounded-xl h-11"
                dir="ltr"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 rounded-xl px-3 py-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>اسم المستخدم أو كلمة المرور غير صحيحة</span>
              </div>
            )}

            <Button type="submit" className="w-full rounded-xl h-11 gradient-primary text-primary-foreground font-bold gap-2">
              <LogIn className="h-4 w-4" />
              دخول
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
