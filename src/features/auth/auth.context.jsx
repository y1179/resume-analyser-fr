import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const BASE_URL = "https://resume-analyser-back.onrender.com/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true); // ← MUST start as true

  // ── Restore user session on page refresh ──────────────────
  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("token");
      const savedUser = localStorage.getItem("user");

      if (!token || !savedUser) {
        // No session saved — stop loading, user stays null
        setLoading(false);
        return;
      }

      try {
        // Optional: verify token is still valid with backend
        // If you don't have a /me or /verify endpoint, just restore from localStorage
        await axios.get(`${BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Token is valid — restore user
        setUser(JSON.parse(savedUser));

      } catch (error) {
        // Token expired or invalid — clear everything
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);

      } finally {
        setLoading(false); // ← always stop loading when done
      }
    };

    restoreSession();
  }, []);

  // ── Login — call this after successful API response ────────
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // ── Logout ────────────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};