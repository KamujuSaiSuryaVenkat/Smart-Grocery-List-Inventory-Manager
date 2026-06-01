import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

import { ArrowRight, KeyRound, ShieldCheck, Sparkles, Users } from "lucide-react";

import { Button, Badge, Surface } from "../components/ui/System";

function LoginPage() {
  const navigate = useNavigate();

  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleLogin() {
    try {
      setError(null);
      await auth.login({ email, password });
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen px-4 py-6 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-[1400px] gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Surface className="relative overflow-hidden p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(134,233,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(182,255,92,0.12),transparent_35%)]" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div>
              <Badge tone="blue">Household access</Badge>
              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">Welcome back to the kitchen system.</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 md:text-lg">Sign in to keep your grocery list, pantry, and shared household decisions in sync across every device.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "Private", text: "Secure household access" },
                { icon: Users, title: "Shared", text: "Live family sync" },
                { icon: Sparkles, title: "Smart", text: "Adaptive suggestions" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                    <Icon size={18} className="text-emerald-200" />
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Surface>

        <Surface className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sign in</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Get back to your grocery flow</h2>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-400">Email</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="aanya@home.com" className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none placeholder:text-slate-500" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-400">Password</span>
                <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4">
                  <KeyRound size={18} className="text-slate-400" />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
                </div>
              </label>
            </div>

            <div className="flex flex-col gap-3">
              {error ? <p className="text-sm text-rose-400">{error}</p> : null}
              <Button onClick={handleLogin} size="lg" className="w-full">Enter dashboard <ArrowRight size={18} /></Button>
              <div className="flex justify-between items-center">
                <Link to="/register" className="text-sm text-slate-400">Create an account</Link>
                <Link to="/" className="text-sm text-slate-400 transition hover:text-white">Back to landing page</Link>
              </div>
            </div>
          </div>
        </Surface>
      </div>
    </div>
  );
}

export default LoginPage;