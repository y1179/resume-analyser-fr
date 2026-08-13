import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api"; // ← adjust path to match your project

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true); // true until getMe() finishes

  // Runs ONCE on app start — restores session if token exists
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const data = await getMe(); // calls /api/auth/get-me with saved token
        setUser(data.user);
      } catch {
        setUser(null); // token invalid or expired — treat as logged out
      } finally {
        setLoading(false); // always stop loading — unblocks protected routes
      }
    };

    restoreSession();
  }, []); // ← empty array = runs only once, never repeats

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};