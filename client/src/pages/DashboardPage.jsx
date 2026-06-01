import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import StatCard from "../components/cards/StatCard";
import BankCard from "../components/cards/BankCard";

import ExpenseChart from "../components/charts/ExpenseChart";
import CashflowChart from "../components/charts/CashflowChart";

import TransactionTable from "../components/tables/TransactionTable";

import TransactionForm from "../components/forms/TransactionForm";

import { useTransactions } from "../context/TransactionContext";

import {
  calculateSummary,
  getCategoryData,
  getMonthlyData,
} from "../utils/analytics";

function DashboardPage() {

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

  return (
    <div className="min-h-screen bg-[#0B0F0C] text-white flex">

      <Sidebar />

      <div className="flex-1 ml-[110px]">

        <Navbar />

        <div className="p-6">

          <div className="max-w-[1600px] mx-auto">

            {/* Heading */}
            <div>

              <h1 className="text-[42px] leading-none font-bold">
                Financial Dashboard
              </h1>

              <p className="text-[#8B9385] mt-4 text-lg">
                Monitor transactions, analytics and spending insights.
              </p>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-12 gap-6 mt-8">

              {/* Left */}
              <div className="col-span-12 xl:col-span-8 flex flex-col gap-6">

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  <StatCard
                    title="Total Balance"
                    amount={`₹${totalBalance.toLocaleString()}`}
                    change="+18% this month"
                  />

                  <StatCard
                    title="Income"
                    amount={`₹${totalIncome.toLocaleString()}`}
                    change="+12% growth"
                  />

                  <StatCard
                    title="Expenses"
                    amount={`₹${totalExpense.toLocaleString()}`}
                    change="-4% this month"
                  />

                </div>

                {/* Cashflow */}
                <CashflowChart
                  monthlyData={monthlyData}
                />

                {/* Transactions */}
                <TransactionTable
                  transactions={transactions}
                />

              </div>

              {/* Right */}
              <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">

                <BankCard
                  totalBalance={totalBalance}
                />

                <ExpenseChart
                  categoryData={categoryData}
                  totalExpense={totalExpense}
                />

                <TransactionForm />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardPage;