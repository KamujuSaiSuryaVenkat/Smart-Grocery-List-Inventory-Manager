import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import ExpenseChart from "../components/charts/ExpenseChart";
import CashflowChart from "../components/charts/CashflowChart";

import { useTransactions } from "../context/TransactionContext";

import {
  calculateSummary,
  getCategoryData,
  getMonthlyData,
} from "../utils/analytics";

import {
  TrendingUp,
  Wallet,
  Activity,
  PieChart,
} from "lucide-react";

function AnalyticsPage() {

  const { transactions } = useTransactions();

  const {
    totalIncome,
    totalExpense,
    totalBalance,
  } = calculateSummary(transactions);

  const categoryData =
    getCategoryData(transactions);

  const monthlyData =
    getMonthlyData(transactions);

  const topCategory =
    [...categoryData].sort(
      (a, b) => b.value - a.value
    )[0];

  return (
    <div className="min-h-screen bg-[#0B0F0C] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 ml-[110px]">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="px-6 pb-6 pt-4">

          <div className="max-w-[1600px] mx-auto">

            {/* Top Section */}
            <div className="grid grid-cols-12 gap-6 items-stretch">

              {/* LEFT */}
              <div className="col-span-12 xl:col-span-8">

                <div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#111411] border border-[#222722] rounded-full px-4 py-2 text-sm text-[#B6FF5C]">

                    <span className="w-2 h-2 rounded-full bg-[#B6FF5C]" />

                    Financial Intelligence Center

                  </div>

                  {/* Heading */}
                  <h1 className="text-[56px] leading-[60px] font-bold mt-6 max-w-[760px]">

                    Advanced
                    <br />

                    Financial Analytics

                  </h1>

                  {/* Description */}
                  <p className="text-[#8B9385] text-lg mt-6 leading-8 max-w-[760px]">

                    Analyze spending patterns, income flow,
                    monthly trends and budget efficiency with
                    centralized financial intelligence.

                  </p>

                </div>

              </div>

              {/* RIGHT SUMMARY */}
              <div className="col-span-12 xl:col-span-4">

                <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-7 h-full relative overflow-hidden">

                  {/* Glow */}
                  <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                  <div className="relative z-10">

                    {/* Top */}
                    <div className="flex items-start justify-between">

                      <div>

                        <p className="text-[#8B9385] text-sm">
                          Net Financial Position
                        </p>

                        <h2 className="text-[42px] leading-none font-bold mt-5">

                          ₹{totalBalance.toLocaleString()}

                        </h2>

                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                        <Wallet size={28} />

                      </div>

                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#1A1F1A] my-7" />

                    {/* Bottom */}
                    <div className="grid grid-cols-2 gap-6">

                      <div>

                        <p className="text-[#8B9385] text-sm">
                          Income
                        </p>

                        <h3 className="text-2xl font-semibold text-[#B6FF5C] mt-3">

                          ₹{totalIncome.toLocaleString()}

                        </h3>

                      </div>

                      <div>

                        <p className="text-[#8B9385] text-sm">
                          Expense
                        </p>

                        <h3 className="text-2xl font-semibold mt-3">

                          ₹{totalExpense.toLocaleString()}

                        </h3>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Main Analytics Grid */}
            <div className="grid grid-cols-12 gap-6 mt-8">

              {/* LEFT SIDE */}
              <div className="col-span-12 xl:col-span-8 flex flex-col gap-6">

                {/* Chart */}
                <CashflowChart
                  monthlyData={monthlyData}
                />

                {/* Insight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* Card */}
                  <div className="bg-[#111411] border border-[#222722] rounded-[24px] p-6 relative overflow-hidden">

                    <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                    <div className="relative z-10">

                      <div className="w-14 h-14 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                        <PieChart size={22} />

                      </div>

                      <p className="text-[#8B9385] text-sm mt-6">
                        Highest Spending
                      </p>

                      <h2 className="text-[34px] leading-none font-bold mt-5">

                        {topCategory?.name || "N/A"}

                      </h2>

                      <p className="text-[#B6FF5C] text-sm mt-5">

                        ₹{topCategory?.value?.toLocaleString() || 0}

                      </p>

                    </div>

                  </div>

                  {/* Card */}
                  <div className="bg-[#111411] border border-[#222722] rounded-[24px] p-6 relative overflow-hidden">

                    <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                    <div className="relative z-10">

                      <div className="w-14 h-14 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                        <Activity size={22} />

                      </div>

                      <p className="text-[#8B9385] text-sm mt-6">
                        Transactions
                      </p>

                      <h2 className="text-[34px] leading-none font-bold mt-5">

                        {transactions.length}

                      </h2>

                      <p className="text-[#B6FF5C] text-sm mt-5">

                        Active financial records

                      </p>

                    </div>

                  </div>

                  {/* Card */}
                  <div className="bg-[#111411] border border-[#222722] rounded-[24px] p-6 relative overflow-hidden">

                    <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                    <div className="relative z-10">

                      <div className="w-14 h-14 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                        <TrendingUp size={22} />

                      </div>

                      <p className="text-[#8B9385] text-sm mt-6">
                        Savings Rate
                      </p>

                      <h2 className="text-[34px] leading-none font-bold mt-5">
                        34%
                      </h2>

                      <p className="text-[#B6FF5C] text-sm mt-5">

                        Healthy monthly growth

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">

                {/* Donut */}
                <ExpenseChart
                  categoryData={categoryData}
                  totalExpense={totalExpense}
                />

                {/* Health */}
                <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-7 relative overflow-hidden">

                  {/* Glow */}
                  <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                  <div className="relative z-10">

                    {/* Header */}
                    <div className="flex items-start justify-between">

                      <div>

                        <h2 className="text-[30px] leading-none font-semibold">
                          Financial Health
                        </h2>

                        <p className="text-[#8B9385] text-sm mt-4 leading-7">

                          Budget efficiency and financial stability overview.

                        </p>

                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                        <Wallet size={22} />

                      </div>

                    </div>

                    {/* Progress */}
                    <div className="mt-10">

                      <div className="flex items-center justify-between">

                        <p className="text-sm">
                          Budget Efficiency
                        </p>

                        <p className="text-[#B6FF5C] font-semibold">
                          82%
                        </p>

                      </div>

                      <div className="w-full h-3 bg-[#1A1F1A] rounded-full overflow-hidden mt-4">

                        <div className="w-[82%] h-full bg-[#B6FF5C] rounded-full" />

                      </div>

                    </div>

                    {/* Metrics */}
                    <div className="flex flex-col gap-6 mt-10">

                      <div className="flex items-center justify-between">

                        <p className="text-[#8B9385]">
                          Savings Ratio
                        </p>

                        <p className="font-semibold">
                          34%
                        </p>

                      </div>

                      <div className="flex items-center justify-between">

                        <p className="text-[#8B9385]">
                          Expense Stability
                        </p>

                        <p className="font-semibold">
                          Moderate
                        </p>

                      </div>

                      <div className="flex items-center justify-between">

                        <p className="text-[#8B9385]">
                          Income Consistency
                        </p>

                        <p className="font-semibold text-[#B6FF5C]">
                          Strong
                        </p>

                      </div>

                      <div className="flex items-center justify-between">

                        <p className="text-[#8B9385]">
                          Financial Score
                        </p>

                        <p className="font-semibold text-[#B6FF5C]">
                          8.7 / 10
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsPage;