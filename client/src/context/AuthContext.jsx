/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return localStorage.getItem("pantrypro-user") ? JSON.parse(localStorage.getItem("pantrypro-user")) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem("pantrypro-token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) localStorage.setItem("pantrypro-user", JSON.stringify(user));
    else localStorage.removeItem("pantrypro-user");
  }, [user]);

  useEffect(() => {
    if (token) localStorage.setItem("pantrypro-token", token);
    else localStorage.removeItem("pantrypro-token");
  }, [token]);

  async function login(credentials) {
    // credentials: { email, password }
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Login failed");
    }

    const data = await res.json();
    setToken(data.token);
    setUser(data.user || { name: "Household" });
    return data;
  }

  async function updateProfile(updates) {
    // updates: { name?, password? }
    const res = await fetch("http://localhost:5000/api/auth/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      body: JSON.stringify(updates),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Update failed");
    }

    const data = await res.json();
    if (data.token) setToken(data.token);
    if (data.user) setUser(data.user);
    return data;
  }

  function logout() {
    setUser(null);
    setToken(null);
    navigate("/login", { replace: true });
  }

  const value = { user, token, login, logout, updateProfile, isAuthenticated: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
