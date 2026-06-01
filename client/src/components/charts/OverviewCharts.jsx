import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Surface } from "../ui/System";

const tooltipStyle = {
  background: "rgba(10, 14, 22, 0.92)",
  border: "1px solid rgba(255, 255, 255, 0.10)",
  borderRadius: "18px",
  color: "#e5eef9",
  boxShadow: "0 16px 50px rgba(0, 0, 0, 0.3)",
};

const axisStyle = {
  fill: "#8b95a7",
  fontSize: 12,
};

export function ConsumptionChart({ data }) {
  return (
    <Surface className="p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Consumption</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Weekly usage pulse</h3>
        </div>
        <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-slate-300">Live cadence</span>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="usageFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8be88d" stopOpacity={0.42} />
                <stop offset="95%" stopColor="#8be88d" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisStyle} />
            <YAxis axisLine={false} tickLine={false} tick={axisStyle} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "rgba(255,255,255,0.08)" }} />
            <Area type="monotone" dataKey="pantry" stroke="#8be88d" fill="url(#usageFill)" strokeWidth={3} />
            <Area type="monotone" dataKey="shopping" stroke="#86e9ff" fillOpacity={0} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Surface>
  );
}

export function InventoryMixChart({ data }) {
  return (
    <Surface className="p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Inventory mix</p>
          <h3 className="mt-2 text-xl font-semibold text-white">What your pantry looks like</h3>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip contentStyle={tooltipStyle} />
            <Legend verticalAlign="bottom" height={24} iconType="circle" />
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={4}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Surface>
  );
}

export function SpendingChart({ data }) {
  return (
    <Surface className="p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Spending</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Essentials vs treats</h3>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisStyle} />
            <YAxis axisLine={false} tickLine={false} tick={axisStyle} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
            <Bar dataKey="essentials" radius={[14, 14, 0, 0]} fill="#8be88d" />
            <Bar dataKey="treats" radius={[14, 14, 0, 0]} fill="#86e9ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Surface>
  );
}
