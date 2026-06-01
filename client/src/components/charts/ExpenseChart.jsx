import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#B6FF5C",
  "#9FE870",
  "#7CCB4E",
  "#D9F99D",
];

function ExpenseChart({
  categoryData,
  totalExpense,
}) {

  return (
    <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-7 overflow-hidden">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-[30px] leading-none font-semibold">
            Expense Distribution
          </h2>

          <p className="text-[#8B9385] text-sm mt-4">
            Spending overview
          </p>

        </div>

        <button className="bg-[#181D18] border border-[#222722] px-4 py-2 rounded-2xl text-sm text-[#B6FF5C]">

          Monthly

        </button>

      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[220px_1fr] gap-10 items-center mt-10">

        {/* DONUT */}
        <div className="relative w-[220px] h-[220px] mx-auto">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={categoryData}
                innerRadius={66}
                outerRadius={94}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >

                {categoryData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  )
                )}

              </Pie>

            </PieChart>

          </ResponsiveContainer>

          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-[38px] leading-none font-bold">

              ₹{totalExpense.toLocaleString()}

            </h2>

            <p className="text-[#8B9385] text-sm mt-3">
              Total Spend
            </p>

          </div>

        </div>

        {/* LEGEND */}
        <div className="flex flex-col justify-center gap-5">

          {categoryData.map(
            (item, index) => {

              const percentage =
                totalExpense > 0
                  ? Math.round(
                      (item.value /
                        totalExpense) *
                        100
                    )
                  : 0;

              return (
                <div
                  key={index}
                  className="flex items-center justify-between gap-5 pb-5 border-b border-[#1A1F1A]"
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-4">

                    {/* Dot */}
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{
                        background:
                          COLORS[index],
                      }}
                    />

                    {/* Text */}
                    <div>

                      <h3 className="text-[20px] leading-none font-medium">

                        {item.name}

                      </h3>

                      <p className="text-[#8B9385] text-sm mt-2">

                        {percentage}% of expenses

                      </p>

                    </div>

                  </div>

                  {/* Amount */}
                  <div className="text-right flex-shrink-0 min-w-[110px]">

                    <p className="text-[24px] leading-none font-bold">

                      ₹{item.value.toLocaleString()}

                    </p>

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default ExpenseChart;