import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import { useTransactions } from "../context/TransactionContext";

import {
  Wallet,
  ShoppingBag,
  UtensilsCrossed,
  Car,
  Film,
} from "lucide-react";

function BudgetsPage() {

  const { transactions } =
    useTransactions();

  // Budget Limits
  const budgetLimits = {
    Food: 25000,
    Shopping: 40000,
    Transport: 18000,
    Entertainment: 15000,
  };

  // Dynamic Spending
  const budgets = [
    {
      title: "Food",
      spent: transactions
        .filter(
          (item) =>
            item.category === "Food"
        )
        .reduce(
          (acc, item) =>
            acc + item.amount,
          0
        ),
      limit: budgetLimits.Food,
      icon: UtensilsCrossed,
    },

    {
      title: "Shopping",
      spent: transactions
        .filter(
          (item) =>
            item.category ===
            "Shopping"
        )
        .reduce(
          (acc, item) =>
            acc + item.amount,
          0
        ),
      limit:
        budgetLimits.Shopping,
      icon: ShoppingBag,
    },

    {
      title: "Transport",
      spent: transactions
        .filter(
          (item) =>
            item.category ===
            "Transport"
        )
        .reduce(
          (acc, item) =>
            acc + item.amount,
          0
        ),
      limit:
        budgetLimits.Transport,
      icon: Car,
    },

    {
      title: "Entertainment",
      spent: transactions
        .filter(
          (item) =>
            item.category ===
            "Entertainment"
        )
        .reduce(
          (acc, item) =>
            acc + item.amount,
          0
        ),
      limit:
        budgetLimits.Entertainment,
      icon: Film,
    },
  ];

  // Totals
  const totalBudget =
    budgets.reduce(
      (acc, item) =>
        acc + item.limit,
      0
    );

  const totalSpent =
    budgets.reduce(
      (acc, item) =>
        acc + item.spent,
      0
    );

  const remaining =
    totalBudget - totalSpent;

  return (
    <div className="min-h-screen bg-[#0B0F0C] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 ml-[110px]">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6">

          <div className="max-w-[1600px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">

              {/* Left */}
              <div>

                <div className="inline-flex items-center gap-2 bg-[#111411] border border-[#222722] rounded-full px-4 py-2 text-sm text-[#B6FF5C]">

                  <span className="w-2 h-2 rounded-full bg-[#B6FF5C]" />

                  Budget Planning System

                </div>

                <h1 className="text-[56px] leading-[60px] font-bold mt-6">

                  Smart Budget
                  <br />

                  Management

                </h1>

                <p className="text-[#8B9385] text-lg mt-6 leading-8 max-w-[760px]">

                  Track category spending, monitor budget limits
                  and analyze financial discipline using
                  real-time expense data.

                </p>

              </div>

              {/* Summary */}
              <div className="bg-[#111411] border border-[#222722] rounded-[32px] p-7 min-w-[340px] relative overflow-hidden">

                {/* Glow */}
                <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[#8B9385] text-sm">
                        Total Budget
                      </p>

                      <h2 className="text-[42px] leading-none font-bold mt-5">

                        ₹{totalBudget.toLocaleString()}

                      </h2>

                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                      <Wallet size={28} />

                    </div>

                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1A1F1A] my-7" />

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[#8B9385] text-sm">
                        Utilized
                      </p>

                      <h3 className="text-2xl font-semibold mt-3">

                        ₹{totalSpent.toLocaleString()}

                      </h3>

                    </div>

                    <div>

                      <p className="text-[#8B9385] text-sm">
                        Remaining
                      </p>

                      <h3 className="text-2xl font-semibold mt-3 text-[#B6FF5C]">

                        ₹{remaining.toLocaleString()}

                      </h3>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Budget Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              {budgets.map((item, index) => {

                const Icon = item.icon;

                const percentage =
                  Math.min(
                    (item.spent /
                      item.limit) *
                      100,
                    100
                  );

                return (
                  <div
                    key={index}
                    className="bg-[#111411] border border-[#222722] rounded-[32px] p-7 relative overflow-hidden"
                  >

                    {/* Glow */}
                    <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                    <div className="relative z-10">

                      {/* Top */}
                      <div className="flex items-start justify-between">

                        <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                          <Icon size={28} />

                        </div>

                        <div className="bg-[#181D18] border border-[#222722] px-4 py-2 rounded-xl text-sm text-[#B6FF5C]">

                          {percentage.toFixed(0)}%

                        </div>

                      </div>

                      {/* Content */}
                      <div className="mt-8">

                        <h2 className="text-[30px] leading-none font-bold">

                          {item.title}

                        </h2>

                        <p className="text-[#8B9385] mt-4 leading-7">

                          Real-time category expense tracking.

                        </p>

                      </div>

                      {/* Amounts */}
                      <div className="mt-8">

                        <div className="flex items-center justify-between">

                          <p className="text-sm text-[#8B9385]">
                            Spent
                          </p>

                          <p className="text-sm text-[#8B9385]">
                            Limit
                          </p>

                        </div>

                        <div className="flex items-center justify-between mt-3">

                          <h3 className="text-2xl font-semibold">

                            ₹{item.spent.toLocaleString()}

                          </h3>

                          <h3 className="text-2xl font-semibold text-[#B6FF5C]">

                            ₹{item.limit.toLocaleString()}

                          </h3>

                        </div>

                        {/* Progress */}
                        <div className="w-full h-3 bg-[#1A1F1A] rounded-full overflow-hidden mt-6">

                          <div
                            className="h-full bg-[#B6FF5C] rounded-full"
                            style={{
                              width: `${percentage}%`,
                            }}
                          />

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BudgetsPage;