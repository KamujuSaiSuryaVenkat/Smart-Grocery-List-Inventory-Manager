import {
  AlertTriangle,
  ArrowRight,
  Check,
  Clock3,
  Flame,
  Leaf,
  Plus,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  alertTimeline,
  consumptionTrend,
  groceryGroups,
  heroMetrics,
  householdMembers,
  inventoryMix,
  pantryBoards,
  quickActions,
  recipeCards,
  shoppingRecommendations,
  spendingTrend,
  settingsPanels,
} from "../data/groceryData";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import {
  AvatarStack,
  Badge,
  Button,
  MetricCard,
  PageTransition,
  ProgressBar,
  SectionHeading,
  Surface,
  cn,
} from "../components/ui/System";
import { ConsumptionChart, InventoryMixChart, SpendingChart } from "../components/charts/OverviewCharts";

function StatRibbon() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {heroMetrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          <MetricCard
            label={metric.label}
            value={metric.value}
            note={metric.note}
            icon={<Sparkles size={18} className="text-emerald-200" />}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function HomePage() {
  const auth = useAuth();
  const demoName = auth?.user?.name ?? "Aanya";

  return (
    <PageTransition className="space-y-8 pb-10">
      <Surface className="relative overflow-hidden p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(134,233,255,0.16),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(182,255,92,0.12),transparent_34%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <Badge tone="emerald">Household pulse</Badge>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Good evening, {demoName}</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">Your pantry is healthy, your list is organized, and dinner is already halfway planned.</h1>
              <p className="mt-2 text-sm text-amber-200">Demo data shown — sign in to view your household.</p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">Pantry Pro turns groceries into a calm system: understand what is running low, what expires next, and what recipes make the most of what you already have.</p>
            <div className="flex flex-wrap gap-3">
              <Button to="/grocery-list" size="lg">Open grocery list <ArrowRight size={18} /></Button>
              <Button to="/pantry" variant="soft" size="lg">Review pantry <Leaf size={18} /></Button>
            </div>
          </div>

          <Surface className="relative p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Next expiry</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">Milk and spinach</h3>
              </div>
              <Badge tone="amber">Tonight</Badge>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Expiring in</p>
                <p className="mt-3 text-3xl font-semibold text-white">12h</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Suggested action</p>
                <p className="mt-3 text-lg font-semibold text-white">Use in breakfast</p>
              </div>
            </div>
            <div className="mt-5 rounded-3xl border border-white/8 bg-slate-950/40 p-4">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Inventory health</span>
                <span>92%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/8">
                <div className="h-full w-[92%] rounded-full bg-[linear-gradient(90deg,#b6ff5c_0%,#86e9ff_100%)]" />
              </div>
            </div>
          </Surface>
        </div>
      </Surface>

      <StatRibbon />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Surface className="p-6">
          <SectionHeading
            eyebrow="Smart actions"
            title="Quick actions that feel like shortcuts, not chores"
            description="Build lists, scan pantry items, or hand off the weekly shop without changing screens."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl border border-white/8 bg-white/[0.04] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-white">
                  {index === 0 ? <Plus size={18} /> : index === 1 ? <ScanLine size={18} /> : index === 2 ? <Sparkles size={18} /> : <ShieldCheck size={18} />}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{action.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{action.hint}</p>
              </motion.div>
            ))}
          </div>
        </Surface>

        <Surface className="p-6">
          <SectionHeading
            eyebrow="Smart picks"
            title="What the app recommends you buy next"
            description="Suggestions are based on pantry levels, recipe fit, and household consumption."
          />
          <div className="mt-6 space-y-4">
            {shoppingRecommendations.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.reason}</p>
                  </div>
                  <Badge tone="blue">{item.urgency}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Surface>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <ConsumptionChart data={consumptionTrend} />
        <InventoryMixChart data={inventoryMix} />
      </div>
    </PageTransition>
  );
}

export function GroceryListPage() {
  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading
        eyebrow="Grocery list"
        title="A premium checklist that feels more like a shopping companion than a database"
        description="Group items by store zone, highlight urgency, and keep progress visible at every glance."
        action={<Button variant="soft">Sort smartly <ArrowRight size={16} /></Button>}
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Surface className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Completion</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">68% packed</h3>
            </div>
            <Badge tone="emerald">6 left</Badge>
          </div>
          <div className="mt-5">
            <ProgressBar value={68} />
          </div>
          <div className="mt-6 space-y-6">
            {groceryGroups.map((group) => (
              <div key={group.category} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{group.category}</h4>
                    <p className="mt-1 text-sm text-slate-400">Smartly ordered for quick pickup</p>
                  </div>
                  <span className="text-sm text-slate-400">{group.progress}% ready</span>
                </div>
                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-3">
                      <div>
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-slate-400">{item.count}</p>
                      </div>
                      <Badge tone={item.status === "Need today" || item.status === "Expiring soon" ? "amber" : item.status === "Low stock" ? "rose" : "emerald"}>{item.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-6">
          <SectionHeading
            eyebrow="Shopping rhythm"
            title="Progress feels obvious at a glance"
            description="Use the right side as a pre-shop briefing or a quick handoff to a family member."
          />
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">Today’s path</p>
                  <h4 className="mt-1 text-lg font-semibold text-white">Produce → Fridge → Staples</h4>
                </div>
                <Badge tone="blue">Auto-sorted</Badge>
              </div>
              <div className="mt-5 flex items-center gap-3 text-sm text-slate-300">
                <Check size={16} className="text-emerald-300" />
                12 items already in basket
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-300">
                <Clock3 size={16} className="text-amber-300" />
                4 items flagged for tonight
              </div>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
              <p className="text-sm text-slate-400">Kitchen notes</p>
              <p className="mt-2 text-base leading-7 text-slate-200">The list automatically prioritizes items that unlock two or more meals and keeps the highest urgency at the top.</p>
            </div>
          </div>
        </Surface>
      </div>
    </PageTransition>
  );
}

export function PantryPage() {
  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading
        eyebrow="Pantry"
        title="Visual inventory boards replace tables with a cleaner, roomier system"
        description="See what is healthy, what is close to expiry, and what needs a reorder without reading rows of data."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {pantryBoards.map((board, index) => (
          <motion.div
            key={board.label}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <Surface className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Zone {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{board.label}</h3>
                </div>
                <Badge tone={board.tone}>Organized</Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {board.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-slate-200">{item}</span>
                ))}
              </div>
            </Surface>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Surface className="p-6">
          <SectionHeading eyebrow="Inventory cards" title="Rich item previews" description="Each card surfaces quantity, expiry, and how much attention it needs." />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {groceryGroups.flatMap((group) => group.items).map((item, index) => (
              <div key={`${item.name}-${index}`} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <Badge tone={item.status === "Healthy" ? "emerald" : item.status === "Low stock" ? "rose" : "amber"}>{item.status}</Badge>
                </div>
                <p className="mt-3 text-sm text-slate-400">Quantity {item.count}</p>
                <div className="mt-4 h-2 rounded-full bg-white/8">
                  <div className="h-full w-[74%] rounded-full bg-[linear-gradient(90deg,#86e9ff_0%,#b6ff5c_100%)]" />
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-6">
          <SectionHeading eyebrow="Health markers" title="The pantry tells a story before you open it" description="Short color-coded notes help the household keep food moving." />
          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-emerald-400/15 bg-emerald-400/8 p-5">
              <p className="text-sm text-emerald-100">Fresh items</p>
              <p className="mt-2 text-2xl font-semibold text-white">24 items</p>
            </div>
            <div className="rounded-[24px] border border-amber-400/15 bg-amber-400/8 p-5">
              <p className="text-sm text-amber-100">Use soon</p>
              <p className="mt-2 text-2xl font-semibold text-white">5 items</p>
            </div>
            <div className="rounded-[24px] border border-rose-400/15 bg-rose-400/8 p-5">
              <p className="text-sm text-rose-100">Need reorder</p>
              <p className="mt-2 text-2xl font-semibold text-white">7 items</p>
            </div>
          </div>
        </Surface>
      </div>
    </PageTransition>
  );
}

export function AlertsPage() {
  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading eyebrow="Expiry management" title="A timeline instead of another table" description="Expired, expiring soon, and healthy items are separated by urgency so the next action is obvious." />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.88fr]">
        <Surface className="p-6">
          <div className="space-y-4">
            {alertTimeline.map((item, index) => (
              <motion.div key={item.title} whileHover={{ x: 4 }} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <div className={cn("mt-1 flex h-10 w-10 items-center justify-center rounded-2xl", index === 0 ? "bg-rose-400/15 text-rose-200" : index === 1 ? "bg-amber-400/15 text-amber-200" : "bg-emerald-400/15 text-emerald-200")}>
                    <AlertTriangle size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <Badge tone={index === 0 ? "rose" : index === 1 ? "amber" : "emerald"}>{index === 0 ? "Urgent" : index === 1 ? "Soon" : "Okay"}</Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Surface>

        <Surface className="p-6">
          <SectionHeading eyebrow="Calendar view" title="A quick glance at the next seven days" description="Highlight the time window where action matters most." />
          <div className="mt-6 grid grid-cols-7 gap-2 text-center">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
              <div key={day} className={cn("rounded-2xl border p-3", index === 2 ? "border-amber-400/20 bg-amber-400/12" : "border-white/8 bg-white/[0.04]") }>
                <p className="text-xs text-slate-400">{day}</p>
                <p className="mt-2 text-lg font-semibold text-white">{12 + index}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
            <p className="text-sm text-slate-400">Today’s summary</p>
            <div className="mt-3 flex items-center gap-3 text-white">
              <Clock3 size={18} className="text-amber-200" />
              Milk expires in 12 hours
            </div>
            <div className="mt-3 flex items-center gap-3 text-white">
              <ShieldCheck size={18} className="text-emerald-200" />
              18 items still healthy
            </div>
          </div>
        </Surface>
      </div>
    </PageTransition>
  );
}

export function InsightsPage() {
  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading eyebrow="Insights" title="Beautiful charts that feel like product intelligence, not admin reporting" description="Track usage, spending, and category health through calm visual summaries." />

      <div className="grid gap-6 lg:grid-cols-3">
        <MetricCard label="Forecast savings" value="$148" note="From better purchase cadence" icon={<Flame size={18} className="text-amber-200" />} />
        <MetricCard label="Recipe match rate" value="87%" note="Meals matched from pantry stock" icon={<Leaf size={18} className="text-emerald-200" />} />
        <MetricCard label="Household sync" value="100%" note="Lists up to date across devices" icon={<ShieldCheck size={18} className="text-sky-200" />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ConsumptionChart data={consumptionTrend} />
        <SpendingChart data={spendingTrend} />
      </div>
    </PageTransition>
  );
}

export function RecipesPage() {
  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading eyebrow="Recipes" title="Choose dinners by what you already have" description="Recipe cards prioritize pantry fit, not just pretty photos." />

      <div className="grid gap-6 xl:grid-cols-3">
        {recipeCards.map((recipe) => (
          <motion.div key={recipe.title} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Surface className="p-6">
              <Badge tone="emerald">{recipe.match}</Badge>
              <h3 className="mt-4 text-xl font-semibold text-white">{recipe.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {recipe.ingredients.map((ingredient) => (
                  <span key={ingredient} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-slate-300">{ingredient}</span>
                ))}
              </div>
              <Button variant="soft" size="sm" className="mt-6">Cook tonight <ArrowRight size={16} /></Button>
            </Surface>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
}

export function HouseholdPage() {
  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading eyebrow="Household" title="Shared grocery ownership without the clutter" description="Everyone can see who is shopping, what is already done, and what still needs approval." />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Surface className="p-6">
          <p className="text-sm text-slate-400">Members</p>
          <div className="mt-5 space-y-4">
            {householdMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4 rounded-[24px] border border-white/8 bg-white/[0.04] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-slate-950" style={{ backgroundColor: member.color }}>
                  {member.name.slice(0, 1)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Shared activity</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Who did what this week</h3>
            </div>
            <AvatarStack members={householdMembers} />
          </div>
          <div className="mt-6 space-y-4">
            {[
              { title: "Rohit picked up produce", time: "2h ago" },
              { title: "Aanya added yogurt and oats", time: "5h ago" },
              { title: "Maya approved lemon salmon", time: "Yesterday" },
            ].map((entry) => (
              <div key={entry.title} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-4">
                <p className="font-medium text-white">{entry.title}</p>
                <p className="mt-1 text-sm text-slate-400">{entry.time}</p>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </PageTransition>
  );
}

export function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const auth = useAuth();
  const [name, setName] = useState(auth.user?.name ?? "");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleSave() {
    try {
      setSaving(true);
      setMsg(null);
      await auth.updateProfile({ name });
      setMsg("Profile updated");
    } catch (err) {
      setMsg(err.message || "Update failed");
    } finally {
      setSaving(false);
      setTimeout(() => setMsg(null), 3000);
    }
  }

  function handleLogout() {
    const ok = window.confirm("Sign out of Pantry Pro?");
    if (ok) auth.logout();
  }

  return (
    <PageTransition className="space-y-8 pb-10">
      <SectionHeading eyebrow="Settings" title="Intentional controls for a premium household product" description="Fine-tune alerting, syncing, and the visual style of the experience." />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Surface className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Theme</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{theme === "dark" ? "Premium dark" : "Soft daylight"}</h3>
            </div>
            <Button variant="soft" onClick={toggleTheme}>
              Toggle theme
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            {settingsPanels.map((panel) => (
              <div key={panel.title} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                <h4 className="text-lg font-semibold text-white">{panel.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{panel.detail}</p>
              </div>
            ))}
          </div>
        </Surface>
        <Surface className="p-6">
          <SectionHeading eyebrow="Profile" title="Household profile" description="Update your display name and sign out from this device." />
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Email</span>
              <input readOnly value={auth.user?.email ?? ""} className="w-full rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-slate-200" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-400">Display name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-slate-200" />
            </label>
            <div className="flex items-center gap-3">
              <Button onClick={handleSave} variant="primary" disabled={saving}>{saving ? "Saving..." : "Save"}</Button>
              <Button variant="soft" onClick={handleLogout}>Sign out</Button>
              {msg ? <p className="text-sm text-slate-300">{msg}</p> : null}
            </div>
          </div>
        </Surface>
        <Surface className="p-6">
          <SectionHeading eyebrow="Controls" title="Alert tuning" description="A light settings surface that still feels polished and consumer-friendly." />
          <div className="mt-6 space-y-4">
            {[
              "Notify me when an item expires in under 24 hours",
              "Send a weekend grocery reminder",
              "Auto-group items by store section",
            ].map((item) => (
              <label key={item} className="flex items-center justify-between gap-4 rounded-[24px] border border-white/8 bg-white/[0.04] p-4 text-sm text-slate-200">
                <span>{item}</span>
                <input type="checkbox" defaultChecked className="h-5 w-5 rounded-full border-white/20 bg-white/10 accent-[#8be88d]" />
              </label>
            ))}
          </div>
        </Surface>
      </div>
    </PageTransition>
  );
}
