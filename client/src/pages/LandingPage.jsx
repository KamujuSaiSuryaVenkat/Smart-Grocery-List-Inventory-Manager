import { ArrowRight, ChefHat, Leaf, Package, Sparkles, Users } from "lucide-react";

import { Button, Badge, Surface } from "../components/ui/System";

function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/8 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#b6ff5c_0%,#86e9ff_100%)] text-slate-950">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Pantry Pro</p>
              <p className="text-sm font-semibold text-white">Grocery Pro OS</p>
            </div>
          </div>
          <Button to="/login" size="md">Open app <ArrowRight size={16} /></Button>
        </header>

        <main className="grid flex-1 items-center gap-10 py-10 xl:grid-cols-[1.1fr_0.9fr] xl:py-16">
          <div className="space-y-8">
            <Badge tone="emerald">Premium grocery intelligence</Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">A calm home for everything you buy, store, cook, and share.</h1>
              <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">Pantry Pro reimagines grocery planning as a premium product experience: know what is running low, what expires soon, what recipes you can cook tonight, and who in the household is handling the next shop.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/home" size="lg">Launch the experience <ArrowRight size={18} /></Button>
              <Button to="/recipes" variant="soft" size="lg">Explore recipes <ChefHat size={18} /></Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Inventory health", value: "92%" },
                { label: "Smart matches", value: "24" },
                { label: "Household sync", value: "100%" },
              ].map((stat) => (
                <Surface key={stat.label} className="p-5">
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                </Surface>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-8 h-56 w-56 rounded-full bg-sky-400/18 blur-3xl" />
            <Surface className="relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(134,233,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(182,255,92,0.14),transparent_32%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Today</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Kitchen command center</h2>
                  </div>
                  <Badge tone="blue">Live</Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/8 bg-white/[0.04] p-5">
                    <p className="text-sm text-slate-400">Expiring soon</p>
                    <p className="mt-3 text-3xl font-semibold text-white">5 items</p>
                    <p className="mt-2 text-sm text-slate-400">Milk, spinach, berries, hummus, herbs</p>
                  </div>
                  <div className="rounded-[26px] border border-white/8 bg-white/[0.04] p-5">
                    <p className="text-sm text-slate-400">Meal suggestions</p>
                    <p className="mt-3 text-3xl font-semibold text-white">3 dinners</p>
                    <p className="mt-2 text-sm text-slate-400">Matched from existing pantry stock</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Leaf, label: "Fresh" },
                    { icon: Package, label: "Staples" },
                    { icon: Users, label: "Shared" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-[24px] border border-white/8 bg-slate-950/35 p-4">
                        <Icon size={18} className="text-emerald-200" />
                        <p className="mt-5 text-sm text-slate-400">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Surface>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;