import {
  ArrowRight,
  BarChart3,
  Bell,
  ChefHat,
  Home,
  LogOut,
  MoonStar,
  Package,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  SunMedium,
  Users,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { navLinks } from "../../data/groceryData";
import { Badge, Button, cn, Surface } from "../ui/System";

const iconMap = {
  Home,
  ShoppingCart,
  Package,
  Bell,
  BarChart3,
  ChefHat,
  Users,
  Settings2,
};

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[300px] flex-col border-r border-white/10 bg-slate-950/80 px-5 py-6 backdrop-blur-2xl lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#b6ff5c_0%,#86e9ff_100%)] text-slate-950 shadow-[0_20px_40px_rgba(134,233,255,0.14)]">
          <Sparkles size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Pantry Pro</p>
          <h1 className="text-lg font-semibold text-white">Grocery OS</h1>
        </div>
      </div>

      <Surface className="mt-8 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Today</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">92%</h2>
            <p className="text-sm text-slate-400">Inventory health</p>
          </div>
          <Badge tone="emerald">Stable</Badge>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/8">
          <div className="h-full w-[92%] rounded-full bg-[linear-gradient(90deg,#b6ff5c_0%,#86e9ff_100%)]" />
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">7 items need restocking and 2 items should be used tonight.</p>
      </Surface>

      <nav className="mt-8 flex flex-1 flex-col gap-2">
        {navLinks.map((item) => {
          const Icon = iconMap[item.icon] ?? Home;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-4 rounded-2xl border px-4 py-3 transition-all duration-300",
                  isActive
                    ? "border-white/15 bg-white/10 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                    : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                )
              }
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-slate-100 transition group-hover:bg-white/12">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <Surface className="mt-4 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Smart sync</p>
            <p className="mt-1 text-sm text-slate-400">Shared lists are live across the household.</p>
          </div>
          <Button to="/settings" variant="soft" size="sm">
            Open
            <ArrowRight size={16} />
          </Button>
        </div>
      </Surface>
    </aside>
  );
}

function Topbar() {
  const { theme, isDark, toggleTheme } = useTheme();
  const auth = useAuth();

  return (
    <div className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:pl-8">
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#b6ff5c_0%,#86e9ff_100%)] text-slate-950">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Pantry Pro</p>
            <h1 className="text-base font-semibold text-white">Grocery OS</h1>
          </div>
        </div>

        <div className="hidden items-center justify-between gap-6 lg:flex">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Household overview</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">Your pantry, list, and meals in one calm workspace</h2>
          </div>

          <div className="flex items-center gap-3">
            <Surface className="flex h-12 items-center gap-3 rounded-full px-4 py-2">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search items, recipes, alerts"
                className="w-72 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </Surface>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/12"
              aria-label="Toggle theme"
            >
              {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/12">
              <Bell size={18} />
            </button>
            <Button variant="soft" size="md" onClick={() => auth.logout()}>
              Sign out
              <LogOut size={16} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-1 lg:hidden">
          {navLinks.slice(0, 4).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-white/15 bg-white/12 text-white"
                    : "border-white/8 bg-white/4 text-slate-300"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm font-medium text-slate-200"
          >
            {theme === "dark" ? <SunMedium size={14} /> : <MoonStar size={14} />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-slate-50">
      <Sidebar />
      <div className="relative lg:pl-[300px]">
        <Topbar />
        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
