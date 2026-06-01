import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import {
  categoryData,
  totalExpense,
} from "../utils/dashboardData";

const COLORS = [
  "#B6FF5C",
  "#9FE870",
  "#7CCB4E",
  "#D9F99D",
];

function ExpensePieChart() {
  return (
    <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-6 overflow-hidden">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-[28px] font-semibold text-white leading-none">
            Expense Distribution
          </h2>

          <p className="text-[#8B9385] mt-3 text-sm">
            Spending overview by category
          </p>

        </div>

        <button className="bg-[#181D18] border border-[#222722] px-4 py-2 rounded-xl text-sm text-[#B6FF5C] whitespace-nowrap">
          This Month
        </button>

      </div>

      {/* Main Content */}
      <div className="flex items-center gap-6 mt-10">

        {/* Donut */}
        <div className="relative w-[220px] h-[220px] flex-shrink-0">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={categoryData}
                innerRadius={62}
                outerRadius={88}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >

                {categoryData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}

              </Pie>

            </PieChart>

          </ResponsiveContainer>

          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-4xl font-bold text-white">
              ₹{totalExpense.toLocaleString()}
            </h2>

            <p className="text-[#8B9385] text-sm mt-1">
              Total Spend
            </p>

          </div>

        </div>

        {/* Legend */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">

          {categoryData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 pb-4 border-b border-[#1A1F1A]"
            >

              {/* Left */}
              <div className="flex items-center gap-3 min-w-0">

                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    background: COLORS[index],
                  }}
                />

                <div className="min-w-0">

                  <p className="text-white font-medium text-sm truncate">
                    {item.name}
                  </p>

                  <p className="text-[#8B9385] text-xs mt-1">
                    {Math.round(
                      (item.value / totalExpense) * 100
                    )}
                    % of expenses
                  </p>

                </div>

              </div>

              {/* Amount */}
              <p className="text-white font-semibold text-base whitespace-nowrap">
                ₹{item.value.toLocaleString()}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ExpensePieChart;