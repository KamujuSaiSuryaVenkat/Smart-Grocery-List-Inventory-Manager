import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, KeyRound } from "lucide-react";
import { Button, Surface } from "../components/ui/System";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleRegister() {
    try {
      setError(null);
      // Call register endpoint first
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const e = await res.json();
        throw new Error(e.message || "Registration failed");
      }
      // Auto-login via auth.login (which calls /api/auth/login)
      await auth.login({ email, password });
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen px-4 py-6 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <Surface className="p-6">
          <h2 className="text-2xl font-semibold text-white">Create an account</h2>
          <div className="mt-6 space-y-4">
            {error ? <p className="text-rose-400">{error}</p> : null}
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg px-3 py-2 text-slate-900" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full rounded-lg px-3 py-2 text-slate-900" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Password</span>
              <div className="flex items-center gap-3">
                <KeyRound size={16} />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full rounded-lg px-3 py-2 text-slate-900" />
              </div>
            </label>
            <div className="flex gap-3">
              <Button onClick={handleRegister} size="md">Register <ArrowRight size={14} /></Button>
              <Link to="/login" className="ml-auto text-sm text-slate-400">Already have an account?</Link>
            </div>
          </div>
        </Surface>
      </div>
    </div>
  );
}
