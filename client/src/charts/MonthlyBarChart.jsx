import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { monthlyData } from "../utils/dashboardData";

function MonthlyBarChart() {
  return (
    <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-6 h-[420px]">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-[28px] font-semibold text-white">
            Monthly Cashflow
          </h2>

          <p className="text-[#8B9385] mt-1 text-sm">
            Overview of your monthly expenses
          </p>

        </div>

        <button className="bg-[#181D18] border border-[#222722] px-4 py-2 rounded-xl text-sm text-[#B6FF5C]">
          This Year
        </button>

      </div>

      {/* Chart */}
      <div className="w-full h-[300px] mt-8">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={monthlyData}
            barGap={12}
          >

            <CartesianGrid
              stroke="#1B201B"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              stroke="#8B9385"
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              stroke="#8B9385"
            />

            <Tooltip
              cursor={{
                fill: "rgba(182,255,92,0.08)",
              }}
              contentStyle={{
                background: "#151A15",
                border: "1px solid #222722",
                borderRadius: "16px",
              }}
            />

            <Bar
              dataKey="income"
              fill="#B6FF5C"
              radius={[12, 12, 0, 0]}
              barSize={42}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default MonthlyBarChart;