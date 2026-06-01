import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function CashflowChart({
  monthlyData,
}) {

  // Total Revenue
  const totalRevenue =
    monthlyData.reduce(
      (acc, item) => acc + item.amount,
      0
    );

  // Growth %
  const firstMonth =
    monthlyData[0]?.amount || 0;

  const lastMonth =
    monthlyData[
      monthlyData.length - 1
    ]?.amount || 0;

  const growth =
    firstMonth > 0
      ? (
          ((lastMonth - firstMonth) /
            firstMonth) *
          100
        ).toFixed(0)
      : 0;

  return (
    <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-7 min-h-[520px] relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          {/* Left */}
          <div>

            <h2 className="text-[30px] leading-none font-semibold">
              Monthly Cashflow
            </h2>

            <p className="text-[#8B9385] text-sm mt-4 leading-7">

              Overview of your monthly financial activity

            </p>

          </div>

          {/* Filter */}
          <button className="bg-[#181D18] border border-[#222722] px-4 py-2 rounded-xl text-sm text-[#B6FF5C] w-fit">

            This Year

          </button>

        </div>

        {/* Stats */}
        <div className="flex items-center gap-14 mt-10">

          <div>

            <p className="text-[#8B9385] text-sm">
              Total Revenue
            </p>

            <h3 className="text-[42px] leading-none font-bold mt-4">

              ₹{totalRevenue.toLocaleString()}

            </h3>

          </div>

          <div>

            <p className="text-[#8B9385] text-sm">
              Monthly Growth
            </p>

            <h3 className="text-[42px] leading-none font-bold mt-4 text-[#B6FF5C]">

              +{growth}%

            </h3>

          </div>

        </div>

        {/* Chart */}
        <div className="w-full h-[300px] mt-12 pr-4">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart
              data={monthlyData}
              barGap={18}
            >

              {/* Grid */}
              <CartesianGrid
                stroke="#1A1F1A"
                vertical={false}
              />

              {/* X Axis */}
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                stroke="#8B9385"
                dy={10}
              />

              {/* Y Axis */}
              <YAxis
                tickLine={false}
                axisLine={false}
                stroke="#8B9385"
                width={60}
              />

              {/* Tooltip */}
              <Tooltip
                cursor={{
                  fill:
                    "rgba(182,255,92,0.05)",
                }}
                contentStyle={{
                  background: "#151915",
                  border:
                    "1px solid #222722",
                  borderRadius: "16px",
                  color: "#fff",
                }}
              />

              {/* Bars */}
              <Bar
                dataKey="amount"
                fill="#B6FF5C"
                radius={[14, 14, 0, 0]}
                barSize={52}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default CashflowChart;