import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const DEMO_USERS = [
  { username: "amira", password: "123" },
];

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => localStorage.getItem("demo_user"));

  useEffect(() => {
    if (user) localStorage.setItem("demo_user", user);
    else localStorage.removeItem("demo_user");
  }, [user]);

  const login = (username: string, password: string) => {
    const found = DEMO_USERS.find(
      (u) => u.username === username.trim().toLowerCase() && u.password === password
    );
    if (found) {
      setUser(found.username);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
